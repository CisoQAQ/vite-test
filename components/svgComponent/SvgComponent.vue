<template>
    <svg id="svgBox"></svg>   
</template>
<script setup>


/*
*  思路
* 1.生成svgBox绘图区
* 2.整理传入的数据格式
* 3.绘制节点以及生成节点信息，添加拖拽方法
* 4.获取绘图区域的范围并且计算绘图中心位置
* 5.调整nodes节点的位置
* 6.根基数据整理绘制线路的颜色和状态
* 7.向外暴漏方法
* */
const drawChart = (data,levelData) => {
    // 加文案
    // 结构调整
    let svgBox = document.getElementById('svgBox')
    //控制当前svg尺寸
    let svg = new SVG(document.querySelector("#svgBox")).size("100%", 600); 
    let nodes = svg.group();
    let dataShow = []
    data.forEach((e,i) => {
        let attrName = e.id
        dataShow.push(attrName)
    })
    let drawList = []
    // 绘制node
    dataShow.forEach((item,index)=>{
        item = nodes.group().draggy();
        item.rect(100,50).fill("#0065dc")
        item.text(data[index].test).fill('#fff').center(60,25)
        // 插入icon  后面如果项目需要可以引入功能
        // item.image(data[index].icon).loaded(function(loader) {
        //     this.size(20, 20).center(30,25)
        // })
        //绘图target 关系梳理
        item.lineData = data[index].target
        item.name = dataShow[index]
        // 绘图数据更新
        drawList.push(item)
    })
    let numberIndex = 0 //循环计数
    let centPox = (levelData.length-1)/2
    //计算当前画布区域width/height
    let w =  svgBox.clientWidth/2
    let h =  (svgBox.clientHeight - 6)/2
    // 层级关系展开绘图
    levelData.forEach((item, index) => {
        let position_x = w + (index- centPox) * 170
        //重新定位
        let y  = (levelData[index].length - 1) / 2
        let position_y = null
        item.forEach((item1, index1)=>{
            numberIndex++
            position_y = h + ((index1 - y) * 100) - 25
            drawList[numberIndex - 1].translate(position_x, position_y)
        })
    })
    // 根据参数处理线路状态和类型
    drawList.forEach((e,i) => {
        if(e.lineData){
            e.lineData.forEach(e1=>{
                for (let index = 0; index < data.length; index++) {
                    // 0 为连接异常 1 正常连接
                    let colorCol =  e1.status == 0? 'red':'green'
                    if(e1.tid == data[index].id) {
                        e.connectable({
                            type:'curved',
                            color:colorCol,
                            sourceAttach:'perifery',
                            targetAttach:'perifery',
                            width:'22'
                        }, drawList[index])
                    }
                }
            })
        }
        
    })
}
defineExpose({ drawChart })
</script>