<template>
    <topology :topologyData = topologyData></topology>
</template>

<script setup>
import { ref } from 'vue'
import {useMainStore} from "../../store/index"
import  topology  from '../../../components/topology.vue'
let mainStore = useMainStore()

 const topologyData = ref({
    data: mainStore.$state.chartData,  //绘图数据
    aniCol:true, //节点连线动态显示
    leftShow:true,  //左侧是否显示
    interactingCol:true  //画布内是否可交互
 })
</script>