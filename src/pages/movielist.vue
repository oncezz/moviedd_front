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
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div align="center">
        <div class="font24 q-ma-sm">เลือกแนวหนังที่คุณชอบ</div>
        <div class="row">
          <div class="col-4"></div>
          <div class="col">
            <div class="font20">เลือกสูงสุดได้ 8 แนว</div>
          </div>
          <div class="col-4" align="right">
            <div class="skipBtn font24" align="center">ข้าม</div>
          </div>
        </div>
      </div>
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
.skipBtn {
  width: 120px;
  height: 50px;
  line-height: 50px;
  color: black;
  background: #00d1ff;
  border-radius: 40px;
}
</style>
