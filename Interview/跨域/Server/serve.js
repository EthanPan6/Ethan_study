const Koa = require('koa');
const app = new Koa();
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
})
// setInterval(() => {

// }, 3000)
console.log('listening port:8080...');

app.listen(8080)