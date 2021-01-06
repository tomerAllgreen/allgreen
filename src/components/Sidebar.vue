<template>
  <div class="sidebar">
    <div class="grid-container">
      <LeftGrid
        id="left-grid"
        class="leftStyle"
        @toggle-display="toggleDisplay"
        @close-sidebar="closeSidebar"
        :is-hidden="isHidden"
      ></LeftGrid>
      <RightGrid
        id="right-grid"
        class="rightStyle"
        v-show="isHidden"
      ></RightGrid>
    </div>
  </div>
</template>
<script>
import LeftGrid from "./LeftGrid.vue";
import RightGrid from "./RightGrid.vue";

export default {
  data() {
    return {
      isHidden: true,
    };
  },
  components: {
    LeftGrid,
    RightGrid,
  },
  computed: {},
  methods: {
    toggleDisplay() {
      this.isHidden = !this.isHidden;
    },
    closeSidebar() {

    }
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
  display: flex;
  flex-direction: column;
  background: #333f46;
  max-width: 45px;
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
