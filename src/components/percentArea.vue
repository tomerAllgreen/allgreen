<template>
  <hr class="percentLine" />
  <div class="circlePrecent">
    <svg>
      <circle cx="35" cy="35" r="35"></circle>
      <circle cx="35" cy="35" r="35"></circle>
    </svg>
    <div class="number">
      <h2>70%</h2>
    </div>
  </div>
  <hr class="percentLine" />
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
hr {
  width: 90%;
  border: 3px solid #99b898;
  border-radius: 5px;
  margin-top: 0px;
}
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: 47px;
  text-align: left;
  color: #284817;
  margin-top: 50%;
  margin-left: 150%;
}
.circlePrecent {
  position: relative;
  width: 90px;
  height: 90px;
}
.circlePrecent svg {
  position: relative;
  width: 100px;
  height: 100px;
  margin-left:10%;
}
.circlePrecent svg circle {
  position: relative;
  width: 100px;
  height: 100px;
  fill: none;
  stroke-width: 10;
  stroke: #0000;
  transform: translate(5px, 5px);
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
  stroke-linecap: round;
}
.circlePrecent svg circle:nth-child(1) {
  stroke-dashoffset: 0;
  stroke: #f3f3f3;
}
.circlePrecent svg circle:nth-child(2) {
  stroke-dashoffset: calc(220 - (220 * 70) / 100);
  stroke: rgba(40, 72, 23, 1);
}
.circlePrecent .number {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
</style>
