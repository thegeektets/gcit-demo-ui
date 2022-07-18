import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadLang } from './lang/index'
import { registerIcons } from './utils/common'
import ElementPlus from 'element-plus'
import mitt from 'mitt'
import pinia from './stores/index'
import { directives } from './utils/directives'
import 'element-plus/dist/index.css'
import '/@/styles/base.scss'


async function start() {
    const app = createApp(App)

    app.use(router)
    app.use(pinia)

    const i18n = await loadLang(app)
    app.use(ElementPlus, { i18n: i18n.global.t })

    // directives(app) // instruction
    // registerIcons(app) // icons

    app.mount('#app')
    

    app.config.globalProperties.eventBus = mitt()

}
start()
