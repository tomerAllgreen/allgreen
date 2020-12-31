<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hello-world msg="Welcome to Your Vue.js App" />
  <sidebar></sidebar>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  data() {
    return {};
  },
};
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
