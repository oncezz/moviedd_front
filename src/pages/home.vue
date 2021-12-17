<template>
  <div>
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <q-carousel
        class="promoteMobile"
        animated
        navigation
        v-model="slide"
        infinite
        :autoplay="true"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="false"
        @mouseleave="true"
      >
        <q-carousel-slide
          :name="1"
          :img-src="serverpath + '/promotion/movie/1m.jpg'"
        >
          <div class="absolute-bottom customCaption brx" align="center">
            <div class="absolute-bottom font12">
              <div class="font12 q-py-md">แอ็คชั่น | ผจญภัย | ตลก</div>
              <div class="row justify-evenly">
                <div class="favBtnInPromote">รายการโปรด</div>
                <div class="playBtnInPromote">เล่นหนังเรื่องนี้</div>
              </div>
              <div class="" style="height: 60px"></div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>

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
  position: relative;
  height: 500px;
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
.customCaption {
  height: 400px;
  text-align: center;
  background: linear-gradient(360deg, #000000 16.71%, rgba(0, 0, 0, 0) 60.48%);
}
.favBtnInPromote {
  border: 1px solid #fefefe;
  border-radius: 20px;
  width: 120px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #fefefe;
}
.playBtnInPromote {
  background: #00d1ff;
  border-radius: 20px;
  width: 120px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #0d0d0d;
}
</style>
