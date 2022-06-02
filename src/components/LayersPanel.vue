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
import layers from '../assets/jsons/layer.json';
import { TileArcGISRest } from 'ol/source';
import { Tile as TileLayer } from 'ol/layer';
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
            layers.forEach(lyr => {
                this.map.addLayer(
                    new TileLayer({
                        source: new TileArcGISRest({
                            url: lyr.url
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