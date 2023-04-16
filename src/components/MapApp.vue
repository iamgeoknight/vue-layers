<template>
    <q-page class="flex flex-center">
        <div id="map">
        </div>
        <MapPopup/>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import MapPopup from './MapPopup.vue'

import { useMapStore } from '@/stores/mapStore';



interface CustomOptions extends TileLayer<OSM>{
    source?: OSM,
    name?: string,
    isBaseMap?: boolean
}

export default defineComponent({
    name: 'MapApp',
    components: {
        MapPopup
    },
    mounted() {
        const store = useMapStore();
        
        let map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                    name: 'OpenStreetMap',
                    isBaseMap: true
                } as CustomOptions)
            ],
            view: new View({
                center: [-9869708.964428628, 4908948.052576464],
                zoom: 4
            })
        });
        store.setMap(map);             
    }    
})
</script>

<style scoped>
#map {
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>