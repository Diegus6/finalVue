import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Clasificacion from '../views/Clasificacion.vue'

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/clasificacion',
        name: 'Clasificacion',
        component: Clasificacion
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router