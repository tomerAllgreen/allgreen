<template>
  <div class="sidebar">
    <div class="grid-container">
      <LeftGrid
        id="left-grid"
        class="leftStyle"
        @toggle-display="toggleDisplay"
      ></LeftGrid>
      <RightGrid
        id="right-grid"
        class="rightStyle"
        v-show="isHidden"
      ></RightGrid>
    </div>
    <!-- <minLeftSidebar class="minLeftSidebar" @toggle-display="toggleDisplay" v-else></minLeftSidebar> -->
  </div>
</template>
<script>
import LeftGrid from "./LeftGrid.vue";
import RightGrid from "./RightGrid.vue";
//import minLeftSidebar from "./minLeftSidebar";

export default {
  data() {
    return {
      isHidden: true,
    };
  },
  components: {
    LeftGrid,
    RightGrid,
    //  minLeftSidebar,
  },
  computed: {},
  methods: {
    toggleDisplay() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  height: 100vh;
  width: minmax(auto, 25vw);
  float: right;
  border: 1px solid black;
  grid-template-areas: "leftGrid rightGrid";
}

.leftStyle {
  grid-area: leftGrid;
  background: #333f46;
}
.rightStyle {
  grid-area: rightGrid;
}

.minLeftSidebar {
  display: grid;
  height: 100vh;
  width: 3vw;

  border: 1px solid black;
  background: #333f46;
}
</style>
