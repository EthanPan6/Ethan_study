//统一管理api
import { get, post } from 'axios'
const url = "http://localhost:3000/user";
// const urlSearch="https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query="


// export const api1 = data => post('接口地址', data)
export const api2 = data => get(url, data)
export const api1 = data => post(url, data)

/*
    *调用
        api2().then(({ data }) => {
            codes
        });
*/
