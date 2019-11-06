#   vue之vue-cookies
npm链接：https://www.npmjs.com/package/vue-cookies
###  安装：
```bash
npm install vue-cookies --save
```
###  使用：
```vue
import Vue from 'Vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
```
## Api：
### 设置 cookie：
```vue
this.$cookies.set(keyName, time)   //return this
```
### 获取 cookie：
```vue
this.$cookies.get(keyName)       // return value 
```
### 删除  cookie：
```vue
this.$cookies.remove(keyName)   
// return  false or true , warning： next version return this； use isKey(keyname) return true/false,please
```
### 查看一个cookie是否存在（通过keyName）
```vue
this.$cookies.isKey(keyName)        // return false or true
```
### 获取所有cookie名称：
```vue
this.$cookies.keys()  // return a array
```