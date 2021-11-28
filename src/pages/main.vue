<template>
  <div>
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->

      <!-- ---- content ------->
      <end-bar :login="false" :menu="1"></end-bar>
    </div>
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->

      <!-- ---- content ------->
      <end-bar :login="false" :menu="1"></end-bar>
    </div>
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar></head-bar>
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
};
</script>

<style lang="scss" scoped></style>
