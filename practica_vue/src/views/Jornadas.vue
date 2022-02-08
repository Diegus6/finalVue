<template>
<div>
  <div class="row text-center justify-content-center mt-5">
      <div class="col-5">
            <select v-model="jornadaSeleccionada" name="jornadas">Jornadas
                <option v-for="(jorn , index) in this.jornadas" :key="index" :value="[jorn.round,jorn.date]">{{jorn.round}}--{{jorn.date}}</option>
            </select>
        </div>
  </div>
  <div class="row text-center justify-content-center mt-5">
        <MostrarJornada :jornada="jornadaSeleccionada" :fecha="fecha"></MostrarJornada>
  </div>
 </div> 
</template>

<script>
import axios from "axios";
import MostrarJornada from '../components/MostrarJornada.vue'
export default {
  name: 'Jornadas',
  components: {
    MostrarJornada
  },
  data() {
      return {
            jornadas:[],
            jornadaSeleccionada:[],
            partidos:[]

      };
  },
  methods: {
    
  },
  mounted(){
      let jornadaApoyo=[];
      axios.get("http://localhost:3000/matches").then((result)=>{
        this.jornadas =[... new Set(result.data.map(x => {
            if(jornadaApoyo.length==0){
                jornadaApoyo.push({round:x.round,date:x.date});
                return {round:x.round,date:x.date};
            }else{
                for(let i=0;i<jornadaApoyo.length;i++){
                    if(jornadaApoyo[i].round==x.round && jornadaApoyo[i].date==x.date){
                        return false;
                    }  
                    
                }
                jornadaApoyo.push({round:x.round,date:x.date});
                return {round:x.round,date:x.date};
            }
              
        }))];

    });
    
    
  }
  
}
</script>
<style scoped>
  select{
      width: 100%;
  }
</style>