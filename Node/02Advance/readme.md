# Node进阶教程

## http和url模块

安装`node-snippets`插件:通过简单的node关键字即可快速获取完整语句

res.write()乱码问题解决加上一句`<meta charset="UTF-8">`
```js
res.write('<head><meta charset="UTF-8"></head>')
 res.write('this is a 哪个 message')
```

### url模块

作用:解析url

+ `url.parse()`解析url
+ `url.format(urlObject)`parse的反操作,将对象转化为url
+ `url.resolve(from, to)`

### 热部署工具-supervisor/nodemon
热部署，就是在应用正在运行的时候升级软件，却不需要重新启动应用。为了节省应用开发和发布的时间。

二选一即可
二者都需要全局安装：
```cmd
 npm install -g supervisor 
 npm install -g nodemon 
```
使用
```cmd

## fs文件系统模块

fs 模块可用于与文件系统进行交互,所有的文件系统操作都具有同步的、回调的、以及基于 promise 的形式。

### 文件处理实例
1. 同步处理:同步的形式会阻塞 Node.js 事件循环和进一步的 JavaScript 执行，直到操作完成。 异常会被立即地抛出，可以使用 try…catch 处理，也可以冒泡。

```js
try {
  fs.unlinkSync('文件');
  console.log('已成功删除文件');
} catch (err) {
  // 处理错误
}
```

2. 回调:异步的形式总是把完成回调作为其最后一个参数。 传给完成回调的参数取决于具体方法，但第一个参数总是预留给异常。 如果操作被成功地完成，则第一个参数会为 null 或 undefined

```js
fs.unlink('文件', (err) => {
  if (err) throw err;
  console.log('已成功地删除文件');
});
```

3. promise:基于 promise 的操作会返回 Promise

```js
(async function(path) {
  try {
    await fs.unlink(path);
    console.log(`已成功地删除文件 ${path}`);
  } catch (error) {
    console.error('出错：', error.message);
  }
})('文件');
```

### fs.stat 检测状态

检测该路径是目录还是文件
语法`fs.stat(path[, options], callback)`

```js
fs.stat('./html', (err, data) => {
    if (err) throw err;
    console.log(data.isDirectory());//true
    console.log(data.isFile());//false
})
```

+ 若要只检查文件是否存在，但没有更多的操作，则建议使用 fs.access()。

### 读取目录fs.readdir

`fs.readdir(path[, options], callback)`
```js
fs.readdir('./html', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);//展示为一个数组
})
```

### 读取文件fs.readFile

异步地读取文件的全部内容。
`fs.readFile(path[, options], callback)`
读出的是二进制文件,可以通过toString方法变成字符串

```js
fs.readFile('文件名', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

### 创建目录

`fs.mkdir(path[, options], callback)`
+ 当`recursive: true`可以创建多级目录
+ 当`recursive: false`只可以创建一级目录

```js
// 创建 `./目录1/目录2/目录3`，不管 `/目录1` 和 `/目录1/目录2` 是否存在。
fs.mkdir('./目录1/目录2/目录3', { recursive: true }, (err) => {
  if (err) throw err;
});
```

+ 可以使用`npm i mkdirp --S`可以更方便的创建

### fs.writeFile写入文件
+ 当 file 是文件名时，则异步地写入数据到文件（如果文件已存在，则覆盖文件）。 data 可以是字符串或 buffer。
+ 如果 data 是普通的对象，则它必须具有自身的 toString 函数属性
`fs.writeFile(file, data[, options], callback)`

```fs
fs.writeFile('./html/text', 'Hello World', err => {
    if (err) throw err;
    console.log('写入成功');
})
```
不等待回调就对同一个文件多次使用 fs.writeFile() 是不安全的。 对于这种情况，建议使用 fs.createWriteStream()。

### 追加内容fs.appendFile

`fs.appendFile(path, data[, options], callback)`
异步地追加数据到文件，如果文件尚不存在则创建文件。 data 可以是字符串或 Buffer。

```js
fs.appendFile('文件.txt', '追加的数据', (err) => {
  if (err) throw err;
  console.log('数据已被追加到文件');
});
```

### 移动和重命名文件fs.rename

`fs.rename(oldPath, newPath, callback)`

```js
fs.rename('./html/text', './css/style.css', err => {
    if (err) throw err;
        console.log('成功');
})
```

### 删除文件

语法`fs.unlink(path, callback)`

```js
fs.unlink('文件', (err) => {
  if (err) throw err;
  console.log('已成功地删除文件');
});
```

### 删除目录

+ 如果目标路径下还有文件则无法删除
+ 如果目标路径是文件,也无法删除
`fs.rmdir(path[, options], callback)`
```js
fs.rmdir('./html', err => {
  if (err) throw err;
    console.log('删除成功');
})
```
## 异步

### promise的使用

```js
var p=new Promise((res,rej)=>{
    setTimeout(()=>{
        var num=18
        res(num)
    },1000)
})
p.then(data=>{
    console.log(data);
})
```

### async和await的使用

+ async可以将一个普通方法变成异步方法
+ await是等待异步方法执行完成,必须在异步方法中使用

#### async函数的基本形式

```js
async function foo() {}//函数声明

const foo = async function () {};//函数表达式

let obj = { async foo() {} };//对象的方法
obj.foo().then(...)

class Storage {//Class 的方法
constructor() {
    this.cachePromise = caches.open('avatars');
}
async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
}
}

const storage = new Storage();
storage.getAvatar('jake').then(…);

const foo = async () => {};//箭头函数
```

#### async函数的返回值总是一个Promise

无论async函数有无await操作，其总是返回一个Promise。

1. 没有显式return，相当于return Promise.resolve(undefined);
2. return非Promise的数据data，相当于return Promise.resolve(data);
3. return Promise, 会得到Promise对象本身

async总是返回Promise，因此，其后面可以直接调用then方法，
函数内部return返回的值，会成为then回调函数的参数
函数内部抛出的错误，会被then的第二个函数或catch方法捕获到

```js
//正常返回值
async function f0(){
    retrun 'hello world';
}

f0().then(v => console.log(v));//hello world

//抛出错误
async function f1(){
    throw new Error('出错了');
}

f1().then(
    v => console.log(v),
    e => console.log(e) //Error: 出错了
)
```

参考:[async的基本用法](https://www.cnblogs.com/mengff/p/9651502.html)