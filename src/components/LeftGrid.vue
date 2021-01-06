<template>
  <div class="LeftGrid">
    <svg class="exitIcon" @click="closeSidebar"></svg>
    <svg
      class="rightFillIcon"
      :class="{right: !isHidden}"
      @click="toggleDisplay"
    ></svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    isHidden: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["toggle-display", "close-sidebar"],
  methods: {
    toggleDisplay() {
      this.$emit("toggle-display");
    },
    closeSidebar() {
      this.$emit("close-sidebar");
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.exitIcon {
  background-image: url("../assets/x.svg");
  background-size: contain;
  width: 45px;
  height: 45px;
  vertical-align: top;
}
.rightFillIcon {
  background-image: url("../assets/caret-right-fill.svg");
  background-size: contain;
  width: 33px;
  height: 34px;
  margin-top: 50vh;
}

.right {
  background-image: url("../assets/caret-left-fill.svg");
}
</style>
