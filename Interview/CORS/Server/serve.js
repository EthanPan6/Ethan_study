const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
const items = [
    {
        id: 1,
        title: 'title1'
    },
    {
        id: 2,
        title: 'title2'
    }
]

app.use(async (ctx, next) => {
    if (ctx.path === '/api/jsonp') {
        console.log("收到前端信息");
        const { cb, id } = ctx.query;
        const title = items.find(items => items.id == id)['title']
        const msg = `${cb}(${JSON.stringify(title)})`
        console.log(msg);
        ctx.body = msg
        return
    }
    if (ctx.path === '/api/fetch') {
        console.log("收到前端信息fetch");
        // fs.readFile('./data/1.json', 'utf8', function (err, data) {
        //     if (err) console.log(err);
        //     var test1 = JSON.parse(data);
        //     console.log(test1);
        //     ctx.body = JSON.stringify(test1)
        //     //

        // });
        console.log(ctx.query);
        ctx.body = 'Hello World';
        return
    }
})
// setInterval(() => {

// }, 3000)
console.log('listening port:8080...');

app.listen(8080)