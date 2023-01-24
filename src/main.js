import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faXmark, faSun, faMoon, faSign, faSignOut, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {faClock, faCalendar, faFloppyDisk, faPenToSquare, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'


library.add(faCoffee, faXmark, faSun, faMoon, faClock, faCalendar, faFloppyDisk, faPenToSquare, faTrashCan, faSign, faSignOut, faArrowLeft, faArrowRight)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
