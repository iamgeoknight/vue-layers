<template>    
    <div v-if = "layer.get('isExpanded') && legendRuleKeys" style="margin-top: 10px; margin-left: 20px;">
        <div :key="index" v-for="(rule, index) in layer.geostyle.rules" class="row">
            <span v-if = "layer.geostyle.rules.length > 1" class="col-2">
                <span class="material-symbols-outlined cursor-pointer" style="color: #54b582; font-size: 30px; font-variation-settings: 'FILL' 1; vertical-align: top" @click = "toggleSubLayer(layer, index, $event)">
                    check_circle
                </span>
            </span>
            <span :ref="`legend-vector-${layer.get('name')}-${index}`" v-html="renderLegend(layer, index)" class="col-8" :key="legendRuleKeys[`${layer.get('name')}-${index}`]" style="cursor: pointer;">            
            </span>
            <span class="col-2">
                <q-icon name="settings" size="sm" @click="setLayerRuleIndex(layer, index)" style="cursor:pointer" v-if="layer.get('name') != 'Boundary'"/>
            </span>
        </div>    
    </div>
    
</template>


<script lang="ts">
import LegendRenderer from "geostyler-legend/dist/LegendRenderer/LegendRenderer";
import type { Style } from "geostyler-style";
import type { Layer } from "ol/layer";
import type { Source } from "ol/source";
import StyleDialog from './styles/StyleDialog.vue';
import { useMapStore } from '@/stores/mapStore';


interface CustomOptions extends Layer<Source> {
    source: Source,
    geostyle: Style,
    geostyleTwin: Style
}

export default {
    name: "InLegend",
    components: {
        'style-dialog': StyleDialog
    },
    props: ["layer"],
    computed: {
        legendRuleKeys() {
            const store = useMapStore();
            return store.getLegendRuleKeys;
        }
    },
    methods: {
        setLayerRuleIndex(layer: any, ruleIndex: any) {
            const store = useMapStore();
            store.setStyleLayer(layer);
            store.setRuleIndex(ruleIndex);
            store.setStyleKey();
        },
        renderLegend(lyr: CustomOptions, idx: number){                   
            setTimeout(() => {                
                let el = this.$refs[`legend-vector-${lyr.get('name')}-${idx}`] as HTMLElement[];
                let iStyle = {
                    "rules": [
                        lyr.geostyle.rules[idx]
                    ]
                } as Style
                const renderer = new LegendRenderer({
                    maxColumnWidth: 240,
                    overflow: 'group',
                    styles: [iStyle],
                    size: [230, 300],
                    hideRect: false                    
                });
                renderer.render(el[0]);
            }, 10);            
        },
        toggleSubLayer(layer: CustomOptions, index: number, e: Event) {
            const filter = layer.geostyle.rules[index].filter as Array<any>;
            const twinFilter = layer.geostyleTwin.rules[index].filter as Array<any>;
            const target = e.target as HTMLElement;

            if (filter && filter[0]) {
                filter[0] = "";
                target.style.fontVariationSettings = '"FILL" 0';
            } else if (twinFilter) {
                filter[0] = twinFilter[0];
                target.style.fontVariationSettings = '"FILL" 1';
            }

            layer?.getSource()?.changed();
        }
    }
};
</script>
