import {
    createStore
} from 'redux';
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

const store = createStore(counter);

export default store;