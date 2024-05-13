import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' // import the pinia from library
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia) // access the pinia in global scope

app.mount('#app')
