<template>
  <div class="col-10 text-center">
      <div v-for="(partido , index) in this.partidosJornada" :key="index">
          <h5 class="mt-5">Partido {{index+1}}</h5>
            <h6 v-if="partido.hasOwnProperty('score')">{{partido.team1}} {{partido.score[0]}} -- {{partido.score[1]}} {{partido.team2}}  </h6>
            <h6 v-else>{{partido.team1}}<input type="number" v-model="resultado1[partido.id]"> -- <input type="number" v-model="resultado2[partido.id]">{{partido.team2}} <button @click="guardarGoles(partido.id)">Guardar</button> </h6>
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
        guardarGoles(id){
            if(this.resultado1[id]==""||this.resultado1[id]==null||this.resultado1[id]<0||
            this.resultado2[id]==""||this.resultado2[id]==null||this.resultado2[id]<0){
                alert("Por favor mete goles a los dos equipos");
                return false;
            }else{
            let marcador={
                 score:[
                     this.resultado1[id],
                     this.resultado2[id]]
            }
            
            axios.get("http://localhost:3000/matches/"+id).then((result)=>{
                let jornada=result.data;
                let jornadaScore =Object.assign(jornada,marcador);
                this.guardarPartido(jornadaScore,id);
            })
            }
           
        },
        guardarPartido(jornadaScore,id){

            axios.put("http://localhost:3000/matches/"+id, jornadaScore).then((result) => {
                
                let primerEquipo=jornadaScore.team1;
                let golPrimerEquipo= jornadaScore.score[0];
                let segundoEquipo=jornadaScore.team2;
                let golSegundoEquipo = jornadaScore.score[1];
                
                if(golPrimerEquipo==golSegundoEquipo){
                    this.sumarEmpateClasifiacion(primerEquipo,segundoEquipo);
                }else if(golPrimerEquipo>golSegundoEquipo){
                    this.sumarVictoriaClasificacion(primerEquipo);
                }else if(golPrimerEquipo<golSegundoEquipo){
                    this.sumarVictoriaClasificacion(segundoEquipo);
                }
            });
            
            
        },
        sumarEmpateClasifiacion(primerEquipo,segundoEquipo){
            axios.get("http://localhost:3000/clubs",
            {params:{
                name:primerEquipo
        
                }}).then((result)=>{
                    let equipoClasificacion=result.data;
                    let puntos = (equipoClasificacion.points+1);
                    this.actualizarClasificacion(equipoClasificacion,puntos);

            })
            axios.get("http://localhost:3000/clubs",
            {params:{
                name:segundoEquipo
        
                }}).then((result)=>{
                    let equipoClasificacion=result.data;
                    let puntos = (equipoClasificacion.points+1);
                    this.actualizarClasificacion(equipoClasificacion,puntos);

            })
        },
        sumarVictoriaClasificacion(equipo){
            axios.get("http://localhost:3000/clubs",
            {params:{
                name:equipo
        
                }}).then((result)=>{
                    let equipoClasificacion=result.data;
                    equipoClasificacion.points = (equipoClasificacion.points+3);
                    this.actualizarClasificacion(equipoClasificacion);

            })
        },
        actualizarClasificacion(equipo){

            axios.put("http://localhost:3000/clubs", equipo).then((result) => {
                console.log(result);
            });
        }

    },
    beforeUpdate(){
        
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