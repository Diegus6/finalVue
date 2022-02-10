<template>

  <table class="table col-6">
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


export default {
  name: 'TablaClasificacion',
  props:["jugadores"],
  data() {
      return {
       
      };
  },
  methods: {
   
  },
  
}
</script>

<style>

</style>