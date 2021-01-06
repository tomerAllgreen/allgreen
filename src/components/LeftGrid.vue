<template>
  <div class="LeftGrid">
    <svg class="exitIcon"></svg>
    <svg class="rightFillIcon" @click="toggleDisplay"></svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  emits: ["toggle-display"],
  methods: {
    toggleDisplay() {
      this.$emit("toggle-display");
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
}
.rightFillIcon {
  background-image: url("../assets/caret-right-fill.svg");
  background-size: contain;
  width: 33px;
  height: 34px;
  margin-top: 50vh;
}
</style>
