<template>
  <div class="row inicio text-center justify-content-center">
    <h1 id="tituloNuevoPartido" class="mt-5">AÑADIR NUEVO PARTIDO</h1>
    <form class="col-5">
        <div class="row">
            <div class="form-group">
                <label for="fecha" class="mt-3">Fecha</label>
                <input type="date" v-model="fecha" class="form-control" name="fecha"  id="fecha">
            </div>
            <div class="form-group justify-content-center">
                <label for="jornada" class="mt-3">Jornada</label>
                <input type="number" v-model="jornada" class="form-control" name="jornada"  id="jornada">
            </div>
            <label for="fecha" class="mt-3">Primer Equipo</label>
            <select v-model="primerEquipo" name="primerEquipo">
                
                <option v-for="(equipo , index) in this.todosEquipos" :key="index" :value="equipo.name">{{equipo.name}}</option>
            </select>

            <label for="fecha" class="mt-3">Segundo Equipo</label>
            <select v-model="segundoEquipo" name="segundoEquipo">
                
                <option v-for="(equipo , index) in this.todosEquipos" :key="index" :value="equipo.name">{{equipo.name}}</option>
            </select>
            <div class="justify-content-center">
            <button @click.prevent="agregarPartido" class="mt-3 bg-danger">Enviar</button>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'NuevoPartido',
  components: {
    
  },
  data() {
      return {
          todosEquipos:[],
          fecha:"",
          primerEquipo:"",
          segundoEquipo:"",
          jornada: 0
      };
  },
  methods: {
    agregarPartido(){
        if(this.jornada<=0||this.fecha==""||this.primerEquipo==""||this.segundoEquipo==""||this.primerEquipo==this.segundoEquipo){
            alert("Ponga todos los datos por favor");
        }else{  
            let partido ={
                round:"Jornada "+this.jornada,
                date: this.fecha,
                team1: this.primerEquipo,
                team2: this.segundoEquipo
            }
            axios.post("http://localhost:3000/matches", partido).then((result) => {
                this.jornada=0;
                this.fecha="";
                this.primerEquipo="";
                this.segundoEquipo="";
                
            }).catch(function(error){
                alert("Se ha producido un error al recoger los datos")
            });
         }
    }
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
  #tituloNuevoPartido{
      color: crimson;
  }

  #jornada{
      width: 100%;
  }

  button{
      width: 100px;
  }
</style>