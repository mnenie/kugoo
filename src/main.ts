import './assets/main.scss'
import 'vue-final-modal/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'

import App from './App.vue'
import router from './router'
import uicomponents from '@/components/UI'
import vue3Spinner from 'vue3-spinner'


const app = createApp(App)
uicomponents.forEach((component) => {
  app.component(component.name, component)
})

app.use(createPinia())
app.use(router)
app.use(createVfm())
app.use(vue3Spinner)
app.mount('#app')
