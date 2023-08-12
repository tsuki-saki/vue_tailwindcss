import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'

new Vue({
        render: (h) => h(App)
    }).$mount('#app')
    // 这是 Vue 项目的入口文件。在这里，你会初始化并挂载 Vue 实例到 DOM。你可能会看到如下的代码：
    // 这段代码会将 App.vue 组件挂载到 HTML 中的 #app 元素上。