<template>
  <div class="grid-containerRight">
    <div class="header">
      <allgreenHeader></allgreenHeader>
    </div>
    <div class="overdue">
      <overdueArea></overdueArea>
    </div>
    <div class="nextBestAction">
      <nextBestActionArea></nextBestActionArea>
    </div>
    <div class="percent">
      <percentArea></percentArea>
    </div>
    <div class="leads">
      <leadsArea></leadsArea>
    </div>
  </div>
</template>

<script>
import allgreenHeader from "./allgreenHeader.vue";
import overdueArea from "./overdueArea.vue";
import nextBestActionArea from "./nextBestActionArea.vue";
import percentArea from "./percentArea.vue";
import leadsArea from "./leadsArea.vue";

export default {
  data() {
    return {
      isHidden: false
    };
  },
  components: {
    allgreenHeader,
    overdueArea,
    nextBestActionArea,
    percentArea,
    leadsArea,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-containerRight {
  display: grid;
  height: 100%;
  width: 100%;
  float: right;
  border: 1px solid red;
  grid-template-rows: 1fr 2fr 2fr 2fr 2fr;
  grid-template-areas:
    "header  "
    "overdue "
    "nextBestAction "
    "percent "
    "leads";
}
</style>
