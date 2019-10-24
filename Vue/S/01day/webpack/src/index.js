import Vue from 'vue/dist/vue'
import 'bootstrap/dist/css/bootstrap.css'
import header from './template/header.html'
import main from './template/main.html'
new Vue({
    // V
    el: "#app",
    // M
    data: {
        title: "Carousel1231313"
    },
    template:`
        <div>
            ${header}
            ${main}
        </div>
    `,
    // render会在data变化的时候重新触发一次
    // render(h) {
    //     // h(标签的名字，该标签的属性，标签里面的值)
    //     let view = h('div', null, this.model)
    //     console.log(view)
    //     return view
    // }
})