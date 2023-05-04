import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'

import './style.css'
import 'uno.css'

// import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon.vue'

async function setupApp() {
  const app = createApp(App)
  setupStore(app) //pinia
  await setupRouter(app) //router

  app.component('SvgIcon', SvgIcon)
  app.mount('#app') // mount app
}
setupApp()
