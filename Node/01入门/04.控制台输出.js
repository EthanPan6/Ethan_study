console.log('我的%s已经%d岁', '猫', 2)
console.time('是在这改名吗')
const x = 1
const y = 2
const z = 3
console.count('x 的值为 ' + x + ' 且已经检查了几次？')
console.count('x 的值为 ' + x + ' 且已经检查了几次？')
console.count('y 的值为 ' + y + ' 且已经检查了几次？')

const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => console.count(fruit))
apples.forEach(fruit => console.count(fruit))

const function2 = () => console.trace()
const function1 = () => function2()
function1()
console.timeEnd('是在这改名吗')

console.log('\x1b[33m%s\x1b[5m', '你好')
// console.log('\x1b[42;33m%s\x1b[5m', '你好')

const chalk = require('chalk')
console.log(chalk.yellow('你好'))

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 100 })
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100)