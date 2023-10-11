<template>
    <div style="position: absolute; top:0px; left: 300px; width: 100%;" v-if="layer || ruleIndex" :key="styleKey">
        <FillVectorStyle :layer="layer" :ruleIndex="ruleIndex" v-if="
            // @ts-ignore
            layer.geostyle.rules[ruleIndex].symbolizers[0].kind == 'Fill'"/>
        <LineVectorStyle :layer="layer" :ruleIndex="ruleIndex" v-if="
            // @ts-ignore
            layer.geostyle.rules[ruleIndex].symbolizers[0].kind == 'Line'"/>
        <IconVectorStyle :layer="layer" :ruleIndex="ruleIndex" v-if="
            // @ts-ignore
            layer.geostyle.rules[ruleIndex].symbolizers[0].kind == 'Mark' || layer.geostyle.rules[ruleIndex].symbolizers[0].kind == 'Icon' "/>
        <q-icon name="highlight_off" class="expansion_align cursor-pointer" size="md" style="position: fixed; top: 0px; right: -100%; color: #4caf50;" @click="closeStyleDialog"/>
    </div>
</template>
<script lang="ts">

    import { defineComponent } from 'vue'
    import FillVectorStyle from './changeStyle/FillVectorStyle.vue';
    import LineVectorStyle from './changeStyle/LineVectorStyle.vue';
    import IconVectorStyle from './changeStyle/IconVectorStyle.vue';
    import { useMapStore } from '@/stores/mapStore';
    export default defineComponent({
        name: "StyleDialog",
        components: {
            FillVectorStyle,
            LineVectorStyle,
            IconVectorStyle
        },
        computed: {
            layer() {
                const store = useMapStore();
                return store.getStyleLayer
            },
            ruleIndex() {
                const store = useMapStore();
                return store.getRuleIndex
            },
            styleKey() {
                const store = useMapStore();
                return store.getStyleKey
            }
        },
        methods: {
            closeStyleDialog() {
                const store = useMapStore();              
                let layer = store.getStyleLayer;
                let ruleIndex = store.getRuleIndex;

                // refresh legend on close
                // @ts-ignore
                store.setLegendRuleKey(`${layer.get('name')}-${ruleIndex}`);
                // Hide Style dialog on close
                store.setRuleIndex(null);
                store.setStyleLayer(null);
            }
        }
    });
</script>

<style scoped></style>