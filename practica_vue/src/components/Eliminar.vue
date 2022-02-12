<template>

  <div v-if="this.jugadores.length>0">
      
        <label for="fecha">Jugadores</label><br>
        <select class="mt-3" v-model="idJugador" name="equipo">
            <option v-for="(jug , index) in this.jugadores" :key="index" :value="jug.id">{{jug.name}}</option>
        </select><br>
        <button @click="eliminarJugador" class="btn btn-danger mt-3" v-if="this.idJugador!=''">Eliminar</button>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'Jugadores',
  props:["equipo"],
  data() {
      return {
          jugadores:[],
          idJugador:""
      };
  },
  methods: {
    eliminarJugador(){
        
        axios.delete("http://localhost:3000/players/" + this.idJugador).then((result)=>{
            this.idJugador="";
        }).catch(function(error){    
          alert("Se ha producido un error al eliminar los datos")
        });
    }
    
  },
  beforeUpdate(){
      
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
label{
    font-size: 200%;
    font-weight: bold;
}
select{
    width: 50%;
}
</style>