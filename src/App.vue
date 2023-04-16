<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <LayersPanel/>
    </q-drawer>

    <q-page-container id="map_container">
      <MapApp />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue'
import MapApp from './components/MapApp.vue'
import LayersPanel from './components/LayersPanel.vue'


export default {
  name: 'LayoutDefault',

  components: {
    MapApp,
    LayersPanel
  },
  computed: {    
  },

  setup() {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>

<style>
@import url('../node_modules/ol/ol.css');
@import url('../public/material_fonts/material_fonts.css');


html,
body,
#app, #map_container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>