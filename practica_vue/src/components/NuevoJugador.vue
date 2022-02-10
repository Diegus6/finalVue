<template>

  <div>
      <form class="row justify-content-center">
        <h1>Añadir Nuevo Jugador</h1>
        <input class="mt-3 form-control" type="text" placeholder="Nombre Jugador" v-model="nombre">
        <input class="mt-3 form-control" v-if="this.equipo!=null||!isNaN(this.equipo)" type="text" v-model="this.equipo" readonly="readonly">
        
        <select class="mt-3 form-control" v-else v-model="equipoSeleccionado" name="equipos">
            <option v-for="(equi , index) in this.equipos" :key="index" :value="equi.name">{{equi.name}}</option>
        </select>

        <div class="row text-start align-items-center mt-3">
        <label class="col-4">Goles</label>
        <input class="col-6 form-control" type="number" v-model="goles">
        </div>
        <button @click.prevent="crearJugador" class="btn btn-success mt-3 form-control">Añadir jugador</button>
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
    crearJugador(){
      if(this.goles<0||this.nombre==""){
        alert("Introduce los datos correctamente");
      }else{
        if(this.equipo!=null||!isNaN(this.equipo)){
          let jugador={
            name:this.nombre,
            team:this.equipo,
            scores:this.goles
          }
          this.anadirJugador(jugador);
        }else{

          if(this.equipoSeleccionado==""){
            alert("Introduce los datos correctamente");
          }else{
            let jugador={
              name:this.nombre,
              team:this.equipoSeleccionado,
              scores:this.goles
            }
            this.anadirJugador(jugador);
          }
        }
        }
      
    },
    anadirJugador(jugador){
      
      axios.post("http://localhost:3000/players", jugador).then((result) => {
            this.nombre="";
            this.goles=null;
            this.equipoSeleccionado="";                     
      }).catch(function(error){
          alert("Se ha producido un error al introducir los datos")
      });

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

<style scoped>
input[type=number]{
  width: 30%;
}
</style>