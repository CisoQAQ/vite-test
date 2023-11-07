<template>
    <svgComponent ref="showMeth"></svgComponent>
</template>

<script setup>
import {onMounted, getCurrentInstance, ref} from "vue"
import { getData } from "../../api/index.js"
import  svgComponent  from '../../../components/svgComponent/SvgComponent.vue'
const showMeth = ref(null)  //过去方法
// 分组
const fz = (arr,fn) => {
    const obj = {};
        arr.forEach(item => {
            const key = JSON.stringify(fn(item));     
            obj[key] = obj[key] || [];
            obj[key].push(item)
        });
        return Object.keys(obj).map(k => {
            return obj[k];
        })
}
let data = [
    {
        "id": "a",
        "test": "根节点",
        "target": [
            {
                "status": 0,
                "tid": "b1"
            },
            {
                "status": 0,
                "tid": "b2"
            },
            {
                "status": 1,
                "tid": "b3"
            }
        ]
    },
    {
        "id": "b1",
        "test": "一层1",
        "target": [
            {
                "status": 0,
                "tid": "c1"
            },
            {
                "status": 0,
                "tid": "c4"
            }
        ]
    },
    {
        "id": "b2",
        "test": "一层2",
        "target": [
            {
                "status": 0,
                "tid": "c2"
            }
        ]
    },
    {
        "id": "b3",
        "test": "一层3",
        "target": [
            {
                "status": 0,
                "tid": "c3"
            }
        ]
    },
    {
        "id": "c1",
        "test": "二层1",
        "target": [
            {
                "status": 0,
                "tid": "d1"
            }
        ]
    },
    {
        "id": "c4",
        "test": "二层4"
    },
    {
        "id": "c2",
        "level": 2,
        "test": "二层2",
    },
    {
        "id": "c3",
        "test": "二层3",
        "target": [
            {
                "status": 1,
                "tid": "d1"
            }
        ]
    },
    {
        "id": "d1",
        "test": "三层",
    }
]
let levelData = []
let tData = [] //临时存储target
let tData1 = [] //变更target项
let levelIndex = 0 // level默认
let iIndex = 0  //index默认
data.map((item, index) =>{
    if(index == 0) {
        tData = []
        levelIndex = 0
        item.level = 0
        item.index = 0
        item.target.forEach(e => {
            tData.push(e.tid)
        })
    }else {
        if(tData.includes(item.id)) {
            item.index = iIndex
            iIndex++
            item.level = levelIndex + 1
            if(item.target) {
                item.target.forEach(e => {
                    tData1.push(e.tid)
                })
            }
        }else {
            item.index = 0
            iIndex = 1
            levelIndex+=1
            item.level = levelIndex+1
            tData = tData1
            tData1 = []
        }
    }

})
onMounted(()=>{
    levelData = fz(data, (item) => item.level) // 根据level分组
    showMeth.value.drawChart(data,levelData)
})


// const params =  {type:1, equId:'a'}
// let lyric = getData(params)
// let data = []
// lyric.then((res)=>{
//     data = res.data.content
//     console.log(data,levelData)
//     levelData = fz(data, (item) => item.level) // 根据level分组
//     showMeth.value.drawChart(data,levelData)
// });



</script>
