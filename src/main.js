import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavBar from './components/NavBar.vue'
import './assets/tailwind.css'

const app = createApp(App)
app.component('nav-bar',NavBar)
app.use(router)
app.mount('#app')

// createApp(App).component('nav-bar',NavBar).use(router).mount('#app')
