import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import store from './vuex'

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(store)
    .mount('#app')
