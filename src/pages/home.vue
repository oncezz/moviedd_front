<template>
  <div>
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->

      <!-- ---- content ------->
      <end-bar :login="loginKey == 1 ? true : false" :menu="1"></end-bar>
    </div>
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->

      <!-- ---- content ------->
      <end-bar :login="loginKey == 1 ? true : false" :menu="1"></end-bar>
    </div>
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar :login="loginKey == 1 ? true : false"></head-bar>

      <div class="posterPromote"></div>
      <!-- ---- content ------->
    </div>
  </div>
</template>

<script>
import headBar from "../components/headBar.vue";
import endBar from "../components/endBar.vue";
export default {
  components: {
    headBar,
    endBar,
  },
  data() {
    return {
      loginKey: this.$q.localStorage.getItem("login"),
    };
  },
};
</script>

<style lang="scss" scoped>
.posterPromote {
  width: 1200px;
  height: 670px;
  margin: auto;
  border: 1px solid yellow;
}
</style>
