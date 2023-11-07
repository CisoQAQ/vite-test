import request from '../../utils/request'

export const  getData = (params) => {
 return request ({
    url: '/api/dms/device/getTopologicalGraph/'+params.type+'/'+params.equId,
    method: 'post'
    })
}

