import { defineStore } from 'pinia'
import { Map } from 'ol'

class LegendRuleKeys {
  [key: string]: number;
}


export const useMapStore = defineStore('map', {  
  state: () => ({
    map: new Map({}),
    styleLayer: null,
    ruleIndex: null,
    styleKey: 0,
    legendRuleKeys : new LegendRuleKeys()
  }),
  getters: {
    getMap: (state) => state.map,
    getStyleLayer: (state) => state.styleLayer,
    getRuleIndex: (state) => state.ruleIndex,
    getStyleKey: (state) => state.styleKey,
    getLegendRuleKeys: (state) => state.legendRuleKeys
  },
  actions: {
    setMap(map: Map) {
      this.map = map
    },
    setStyleLayer(styleLayer: any) {
      this.styleLayer = styleLayer
    },
    setRuleIndex(ruleIndex: any) {
      this.ruleIndex = ruleIndex
    },
    setStyleKey() {
      this.styleKey += 1
    },
    setLegendRuleKeys(legendRuleKey: any) {
      this.legendRuleKeys = legendRuleKey
    },
    setLegendRuleKey(key: string) {
      this.legendRuleKeys[key] += 1;
    }
  },
})