// import Vue from 'vue'
// import App from './App.vue'

// import './assets/main.css'

// new Vue({
//         render: (h) => h(App)
//     }).$mount('#app')
// 这是 Vue 项目的入口文件。在这里，你会初始化并挂载 Vue 实例到 DOM。
// 这段代码会将 App.vue 组件挂载到 HTML 中的 #app 元素上。


// main.js
import Vue from "vue";
import VueRouter from 'vue-router'
import router from './router'
import App from "./App.vue"
// import axios from 'axios'
import './style/tailwind.css'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter);

new Vue({
    router,
    el: "#app",
    render: (h) => h(App)
}).$mount();