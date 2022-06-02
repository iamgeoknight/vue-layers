<template>
    <q-page class="flex flex-center">
        <div id = "map">
        </div>
    </q-page>
</template>

<script>
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';

export default {
    name: 'Map',
    mounted() {
        this.map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                    name: 'OSM'
                })
            ],
            view: new View({
                center: [-9869708.964428628, 4908948.052576464],
                zoom: 4
            })
        });


        this.$store.commit('setMap', this.map);
        

    }
}
</script>

<style scoped>
    #map{
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>