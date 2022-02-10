<template>

  <div>
      <ul>
          <li class="mt-4" v-for="(jugad,index) in this.jugadores" :key="index">{{jugad.name}}</li>
      </ul>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'Jugadores',
  props:["equipo"],
  data() {
      return {
          jugadores:[]
      };
  },
  methods: {
    
    
  },
  beforeMount(){
      
    axios.get("http://localhost:3000/players",
     {params:{
        team:this.equipo
        
    }}).then((result)=>{
      this.jugadores=result.data;
      
    }).catch(function(error){
        alert("Se ha producido un error al recoger los datos")
    });
    
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