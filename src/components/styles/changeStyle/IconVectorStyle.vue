<template>
    <!-- <div style="width: 100%;"> -->
    <div style="background: white; text-align: center; font-size: larger; padding: 3px 0px; color: green;
    font-weight: bolder;">{{ layer.get('name') }} : {{ layer.geostyle.rules[ruleIndex].name }}</div>
    <q-tabs v-model="tab" inline-label class="bg-green text-white">
        <q-tab name="fill" label="Fill"></q-tab>
        <q-tab name="stroke" label="Stroke"></q-tab>
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="fill">
            <q-color v-model="hexa" no-header-tabs no-footer class="my-picker" @change="onFillColorChange" />
        </q-tab-panel>
        <q-tab-panel name="stroke">
            <q-color v-model="stroke" no-header-tabs no-footer class="my-picker" @change="onStrokeColorChange" />
            <q-slider v-model="width" color="green" :min="0" :max="20" label :step="0.2" @change="onWidthChange" />
            <q-slider v-model="radius" color="green" :min="0" :max="100" label :step="0.2" @change="onRadiusChange" />
        </q-tab-panel>
    </q-tab-panels>
    <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';

export default defineComponent({
    name: 'IconVectorStyle',
    props: ["layer", "ruleIndex"],
    data() {
        return {
            tab: ref('fill'),
            hexa: this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].color,
            stroke: this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].strokeColor,
            width: this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].strokeWidth,
            radius: this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].radius,
        }
    },
    methods: {
        onFillColorChange(e: any) {
            this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].color = e;
            this.layer.getSource().changed();
        },
        onStrokeColorChange(e: any) {
            this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].strokeColor = e;
            this.layer.getSource().changed();
        },
        onWidthChange(e: any) {
            this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].strokeWidth = e;
            this.layer.getSource().changed();
        },
        onRadiusChange(e: any) {
            this.layer.geostyle.rules[this.ruleIndex].symbolizers[0].radius = e;
            this.layer.getSource().changed();
        }
    }

})
</script>