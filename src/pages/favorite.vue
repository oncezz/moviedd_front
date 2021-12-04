<template>
  <div>
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="row q-pa-md" align="center">
        <div class="boxMobile">
          <div class="behideMovietag row">
            <div class="q-pl-sm" style="padding-top: 10px; width: 80px">
              <img
                width="77px"
                height="110px"
                src="../../public/image/movielist/pic3.png"
                alt=""
              />
            </div>
            <div class="col">
              <div class="" align="left" style="height: 60px">
                <div class="font18 q-pl-md">X-Men Dark phoenix</div>
                <div class="font12 q-pl-md">X-เม็น ดาร์ก ฟีนิกซ์</div>
              </div>
              <div class="row" style="height: 70px">
                <div class="col-4 q-pt-lg" align="center">
                  <div>
                    <q-icon size="15px" class="far fa-trash-alt" />

                    <div class="font12">ลบรายชื่อ</div>
                  </div>
                </div>
                <div class="col-2 q-pt-lg" align="center">
                  <div>
                    <q-icon size="15px" class="fas fa-share-alt" />
                    <div class="font12">แชร์</div>
                  </div>
                </div>
                <div class="q-ma-sm q-pr-sm col q-pt-md" align="right">
                  <div
                    class="playBtnMobile"
                    style="color: black"
                    align="center"
                  >
                    <div class="font12">
                      <q-icon class="fas fa-play" />
                      เล่นหนัง
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="movietagMobile">
            <img src="../../public/image/topMovieMobile.png" alt="" />
          </div>
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="true" :menu="4"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="row q-pa-md" align="center">
        <div class="boxTablet">
          <div class="behideMovietag row">
            <div class="col-1" style="padding-top: 10px; width: 200px">
              <img
                width="163px"
                height="224px"
                src="../../public/image/movielist/pic3.png"
                alt=""
              />
            </div>
            <div class="col">
              <div class="" align="left" style="height: 160px">
                <div class="font36 q-pl-md">X-Men Dark phoenix</div>
                <div class="font22 q-pl-md">X-เม็น ดาร์ก ฟีนิกซ์</div>
              </div>
              <div class="row" style="height: 70px">
                <div class="col-3 q-pt-lg q-pr-xl" align="center">
                  <div>
                    <q-icon size="30px" class="far fa-trash-alt" />

                    <div class="font16">ลบรายชื่อ</div>
                  </div>
                </div>
                <div class="col-3 q-pt-lg q-pr-xl" align="center">
                  <div>
                    <q-icon size="30px" class="fas fa-share-alt" />
                    <div class="font16">แชร์</div>
                  </div>
                </div>
                <div class="q-ma-sm q-pr-sm col q-pt-md" align="right">
                  <div
                    class="playBtnTablet"
                    style="color: black"
                    align="center"
                  >
                    <div class="font16">
                      <q-icon class="fas fa-play" />
                      เล่นหนัง
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="movietag">
            <img src="../../public/image/topMovie.png" alt="" />
          </div>
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="true" :menu="4"></end-bar>
    </div>
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="row" align="center">
        <div class="col-6 box">
          <div class="behideMovietag row">
            <div class="col-1" style="padding-top: 10px; width: 200px">
              <img
                width="148px"
                height="203px"
                src="../../public/image/movielist/pic3.png"
                alt=""
              />
            </div>
            <div class="col">
              <div class="" align="left" style="height: 160px">
                <div class="font36 q-pl-md">X-Men Dark phoenix</div>
                <div class="font22 q-pl-md">X-เม็น ดาร์ก ฟีนิกซ์</div>
              </div>
              <div class="row" style="height: 70px">
                <div class="col-3 q-pt-sm" align="center">
                  <div>
                    <q-icon size="30px" class="far fa-trash-alt" />

                    <div class="font16">ลบรายชื่อ</div>
                  </div>
                </div>
                <div class="col-3 q-pt-sm" align="center">
                  <div>
                    <q-icon size="30px" class="fas fa-share-alt" />
                    <div class="font16">แชร์</div>
                  </div>
                </div>
                <div class="q-ma-sm q-pr-sm q-pt-md col" align="right">
                  <div class="playBtn" style="color: black" align="center">
                    <div class="font16">
                      <q-icon class="fas fa-play" />
                      เล่นหนัง
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="movietag">
            <img src="../../public/image/topMovie.png" alt="" />
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
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 665px;
  height: 230px;
  background: #1d1d1d;
}
.boxTablet {
  position: relative;
  width: 733px;
  height: 254px;
  background: #1d1d1d;
}
.boxMobile {
  position: relative;
  width: 337px;
  height: 130px;
  background: #1d1d1d;
}
.playBtn {
  width: 118.23px;
  height: 35.52px;
  line-height: 35.52px;
  background: #ffffff;
  border-radius: 2px;
}
.playBtnTablet {
  width: 118.23px;
  height: 35.52px;
  line-height: 35.52px;
  background: #ffffff;
  border-radius: 2px;
}
.playBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  background: #ffffff;
  border-radius: 2px;
}
.movietag {
  position: absolute;
  left: -7px;
  top: 7px;
  z-index: 2;
}
.movietagMobile {
  position: absolute;
  left: -5px;
  top: 7px;
  z-index: 2;
}
.behideMovietag {
  position: relative;
  z-index: 1;
}
</style>
