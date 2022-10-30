<template>
    <div>        
        <q-tabs
            v-model="tab"
            inline-label
            class="bg-green text-white">
        <q-tab name="layers" icon="layers" label="Layers" />
            
        </q-tabs>
        
        <span  v-if="map != null" >
            <q-list separator bordered clickable :key="index" v-for="(layer, index) in map.getLayers().getArray().slice().reverse()">
                <q-item  style="height: 10px;">
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

<script>


import { Vector as VectorSource } from 'ol/source';
import { VectorImage } from 'ol/layer';
import GeoJSON from 'ol/format/GeoJSON';
import OpenLayersParser from "geostyler-openlayers-parser";
import layers from "../static/layers/layers"
import InLegend from "./InLegend";



const parser = new OpenLayersParser();

export default {
    name: 'LayersPanel',   
    data() {
        return {
            splitterModel: 1,
            tab: 'mails'
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
            return this.$store.state.map
        }
    },
    methods: {        
        addLayers() {            
            layers.forEach(lyr =>{
                let current_layer = new VectorImage({
                    source: new VectorSource({
                        features: new GeoJSON({'featureProjection': 'EPSG:3857'}).readFeatures(lyr.layer)
                    }),
                    name: lyr.name,
                    minZoom: lyr.minZoom,
                    isExpanded: false
                });
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
        toggleLayer(layer, e) {
            let flag = layer.getVisible();
            layer.setVisible(!flag);
            if (flag == false) {
                e.target.style.fontVariationSettings = '"FILL" 1';
            }
            else {
                e.target.style.fontVariationSettings = '"FILL" 0';
            }
        },
        toggleSwitch(layer, e) {
            let flag = layer.get('isExpanded');
            layer.set('isExpanded', !flag);
            if (flag == false ) {
                e.target.innerHTML = "keyboard_arrow_up";
            }
            else {
                e.target.innerHTML = "keyboard_arrow_down";
            }
        }
    }
    
}
</script>
<style scoped>
    .label_align {
        text-align: left;
    }

    .expansion_align {
        text-align: right;
    }
</style>