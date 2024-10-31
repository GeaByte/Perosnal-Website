<template>
  <div id="app">
    <nav-bar />
    <router-view/>
    <footer-section />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue"

export default {
  name: 'App',
  components: { NavBar, FooterSection },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>