<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Postcomponent/>
  </div>
</template>

<script>
import Postcomponent from './components/Postcomponent.vue'

export default {
  name: 'App',
  components: {
    Postcomponent
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
