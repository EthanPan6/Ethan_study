import store from '../store'
const LOGIN_COOKIE_NAME = 'sessionId'

export function isAuthenticated() {
    //验证登录状态并输出username
    return _getCookie(LOGIN_COOKIE_NAME)
}

export function authenticateSuccess(token) {
    //登录设置token
    _setCookie(LOGIN_COOKIE_NAME, token)
}

export function logout() {
    //退出清除token
    _setCookie(LOGIN_COOKIE_NAME, '', 0)
}

function _getCookie(name) {
    let start, end
    if (document.cookie.length > 0) {//有cookie
        start = document.cookie.indexOf(name + '=')//cookie中sessionId=的位置
        if (start !== -1) {
            start = start + name.length + 1//
            end = document.cookie.indexOf(';', start)
            if (end === -1) {
                end = document.cookie.length
            }

            let token = document.cookie.substring(start, end)
            store.dispatch({ type: 'LogIn', token })
            return token
        }
    }
    return
}

function _setCookie(name, value, expire) {
    let date = new Date()
    date.setDate(date.getDate() + expire)
    document.cookie = name + '=' + value + '; path=/' +
        (expire ? ';expires=' + date.toGMTString() : '')
}