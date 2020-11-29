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
### 删除文件

语法`fs.unlink(path, callback)`

```js
fs.unlink('文件', (err) => {
  if (err) throw err;
  console.log('已成功地删除文件');
});
```

