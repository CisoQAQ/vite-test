import Mock from 'mockjs'
//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据
let List:any[] = []
for(let i:number = 0;i<4;i++) {
    List.push(Mock.mock({
        'id':i+1,
        'name':'@CNAME',
        'age|0-100':21,
        'address':'@city(true)',
        'sex|0-1':0
    }))
}

Mock.mock('/getData', 'get', ()=>{
    return {
        status:200, //请求成功状态码,
        message:'数据获取成功',
        data:List //模拟的请
    }
})

Mock.mock('/addData','post', (option:object)=>{
    let paramsData = JSON.parse(option.body)
    paramsData.id = List.length+1
    List.push(paramsData)
    return {
        status:200, //请求成功状态码,
        message:'数据添加成功',
        data:List //模拟的请
    }
})

Mock.mock('/deleteData','post',(option:object) =>{
    let paramsData = JSON.parse(option.body)
    for(let i=0;i<List.length;i++) {
        if(List[i].id == paramsData.id) {
            List.splice(i,1)
            return {
                status:200,
                message:'数据删除成功',
                data:List
            }
        }
    }
})

