<template>

  <div>
      <form class="row justify-content-center">
        <h1>Añadir Nuevo Jugador</h1>
        <input class="mt-3" type="text" placeholder="Nombre Jugador" v-model="nombre">
        <input class="mt-3" v-if="this.equipo!=null||!isNaN(this.equipo)" type="text" v-model="this.equipo" readonly="readonly">
        <select class="mt-3" v-else v-model="equipoSeleccionado" name="equipos">
            <option v-for="(equi , index) in this.equipos" :key="index" :value="equi.name">{{equi.name}}</option>
        </select>
        <label>Goles Jugador</label>
        <input class="mt-3" type="number" v-model="goles">
        <button @click.prevent="anadirJugador" class="btn btn-success mt-3">Añadir jugador</button>
      </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'NuevoJugador',
  props:["equipo"],
  data() {
      return {
        nombre:"",
        equipos:[],
        equipoSeleccionado:"",
        goles:null

      };
  },
  methods: {
    anadirJugador(){
      console.log(this.nombre);
      console.log(this.equipoSeleccionado);
    }
    
  },
  beforeMount(){
    console.log(this.equipo)
    axios.get("http://localhost:3000/clubs").then((result)=>{
      this.equipos=result.data;
      
    }).catch(function(error){
        alert("Se ha producido un error al recoger los datos")
    });
  }
}
</script>

<style>

</style>