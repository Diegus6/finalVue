<template>
  <div class="row text-center justify-content-center mt-5">
      <div class="col-7">
        <label for="fecha">Equipo</label><br>
        <select class="mt-3" v-model="equipo" name="equipo">
            <option v-for="(equipo , index) in this.todosEquipos" :key="index" :value="equipo.name">{{equipo.name}}</option>
        </select>
        
        <Eliminar class="mt-3" :equipo="equipo"></Eliminar>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import Eliminar from "../components/Eliminar.vue";
export default {
  name: "EliminarJugador",
  components: {
    Eliminar
  },
  data() {
    return {
      todosEquipos:[],
      equipo:""
    };
  },
   created(){    
        axios.get("http://localhost:3000/clubs").then((result) => {
            this.todosEquipos = result.data;
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