<template>
  <table class="table col-6 table-striped">
    <thead>
      <tr>
        <th>Jugadores</th>
        <th>Goles</th>
        <th v-if="mostrarBotones">Goles A Sumar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(jugador, index) in jugadores" :key="index">
        <td>{{ jugador.name }}</td>
        <td>{{ jugador.scores }}</td>
        <td v-if="mostrarBotones">
          <input v-model="goles[jugador.id]" type="number" /><button
            @click="sumarGoles(jugador.id)"
            class="sumar btn btn-success"
          >
            Sumar
          </button>
        </td>
        <td v-if="mostrarBotones">
          <button @click="eliminarJugador(jugador.id)" class="btn btn-danger">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "TablaClasificacion",
  props: ["jugadores", "mostrarBotones"],
  data() {
    return {
      goles: [],
    };
  },
  methods: {
    eliminarJugador(id) {
      console.log(id);
      axios.delete("http://localhost:3000/players/" + id);
    },
    sumarGoles(id) {
      if (isNaN(this.goles[id]) || this.goles[id] <= 0) {
        alert("Meta los goles por favor");
      } else {
        
        let jugador;
        for (let i = 0; i < this.jugadores.length; i++) {
          if (this.jugadores[i].id == id) {
            jugador = this.jugadores[i];
          }
        }
        jugador.scores += this.goles[id];
        axios.put("http://localhost:3000/players/"+id,jugador)
        .catch(function(error){
                
          alert("Se ha producido un error al insertar los datos")
        });
      }
    },
  },
  created() {},
};
</script>

<style scoped>
input[type="number"] {
  width: 30%;
}

.sumar {
  margin-left: 5%;
}
</style>