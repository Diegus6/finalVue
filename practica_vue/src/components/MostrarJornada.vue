<template>
  <div class="col-10 text-center">
      <div v-for="(partido , index) in this.partidosJornada" :key="index">
          <h5 class="mt-5">Partido {{index+1}}</h5>
            <h6 v-if="partido.hasOwnProperty('score')">{{partido.team1}} {{partido.score[0]}} -- {{partido.score[1]}} {{partido.team2}}  </h6>
            <h6 v-else>{{partido.team1}}<input type="number" v-model="resultado1[partido.id]"> -- <input type="number" v-model="resultado2[partido.id]">{{partido.team2}} <button @click="guardarPartido(partido.id)">Guardar</button> </h6>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "MostrarJornada",
    props:["jornada"],
    emits:[""],
    data() {
        return {
            partidosJornada:[],
            resultado1:[],
            resultado2:[]
        }
    },
    methods: {
        guardarPartido(id){
            console.log(id);
        }
    },
    beforeUpdate(){
        console.log(this.jornada);
        axios.get("http://localhost:3000/matches",
        {params:{
            round:this.jornada[0],
            date:this.jornada[1]
        
        }}).then((result)=>{
            this.partidosJornada=result.data;
            
        })
  }
}
</script>

<style>
input[type=number]{
    width: 10%;
}
</style>