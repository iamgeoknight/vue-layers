<template>
    <div>
        
        <q-tabs
            v-model="tab"
            inline-label
            class="bg-green text-white"
        >
            <q-tab name="layers" icon="layers" label="Layers" />
            
        </q-tabs>           
        <q-list v-if="map != null" separator bordered>
            <q-item clickable v-ripple :key="layer.index" v-for="(layer) in map.getLayers().getArray().slice().reverse()" style="height: 10px;">
                <q-item-section avatar>
                    <q-checkbox color="primary" v-model = "layer.getProperties().visible" @click = "toggleLayer(layer)"/>
                </q-item-section>

                <q-item-section class = "label_align">            
                    {{layer.get('name')}}            
                </q-item-section>            
            </q-item>
        </q-list>
    </div>
</template>

<script>


import { Vector as VectorSource } from 'ol/source';
import { VectorImage } from 'ol/layer';
import GeoJSON from 'ol/format/GeoJSON';

// Import geojson layers
import us_states from '../assets/geojsons/us_states.json';
import us_counties from '../assets/geojsons/us_counties.json';
import us_outline from '../assets/geojsons/us_outline.json';
import earthquake from '../assets/geojsons/earthquake.json';

let layers = [
    {
        "layer": us_states,
        "name": 'US States',
        "visible": true
        
    },
    {
        "layer": us_counties,
        "name": 'US Couties',
        "visible": true
    },
    {   
        "layer": us_outline,
        "name": 'US Outline',
        "visible": true
    },
    {
        "layer": earthquake,
        "name": 'Earthquakes',
        "visible": true
    }
]


export default {
    name: 'LayersPanel',   
    data() {
        return {
            splitterModel: 1,
            tab: 'mails'
        }
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
                console.log(lyr.layer);
                this.map.addLayer(
                    new VectorImage({
                        source: new VectorSource({
                            features: new GeoJSON({'featureProjection': 'EPSG:3857'}).readFeatures(lyr.layer)
                        }),
                        name: lyr.name
                    })
                )
            });
        },
        toggleLayer(layer) {
            layer.setVisible(!layer.getVisible());
        }
    }
    
}
</script>
<style scoped>
    .label_align {
        text-align: left;
    }
</style>