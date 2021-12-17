<template>
  <div>
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="promoteMobile"></div>
      <div class="font14">หนังใหม่</div>
      <div class="overx">
        <div class="row inover">
          <div class="q-pr-sm">
            <img
              class="posterPicMobile"
              src="../../public/image/temp/99.jpg"
              alt=""
            />
          </div>
          <div class="q-pr-sm">
            <img
              class="posterPicMobile"
              src="../../public/image/temp/3.jpg"
              alt=""
            />
          </div>
          <div class="q-pr-sm">
            <img
              class="posterPicMobile"
              src="../../public/image/temp/5.jpg"
              alt=""
            />
          </div>
          <div class="q-pr-sm">
            <img
              class="posterPicMobile"
              src="../../public/image/temp/4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="font14">แฟนตาซี</div>
      <div class="row">
        <div class="q-pa-sm">
          <img class="posterPicMobile" :src="getPathPic('movie', 52)" alt="" />
        </div>
        <div class="q-pa-sm">
          <img class="posterPicMobile" :src="getPathPic('movie', 53)" alt="" />
        </div>
        <div class="q-pa-sm">
          <img class="posterPicMobile" :src="getPathPic('movie', 54)" alt="" />
        </div>
      </div>
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
      <head-bar></head-bar>

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
      slide: 1,
      loginKey: this.$q.localStorage.getItem("login"),
    };
  },
  methods: {
    // เอา url ของ posterรูป type{"movie","series"} id=idของหนัง
    getPathPic(type, id) {
      let url;
      url = this.serverpath + "poster/" + type + "/" + id + ".jpg";
      return url;
    },
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
.promoteMobile {
  height: 500px;
  border: 1px solid yellow;
}
.posterPicMobile {
  width: 95px;
  height: 135px;
}
.overx {
  width: 95%;
  height: 160px;
  overflow-x: auto;
}
.inover {
  width: 700px;
}
</style>
