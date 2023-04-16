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
                        <!-- <q-checkbox color="primary" v-model = "layer.getProperties().visible" @click = "toggleLayer(layer)"/> -->
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
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { Vector as VectorSource } from 'ol/source';
import { VectorImage } from 'ol/layer';
import GeoJSON from 'ol/format/GeoJSON';
import OpenLayersParser from "geostyler-openlayers-parser";
import layers from '../static/layers/layers';
import InLegend from "./InLegend.vue";

import { useMapStore } from '@/stores/mapStore';


import type { Style } from "geostyler-style";
// import type { Layer } from "ol/layer";
// import type { Source } from "ol/source";


interface CustomOptions extends VectorImage<VectorSource> {
    source: VectorSource,
    geostyle: Style,
    geostyleTwin: Style,
    name: string,
    minZoom: number,
    isExpanded: boolean
}

interface CustomLayer {
    layer: Object;
    name: string;
    minZoom: number;
    style: Style;
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
        InLegend
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
    methods: {        
        addLayers() {                 
            (layers as CustomLayer[]).forEach((lyr: CustomLayer) => {                
                let current_layer = new VectorImage({
                    source: new VectorSource({
                        features: new GeoJSON({'featureProjection': 'EPSG:3857'}).readFeatures(lyr.layer)
                    }),
                    name: lyr.name,
                    minZoom: lyr.minZoom,
                    isExpanded: false                    
                } as CustomOptions) as CustomOptions;
                
                current_layer.geostyle = lyr.style;
                current_layer.geostyleTwin = JSON.parse(JSON.stringify(lyr.style));
                if (lyr.style) {
                    parser
                    .writeStyle(lyr.style)
                    .then(({output: olStyle}) => current_layer.setStyle(olStyle))
                    .catch(error => console.log(error));
                }
                this.map.addLayer(current_layer);
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