<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <LayersPanel/>
    </q-drawer>

    <q-page-container id = "map_container">
      <Map/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Map from './components/Map.vue'
import LayersPanel from './components/LayersPanel.vue'
import { mapGetters } from "vuex";

export default {
  name: 'LayoutDefault',

  components: {
    Map,
    LayersPanel
  },
  computed: {
    ...mapGetters("map", {
      map: "map"
    })
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>

<style>
@import url('../node_modules/ol/src/ol.css');
@import url('../public/material_fonts/material_fonts.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>