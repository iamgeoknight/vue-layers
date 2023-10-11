<template>
    <div>        
        <q-tabs
            v-model="tab"
            inline-label
            class="bg-green text-white">
            <q-tab name="layers" icon="layers" label="Layers" />
            
        </q-tabs>
        
        <span  v-if="map.hasOwnProperty('disposed')" >
            <q-list separator bordered clickable :key="index" v-for="(layer, index) in map.getLayers().getArray().slice().reverse()">
                <q-item  style="height: 10px;" v-if="layer.get('name') !== 'highlight_layer'">
                    <q-item-section avatar>                        
                        <span class="material-symbols-outlined cursor-pointer" style="color: #54b582; font-size: 40px; font-variation-settings: 'FILL' 1;" @click = "toggleLayer(layer, $event)" v-if="!layer.get('isBaseMap')">
                            check_circle
                        </span>
                    </q-item-section>                    

                    <q-item-section class = "label_align">            
                        {{layer.get('name')}}            
                    </q-item-section>   
                    <q-item-section avatar>         
                        <q-icon name="keyboard_arrow_down" class="expansion_align cursor-pointer" size="25px" @click="toggleSwitch(layer, $event)" v-if="!layer.get('isBaseMap')"/>                
                    </q-item-section>
                </q-item>  
                <q-separator/>
                <InLegend :layer = "layer"/>                
            </q-list>
        </span>
        <style-dialog/>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import OpenLayersParser from "geostyler-openlayers-parser";
import layers from '../static/layers/layers';
import InLegend from "./InLegend.vue";
import { VectorTile as VectorTileLayer} from 'ol/layer';
import { VectorTile as VectorTileSource } from 'ol/source';
import { VectorImage } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { useMapStore } from '@/stores/mapStore';
import { MVT } from 'ol/format'
import { GeoJSON } from 'ol/format';
import StyleDialog from './styles/StyleDialog.vue';



import type { Style } from "geostyler-style";
import pako from 'pako';


interface CustomOptions1 extends VectorTileLayer  {
    geostyle: Style;
    geostyleTwin: Style;
    name: string;
    isExpanded: boolean;
}

interface CustomOptions2 extends VectorImage<VectorSource> {
    geostyle: Style;
    geostyleTwin: Style;
    name: string;
    isExpanded: boolean;
}

interface CustomLayer {
    name: string;
    minZoom: number;
    maxZoom: number;
    style: Style;
    layerType: string,
    url: string;
    visible: boolean;
    layer: VectorImage<VectorSource>
}



const parser = new OpenLayersParser();

export default defineComponent({
    name: 'LayersPanel',
    data() {
        return {
            splitterModel: 1,
            tab: 'mails',
        }
    },
    components: {
        InLegend,
        'style-dialog': StyleDialog
        
    },
    watch: {
        'map': {
            handler() {
                this.addLayers();
            },
            deep: false
        }
    },
    computed: {
        map() {    
            const store = useMapStore();
            return store.getMap
        }
    },
    updated() {
        const store = useMapStore();
        let legendRuleKeys = {};
        // @ts-ignore
        let allLayers: CustomOptions1[] = this.map.getAllLayers();
        allLayers.forEach((layer) => {
            if (!(layer.get('name') === 'OpenStreetMap' || layer.get('name') === 'highlight_layer')) {
                layer.geostyle.rules.forEach((i, j) => {
                    let key = `${layer.get('name')}-${j}`;
                    Object.assign(legendRuleKeys, {
                        [key]: 0
                    })
                });
            }
        });
        store.setLegendRuleKeys(legendRuleKeys);
    },
    methods: {    
        tileLoadFunction(tile: any, url: any) {
            tile.setLoader(function (extent: any, resolution: any, projection: any) {
                fetch(url, {
                    headers: {
                        "Content-Type": "application/vnd.mapbox-vector-tile",
                        'Content-Encoding': "gzip"
                    }
                }).then(function (response) {
                    response.arrayBuffer().then(function (data) {
                        const format = tile.getFormat()
                        if (response.status == 200) {

                            let raw_features = pako.ungzip(data);
                            const features = format.readFeatures(raw_features, {
                                extent: extent,
                                featureProjection: projection
                            });

                            tile.setFeatures(features);
                        } else {
                            const features = format.readFeatures([], {
                                extent: extent,
                                featureProjection: projection
                            });
                            tile.setFeatures(features);
                        }
                    });
                })
            });
        },   
        addLayers() {                 
            (layers as CustomLayer[]).forEach((lyr) => {
                if (lyr.layerType === 'vectortile') {                   
                    let current_layer = new VectorTileLayer({
                        source: new VectorTileSource({
                            tilePixelRatio: 1,
                            format: new MVT(),
                            tileLoadFunction: this.tileLoadFunction,
                            url: lyr.url,
                            tileSize: 256
                        } as Object),
                        minZoom: lyr.minZoom,
                        maxZoom: lyr.maxZoom,                        
                        visible: lyr.visible,
                        renderMode: 'vector'                      
                    }) as CustomOptions1;
                    
                    current_layer.setProperties({
                        name: lyr.name,
                        isExpanded: false
                    });
                    
                    current_layer.geostyle = lyr.style;
                    current_layer.geostyleTwin = JSON.parse(JSON.stringify(lyr.style));

                    if (lyr.style) {
                        parser
                            .writeStyle(lyr.style)
                            .then(({ output: olStyle }) => {                   
                                current_layer.setStyle(olStyle);
                            })
                            .catch(error => console.log(error));
                    }
                    this.map.addLayer(current_layer);
                } else if (lyr.layerType === 'geojson') {
                    let current_layer = new VectorImage({
                        source: new VectorSource({
                            features: new GeoJSON({ 'featureProjection': 'EPSG:3857' }).readFeatures(lyr.layer)
                        })                        
                    }) as CustomOptions2;

                    current_layer.setProperties({
                        name: lyr.name,
                        isExpanded: false
                    });
                    current_layer.geostyle = lyr.style;
                    current_layer.geostyleTwin = JSON.parse(JSON.stringify(lyr.style));

                    if (lyr.style) {
                        parser
                            .writeStyle(lyr.style)
                            .then(({ output: olStyle }) => {
                                current_layer.setStyle(olStyle);
                            })
                            .catch(error => console.log(error));
                    }
                    this.map.addLayer(current_layer);
                }
            });
        },
        toggleLayer(layer: any, e: Event) {
            let flag = layer.getVisible();
            const target = e.target as HTMLElement;
            layer.setVisible(!flag);
            if (flag == false) {
                target.style.fontVariationSettings = '"FILL" 1';
            }
            else {
                target.style.fontVariationSettings = '"FILL" 0';
            }
        },
        toggleSwitch(layer: any, e: Event) {
            let flag = layer.get('isExpanded');
            const target = e.target as HTMLElement;
            layer.set('isExpanded', !flag);
            if (flag == false ) {
                target.innerHTML = "keyboard_arrow_up";
            }
            else {
                target.innerHTML = "keyboard_arrow_down";
            }
        }
    }
    
})
</script>
<style scoped>
    .label_align {
        text-align: left;
    }

    .expansion_align {
        text-align: right;
    }
</style>