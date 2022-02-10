<template>
    <div class="row text-center justify-content-between mt-5 text-center">
        <div class="col-6 border border-secondary rounded mt-4" v-for="(equi,index) in this.equipos" :key="index">
            <h1 class="mt-3">{{equi.name}}</h1>
            <Jugadores :equipo="equi.name"></Jugadores>
            <button class="btn-primary" @click="this.nuevoJugador(equi.name)">Nuevo Jugador</button>
        </div>
        <div v-show="mostrar==true" class="row justify-content-center">
        <NuevoJugador  :equipo="equipoNuevoJugador"  class="col-5 d-flex mt-5 border border-secondary rounded p-5"></NuevoJugador>
        </div>
    </div> 
</template>

<script>
import axios from "axios";
import NuevoJugador from '../components/NuevoJugador.vue'
import Jugadores from '../components/Jugadores.vue'

export default {
  name: 'Equipos',
  components: {
    NuevoJugador,Jugadores
  },
  data() {
      return {
           equipos:[],
           equipoNuevoJugador:"",
           mostrar:false 

      };
  },
  methods: {
    nuevoJugador(equipoJugador){
       
        this.equipoNuevoJugador=equipoJugador;
        this.mostrar=true;
        
    }
  },
  created(){
    axios.get("http://localhost:3000/clubs").then((result)=>{
      this.equipos=result.data;
      
    }).catch(function(error){
        alert("Se ha producido un error al recoger los datos")
    });
    
  }
  
}
</script>
<style scoped>
  
</style>