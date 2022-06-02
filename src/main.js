import { createApp } from 'vue'
import App from './App.vue'
import store from './store/map'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App);
app.config.globalProperties.$store = store;
app.use(Quasar, quasarUserOptions).mount('#app')
