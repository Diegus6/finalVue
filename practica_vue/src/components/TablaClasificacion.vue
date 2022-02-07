<template>

  <table class="table col-6">
    <thead>
      <tr>
        <th>Equipo</th>
        <th>Puntos</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(equipo , index) in this.equipos" :key="index">
        <td @click="mostrarJugadores(equipo.name)">{{equipo.name}}</td>
        <td>{{equipo.points}}</td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import axios from "axios";

export default {
  name: 'TablaClasificacion',
  emits:["mostrarJugadores"],
  data() {
      return {
       equipos:[]
      };
  },
  methods: {
    mostrarJugadores(nombreEquipo){
      
      this.$emit("mostrarJugadores",nombreEquipo);
    }
  },
  created(){
    axios.get("http://localhost:3000/clubs").then((result)=>{
      this.equipos=result.data;
    })
    
  }
}
</script>

<style>

</style>