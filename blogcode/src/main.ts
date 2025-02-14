import '@/assets/styles/main.css'
import '@/assets/styles/index.css'  // tailwind css
import '@quasar/extras/material-icons/material-icons.css' // Import icon libraries
import 'quasar/dist/quasar.css'// Import Quasar css

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {Quasar, SessionStorage, Notify} from 'quasar'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
    config: {},
    plugins: {SessionStorage, Notify},
})
app.mount('#app')
