// 这是home组件的所有的网络请求
import {request} from "./require";
export function getMenuDatide (){
    return request({
        url : "/home/multidata"
    })
}
export function GitGoodsList (type,page) {
    return request({
        url : "/home/data",
        params : {
            type,
            page
        }
    })
}