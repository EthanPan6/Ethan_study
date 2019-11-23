import { createStore } from 'redux';

const counter = (state = {
    isLogin: false,
    token: ''
}, action) => {
    switch (action.type) {
        // 修改的动作
        case "LogIn":
            return {
                ...state,
                isLogin: true,
                token: action.token
            }
        case "LogOut":
            return {
                ...state,
                isLogin: false,
                token: ''
            }
        default:
            return state;
    }
}
// const counter = (state = {
//     num: 0
// }, action) => {
//     switch (action.type) {
//         // 修改的动作
//         case "add":
//             return {
//                 return {
//                     ...state,
//                     num: ++num
//                 }
//             }
//         case "cdd":
//             return {
//                 ...state,
//                 num: --num
//             }
//         default:
//             return state;
//     }
// }
//action 操作
//state  存储





const store = createStore(counter);

export default store;