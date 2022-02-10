<template>
  <div class="row text-center justify-content-start mt-5">
    <div class="col-7">
      <TablaClasificacion
        @mostrarJugadores="mostrarJugadoresMetodo"
      ></TablaClasificacion>
    </div>
    <div class="col-5">
      <TablaJugadores
        v-if="jugadores.length >0"
        :jugadores="jugadores"
      ></TablaJugadores>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TablaClasificacion from "../components/TablaClasificacion.vue";
import TablaJugadores from "../components/TablaJugadores.vue";
export default {
  name: "Clasifiacion",
  components: {
    TablaClasificacion,
    TablaJugadores,
  },
  data() {
    return {
      jugadores: []
    };
  },
  methods: {
    mostrarJugadoresMetodo(equipo) {
      
      axios
        .get("http://localhost:3000/players", {
          params: {
            team: equipo,
          },
        })
        .then((result) => {
          this.jugadores = result.data;
          
        })
        .catch(function (error) {
          alert("Se ha producido un error al recoger los datos");
        });
    },
  },
};
</script>
<style scoped>
</style>