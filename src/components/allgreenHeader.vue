<template>
  <h2>Allgreen <svg class="openFullScreenIcon"></svg></h2>
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
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: bold;
  line-height: 47px;
  text-align: left;
  color: #284817;
  margin-top: 1%;
}
.openFullScreenIcon {
  background-image: url("../assets/box-arrow-up-left.svg");
  background-size: contain;
  width: 25px;
  height: 25px;
  float: right;
  margin-right: 10%;
  margin-top:5%;
}
</style>
