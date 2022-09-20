import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerIcons } from './utils/common'
import ElementPlus from 'element-plus'
import mitt from 'mitt'
import { directives } from './utils/directives'
import 'element-plus/dist/index.css'
import '/@/styles/base.scss'
import './axios'


async function start() {
    const app = createApp(App)

    app.use(router)

    app.use(ElementPlus, { i18n: 'en' })

    // directives(app) // instruction
    registerIcons(app) // icons

    app.mount('#app')
    

    app.config.globalProperties.eventBus = mitt()

}
start()
