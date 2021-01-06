<template>
  <div class="LeftGrid">
    <svg class="exitIcon"></svg>
    <svg class="leftFillIcon" @click="toggleDisplay"></svg>
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
.leftFillIcon {
  background-image: url("../assets/caret-left-fill.svg");
  background-size: contain;
  width: 33px;
  height: 34px;
  margin-top: 20vh;
}
</style>
