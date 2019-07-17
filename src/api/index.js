import ajax from './ajax'

//根据经纬度获取位置详情
export const reqAdress = (geohash) => ajax(`/position/${geohash}`)
