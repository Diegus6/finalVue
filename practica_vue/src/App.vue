<template>
<div class="container-fluid h-100">
  <div class="row min-vh-100 flex-column flex-md-row">
    <Menu class="col-lg-2 col-3"></Menu>
    <div class="col-lg-10 col-9">
        <div>
          <img src="./assets/laliga.png" width="">
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
