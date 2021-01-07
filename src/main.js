import app from './app'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import './locales'
import './plugins'
import './components/global.less'
app.use(store).use(router).mount('#app')
