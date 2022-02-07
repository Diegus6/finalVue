<template>
  <div class="row text-center justify-content-start mt-5">
    <div class="col-7">
      <TablaClasificacion @mostrarJugadores="mostrarJugadoresMetodo"></TablaClasificacion>
    </div>
    <div class="col-5">
      <TablaJugadores v-show="equipoAMostrar!=''" :equipo="equipoAMostrar"></TablaJugadores>
      </div>
  </div>
</template>

<script>

import TablaClasificacion from '../components/TablaClasificacion.vue'
import TablaJugadores from '../components/TablaJugadores.vue'
export default {
  name: 'Clasifiacion',
  components: {
    TablaClasificacion,TablaJugadores
  },
  data() {
      return {
       equipoAMostrar:""
      };
  },
  methods: {
    mostrarJugadoresMetodo(equipo){
      this.equipoAMostrar=equipo;
      console.log(this.equipoAMostrar)
    }
  },
  
}
</script>
<style scoped>
  
</style>