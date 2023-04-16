import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(Quasar, quasarUserOptions)

app.mount('#app')
