<template>
  <table class="leadsTable">
    <tr>
      <th>num of leads</th>
      <th>%</th>
      <th>+/-</th>
    </tr>
    <tr>
      <td>12 Opportunities</td>
      <td>50%</td>
      <td>(-5.6%)</td>
    </tr>
    <tr>
      <td>8 Negotiation</td>
      <td>33.3%</td>
      <td>(+2.1)</td>
    </tr>
    <tr>
      <td>5 Wins</td>
      <td>20.8%</td>
      <td>(+4.5%)</td>
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
.leadsTable {
  float: left;
  width: 100%;
  height: 100px;
  text-align: left;
}
</style>
