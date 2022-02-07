<template>

  <table class="table col-6">
    <thead>
      <tr>
        <th>Jugadores</th>
        <th>Goles</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(jugador , index) in this.jugadores" :key="index">
        <td>{{jugador.name}}</td>
        <td>{{jugador.scores}}</td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import axios from "axios";

export default {
  name: 'TablaClasificacion',
  props:["equipo"],
  data() {
      return {
       jugadores:[]
      };
  },
  methods: {
   
  },
  beforeUpdate(){
      console.log(this.equipo);
    axios.get("http://localhost:3000/players",
    {params:{
        team:this.equipo
        
    }}).then((result)=>{
      this.jugadores=result.data;
    })
    
  }
}
</script>

<style>

</style>