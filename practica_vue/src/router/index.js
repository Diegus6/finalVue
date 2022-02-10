import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Clasificacion from '../views/Clasificacion.vue'
import Jornadas from '../views/Jornadas.vue'
import Equipos from '../views/Equipos.vue'
const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/clasificacion',
        name: 'Clasificacion',
        component: Clasificacion
    },
    {
        path: '/jornadas',
        name: 'Jornadas',
        component: Jornadas
    },
    {
        path: '/equipos',
        name: 'Equipos',
        component: Equipos
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router