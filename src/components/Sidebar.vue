<template>
  <div class="sidebar">
    <div class="grid-container">
      hh
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
grid-container {
  display: grid;
  height: 100vh;
  width: 25%;
  float: right;
  grid-template-columns: 1fr 8fr;
  border: 1px solid black;
  grid-template-areas: "leftGrid rightGrid";
}
</style>
