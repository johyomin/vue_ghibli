import { createApp } from 'vue'
import App from './App.vue'

// 확장자.js 는 생략가능
import router from './router/index.js'
import store from './store/store.js'


createApp(App).use(router).use(store).mount('#app')
