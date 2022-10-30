<template>
    <span>
    <div v-if = "layer.get('isExpanded')" style="margin-top: 10px;">
        <div :key="index" v-for="(rule, index) in layer.geostyle.rules">
            <span v-if = "layer.geostyle.rules.length > 1">
                <span class="material-symbols-outlined cursor-pointer" style="color: #54b582; font-size: 32px; font-variation-settings: 'FILL' 1; vertical-align: top" @click = "toggleSubLayer(layer, index, $event)">
                    check_circle
                </span>
            </span>
            <span :ref="`legend-vector-${layer.get('name')}-${index}`" v-html="renderLegend(layer, index)"></span>
        </div>    
    </div>
    </span>
</template>


<script>
import LegendRenderer from "geostyler-legend/dist/LegendRenderer/LegendRenderer";
export default {
    name: "InLegend",
    props: ["layer"],
    methods: {
        renderLegend(lyr, idx){                   
            setTimeout(() => {                
                let el = this.$refs[`legend-vector-${lyr.get('name')}-${idx}`];
                let iStyle = {
                    "rules": [
                        lyr.geostyle.rules[idx]
                    ]
                }
                const renderer = new LegendRenderer({
                    maxColumnWidth: 240,
                    overflow: 'group',
                    styles: [iStyle],
                    size: [230, 300],
                    hideRect: false,
                    iconSize: [100, 100]
                });
                renderer.render(el[0]);
            }, 10);            
        },
        toggleSubLayer(layer, index, e) {
            if (layer.geostyle.rules[index]['filter'][0]) {
                layer.geostyle.rules[index]['filter'][0] = "";
                e.target.style.fontVariationSettings = '"FILL" 0';
            } else {
                layer.geostyle.rules[index]['filter'][0] = layer.geostyleTwin.rules[index]['filter'][0];
                e.target.style.fontVariationSettings = '"FILL" 1';
            }
            layer.getSource().changed();
        }        
    }
};
</script>
