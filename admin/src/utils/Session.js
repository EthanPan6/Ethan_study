const LOGIN_COOKIE_NAME = 'sessionId'

export function isAuthenticated() {
  return _getCookie(LOGIN_COOKIE_NAME)
}

export function authenticateSuccess(token) {
  _setCookie(LOGIN_COOKIE_NAME, token)
}

export function logout() {
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
      console.log(document.cookie.substring(start, end))
      return unescape(document.cookie.substring(start, end))
      //返回cookie 被解码后的一个副本。
      //ECMAScript v3 已从标准中删除了 unescape() 函数，并反对使用它，因此应该用 decodeURI() 和 decodeURIComponent() 取而代之。
    }
  }
  return ''
}

function _setCookie(name, value, expire) {
  let date = new Date()
  date.setDate(date.getDate() + expire)
  document.cookie = name + '=' + escape(value) + '; path=/' +
    (expire ? ';expires=' + date.toGMTString() : '')
}