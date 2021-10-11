import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// SASS Theme
import './assets/sass/app.scss'

const app = createApp(App)
    .use(store)
    .use(router)

app.mount('#app')