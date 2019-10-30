console.log('你已经被我监控了')
const imgs = document.querySelectorAll('img')
console.log(imgs)
for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3190494106,3274888102&fm=26&gp=0.jpg"
}