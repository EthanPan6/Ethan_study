# Typescript 

## 安装和配置

### 安装

```cmd
npm install -g typescript

npm install -g typescript

yarn global add typescript
```

### 运行

```cmd
tsc file.ts
```

### 配置文件

1. 创建tsconfig.json文件
```cmd
tsc --init
```

2. 监听tsconfig文件:终端->配置任务->输入tsc,然后选择需要监听的tsconfig文件


3. 运行任务:进入我们文件所在的路径,终端->运行任务->选择tsc监听,然后就自动会将我们的ts文件编译成js文件


## 数据类型

```ts
let isOk:boolean=false;

let a:number=12;

let str:string='hello world';

//单类型数组
let arr1:number[]=[1,2,3,5];
let arr2:Array<number>=[12,5,9,5]

//多类型数组
let arr3:Array<number|boolean>=[12,5,9,5,true]

//指定类型数组----元组

let arr4:[string,number,boolean]=['s',1,true];

