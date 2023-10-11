<template>
        <div style="background: white; text-align: center; font-size: larger; padding: 3px 0px; color: green;
    font-weight: bolder;">{{ layer.get('name') }} : {{ layer.geostyle.rules[ruleIndex].name }}</div>
        <q-tabs v-model="tab" inline-label class="bg-green text-white">
            <q-tab name="fill" label="Fill"></q-tab>            
            <q-tab name="stroke" label="Stroke"></q-tab>            
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="fill">
                <q-color v-model="hexa" no-header-tabs no-footer class="my-picker" @change="onFillColorChange"/>
            </q-tab-panel>
            <q-tab-panel name="stroke" >
                <q-color v-model="stroke" no-header-tabs no-footer class="my-picker" @change="onStrokeColorChange"/>
                <q-slider v-model="width" color="green" :min="0" :max="20" label :step="0.2" @change="onWidthChange"/>
            </q-tab-panel>
        </q-tab-panels>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';

export default defineComponent({
    name: 'FillVectorStyle',
    props: ["layer", "ruleIndex"],
    data() {
        return {
            tab: ref('fill'),
            hexa: this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].color,
            stroke: this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].outlineColor,
            width: this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].outlineWidth, 
        }
    },    
    methods: {
        onFillColorChange(e: any) {
            this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].color = e;
            this.layer.getSource().changed();
        },
        onStrokeColorChange(e: any) {
            this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].outlineColor = e;
            this.layer.getSource().changed();
        },
        onWidthChange(e: any) {
            this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].outlineWidth = e;
            this.layer.getSource().changed();
        }
    }

})
</script>