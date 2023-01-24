import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Login from '../components/Login.vue'
import SigIn from '../components/SigIn.vue'
import Calendar from '../components/Calendar.vue'
import Formulario from '../components/Formulario.vue'


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: "/",
      name: "login",
      component: Login,
      meta: {
        title: 'INICIO DE SESION'
      }
    },
    {
      path: "/siginup",
      name: "siginup",
      component: SigIn,
      meta: {
        title: 'REGISTRO'
      }
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar,
      meta: {
        title: 'CALENDARIO DE EVENTOS'
      }
    },
    {
      path: "/datos/:selectedDate",
      name: "datos",
      component: Formulario,
      meta: {
        title: 'FORMULARIO DE EVENTOS'
      }
    }

  ]
})

export default router