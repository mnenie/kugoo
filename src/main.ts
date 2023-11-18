import './assets/main.scss'
import 'vue-final-modal/style.css'
import 'vue-select/dist/vue-select.css';
import 'video.js/dist/video-js.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'

import App from './App.vue'
import router from './router'
import uicomponents from '@/components/UI'
import vue3Spinner from 'vue3-spinner'
import * as bootstrap from 'bootstrap'
import vSelect from 'vue-select'
import VueVideoPlayer from '@videojs-player/vue'


const app = createApp(App)
uicomponents.forEach((component) => {
  app.component(component.name, component)
})

app.use(createPinia())
app.use(router)
app.use(createVfm())
app.use(vue3Spinner)
app.use(bootstrap)
app.component('v-select', vSelect)
app.use(VueVideoPlayer)
app.mount('#app')
