import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app= createApp(App)

// ElementPlus加载
app.use(ElementPlus)

app.use(router).mount('#app')
