import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Clasificacion from '../views/Clasificacion.vue'
import Jornadas from '../views/Jornadas.vue'
import NuevoPartido from '../views/NuevoPartido.vue'
import Equipos from '../views/Equipos.vue'
import Jugador from '../views/Jugador.vue'

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
        path: '/nuevopartido',
        name: 'NuevoPartido',
        component: NuevoPartido
    },
    {
        path: '/equipos',
        name: 'Equipos',
        component: Equipos
    },
    {
        path: '/jugadores',
        name: 'Jugador',
        component: Jugador
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router