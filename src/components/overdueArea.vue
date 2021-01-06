<template>
  <hr class="OverdueLine" />
  <h3>OVERDUE</h3>
  <table id="overdueMissionTable" class="missionTable">
    <tr>
      <td>
        <svg class="circleIcon">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            FI
          </text>
        </svg>
      </td>
      <td>AT&E</td>
    </tr>
    <tr>
      <td>
        <svg class="circleIcon">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            MR
          </text>
        </svg>
      </td>
      <td>Wepsi</td>
    </tr>
  </table>
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
  border: 3px solid #e84a5f;
  border-radius: 5px;
  margin-top: 0px;
}
h3 {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 23px;
  text-align: left;
  margin-top: 0px;
  margin-left:5%;
}
.missionTable {
  width: 50%;
  text-align: left;
  align-items: center;
    margin-left:5%;

}
.circleIcon {
  background-image: url("../assets/circle.svg");
  background-size: contain;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
