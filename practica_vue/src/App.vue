<template>
<div class="container-fluid h-100">
  <div class="row min-vh-100 flex-column flex-md-row">
    <Menu class="col-lg-2 col-3"></Menu>
    <div class="col-lg-10 col-9">
      <div class="row"><div class="row justify-content-center"><img class="col-6" height="120" src="./assets/laliga.png"></div></div>
        <div class="row">
          <router-view/>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  data() {
      return {
       
      };
    },
    
}
    
    

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
