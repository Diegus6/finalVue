<template>

  <table class="table col-6 table-striped">
    <thead>
      <tr>
        <th>Jugadores</th>
        <th>Goles</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(jugador , index) in jugadores" :key="index">
        <td>{{jugador.name}}</td>
        <td>{{jugador.scores}}</td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import axios from "axios";

export default {
  name: 'Jugadores',
  props:["equipo", "actualizado"],
  emits:["yaActualizado"],
  data() {
      return {
          jugadores:[],
          estaActualizado:""
      };
  },
  methods: {
    
    actualizarEquipo(){
    axios.get("http://localhost:3000/players",
      {params:{
          team:this.equipo
        
      }}).then((result)=>{
        this.jugadores=result.data;
        this.$emit("yaActualizado")
      }).catch(function(error){
        alert("Se ha producido un error al recoger los datos")
      });

      
    }
  },
  beforeMount(){
      this.actualizarEquipo();
    
    
  },
  updated(){
    if(this.actualizado){
      if(this.actualizado==false){
        console.log("falso")
      }else{
        console.log("actualiza")
        this.actualizarEquipo();
      }
    }
    
  },
  created(){
    this.estaActualizado=this.actualizado;
  }
}
</script>

<style scoped>
li{
    font-size: 150%;
    font-weight: bold;
    list-style:none;
}
</style>