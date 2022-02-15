<template>
  <div class="row text-center justify-content-start mt-5">
    <div class="col-5">
      <TablaClasificacion
        @mostrarJugadores="mostrarJugadoresMetodo"
      ></TablaClasificacion>
    </div>
    <div class="col-7">
      <TablaJugadores
        v-if="jugadores.length >0"
        :jugadores="jugadores" :mostrarBotones="mostrar"
        @actualizarJugadores="actualizarJugadores"
      ></TablaJugadores>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TablaClasificacion from "../components/TablaClasificacion.vue";
import TablaJugadores from "../components/TablaJugadores.vue";
export default {
  name: "Jugador",
  components: {
    TablaClasificacion,
    TablaJugadores,
  },
  data() {
    return {
      jugadores: [],
      mostrar:true
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
    actualizarJugadores(equipo){
        this.mostrarJugadoresMetodo(equipo);
    }
  },
};
</script>
<style scoped>
</style>