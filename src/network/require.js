import axios from "axios";
export function request (config) {
    // 创建axios的实例化对象，并设置一些配置
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/h8',
        timeout : 8000
      });
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        return config;
    }, error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use( res => {
        // 对响应数据做点什么
        return res.data;
    }, error => {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    // 发送真正的网络请求 
    return instance(config)
}