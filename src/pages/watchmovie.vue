<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm" align="center">
      <head-bar></head-bar>
      <!-- content  -->

      <div></div>
      <!-- end content  -->
      <end-bar :menu="2" :login="false"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- content  -->
      <div></div>
      <!-- end content  -->
      <end-bar :menu="2" :login="false"></end-bar>
    </div>
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; height: 100vh; margin: auto"
    >
      <head-bar></head-bar>
      <!-- content  -->
      <div>
        <div class="boxContent"></div>
        <div class="q-pa-md">
          <div class="font36 q-pl-md">{{ showMovie.nameEng }}</div>
          <div class="row">
            <div class="font16 q-pl-md" style="color: #797575">
              2021 18+ 1ชั่วโมง 27 นาที
            </div>
            <div class="col"></div>
            <div class="titleBtnPc font18 text-black" align="center">
              พากย์ไทย
            </div>
          </div>
          <div class="font16 q-pl-md">แอ็คชั่น | ผจญภัย | ตลก</div>
          <div class="q-pt-md font18 q-pl-md">
            เมื่อ Luke Hobbs ถูกส่งจากอังกฤษเพื่อไป หยุด ผู้ก่อการร้าย
            ที่มุ่งหวังจะทำลายโลก เขาต้องร่วมมือกับ Shaw นักปราบ มือดีจาก USA
            แต่ทุกอย่างไม่ได้ง่ายอย่างที่คิด
          </div>
        </div>
        <div>
          <div align="center" class="q-pt-xl">
            <img
              class="imageTagPc"
              src="../../public/image/finnBetTag.png"
              alt=""
            />
          </div>
        </div>
        <div class="q-pa-md">
          <div class="font18 q-pt-md">คุณอาจจะชอบเรื่องเหล่านี้</div>
        </div>
      </div>
      <!-- end content  -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import headBar from "../components/headBar.vue";
import endBar from "../components/endBar.vue";
export default {
  components: {
    headBar,
    endBar,
  },
  data() {
    return {
      showMovie: {
        id: 47,
      },
    };
  },
  methods: {
    async loadShowMovie() {
      let data = {
        id: this.showMovie.id,
      };
      let url = this.serverpath + "fe_watchmovie_loadshowmovie.php";
      let res = await axios.post(url, JSON.stringify(data));

      this.showMovie = res.data[0];
      console.log(this.showMovie);
    },
  },
  mounted() {
    this.loadShowMovie();
  },
};
</script>

<style lang="scss" scoped>
.boxContent {
  width: 100%;
  height: 500px;
  border: 1px solid red;
}
// ปุ่มเปลี่ยนคำบรรยาย
.titleBtnPc {
  width: 107.3px;
  height: 37px;
  line-height: 37px;
  background: #00d1ff;
  border: 1px solid #00d1ff;
  box-sizing: border-box;
}
.imageTagPc {
  width: 1139.39px;
  height: 162.1px;
}
</style>
