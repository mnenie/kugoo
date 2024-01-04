import './assets/main.scss'
import 'vue-final-modal/style.css'
import 'vue-select/dist/vue-select.css';
import 'video.js/dist/video-js.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import uicomponents from '@/components/UI'
import firebaseConfig from '@/firebase/index'

import { createVfm } from 'vue-final-modal'
import vue3Spinner from 'vue3-spinner'
import * as bootstrap from 'bootstrap'
import vSelect from 'vue-select'
import VueVideoPlayer from '@videojs-player/vue'

import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig);

import { createYmaps } from 'vue-yandex-maps';

const app = createApp(App)

const ymaps = createYmaps({
  apikey: import.meta.env.VITE_API_KEY_YANDEXMAP,
});


app.use(createPinia())
app.use(router)
app.use(uicomponents)
app.use(createVfm())
app.use(vue3Spinner)
app.use(bootstrap)
app.component('v-select', vSelect)
app.use(VueVideoPlayer)
app.use(ymaps);
app.mount('#app')
