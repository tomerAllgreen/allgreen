<template>
  <hr class="BestActionLine" />
  <h3>NEXT BEST ACTION</h3>
  <table id="NextMissionTable" class="missionTable">
    <tr>
      <td>
        <svg class="circleIcon">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            D
          </text>
        </svg>
      </td>
      <td>Roborebi</td>
    </tr>
    <tr>
      <td>
        <svg class="circleIcon">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            LR
          </text>
        </svg>
      </td>
      <td>Elisha</td>
    </tr>
  </table>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
hr {
  width: 90%;
  border: 3px solid #fecea8;
  border-radius: 5px;
  margin-top: 0px;
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
