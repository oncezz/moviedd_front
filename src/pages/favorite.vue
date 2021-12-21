<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="row items-center justify-center q-pt-md">
        <div>
          <img
            width="48px"
            height="38px"
            src="../../public/image/favoriteIcon.png"
            alt=""
          />
        </div>
        <div class="font18 q-pl-sm">รายการโปรด</div>
      </div>
      <div
        class="row q-pa-md"
        align="center"
        v-for="(item, index) in favoriteMovie"
        :key="index"
      >
        <div class="boxMobile">
          <div class="behideMovietag row">
            <div class="" style="padding-top: 10px; width: 80px">
              <img
                width="90px"
                height="129px"
                src="../../public/image/movielist/pic3.png"
                alt=""
              />
            </div>
            <div class="col q-pl-md">
              <div class="" align="left" style="height: 60px">
                <div class="font18 q-pl-md">{{ item.nameEng }}</div>
                <div class="font12 q-pl-md">{{ item.nameTh }}</div>
              </div>
              <div class="row" style="height: 70px">
                <div align="" class="col q-pt-xl">
                  <div class="font12 row justify-center">
                    <div class="deleteBtnMobile font12" @click="deleteBtn()">
                      <q-icon
                        size="15px"
                        class="far fa-trash-alt q-pr-sm"
                      />ลบรายชื่อ
                    </div>
                    <div class="q-pa-md"></div>
                    <div
                      class="playBtnMobile font12 q-mr-md"
                      @click="playBtn()"
                    >
                      <q-icon size="15px" class="fas fa-play q-pr-sm" />เล่นหนัง
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="movietagMobile" v-show="item.type == 1">
            <img src="../../public/image/topMovieMobile.png" alt="" />
          </div>
          <div class="movietagMobile" v-show="item.type == 2">
            <img src="../../public/image/topSeriesMobile.png" alt="" />
          </div>
        </div>
        <div class="q-pt-md">
          <hr class="pageLineTablet" />
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="true" :menu="4"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="row items-center justify-center">
        <div>
          <img src="../../public/image/favoriteIcon.png" alt="" />
        </div>
        <div class="q-pa-md"></div>
        <div class="font36">รายการโปรด</div>
      </div>
      <div
        class="row q-pa-md"
        align="center"
        v-for="(item, index) in favoriteMovie"
        :key="index"
      >
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
                <div class="font36 q-pl-md">{{ item.nameEng }}</div>
                <div class="font22 q-pl-md">{{ item.nameTh }}</div>
              </div>
              <div class="row" style="height: 70px">
                <div align="" class="col q-pt-xl">
                  <div class="font18 row justify-end">
                    <div class="deleteBtnTablet font16" @click="deleteBtn()">
                      <q-icon
                        size="20px"
                        class="far fa-trash-alt q-pr-md"
                      />ลบรายชื่อ
                    </div>
                    <div class="q-pa-md"></div>
                    <div
                      class="playBtnTablet font16 q-mr-md"
                      v-show="item.type == 1"
                      @click="playBtn()"
                    >
                      <q-icon size="20px" class="fas fa-play q-pr-md" />เล่นหนัง
                    </div>
                    <div
                      class="playBtnTablet font16 q-mr-md"
                      v-show="item.type == 2"
                      @click="playBtn()"
                    >
                      <q-icon size="20px" class="fas fa-play q-pr-md" />เลือกตอน
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="movietag" v-show="item.type == 1">
            <img src="../../public/image/topMovie.png" alt="" />
          </div>
          <div class="movietag" v-show="item.type == 2">
            <img src="../../public/image/topSeries.png" alt="" />
          </div>
        </div>
        <hr class="pageLineTablet" />
      </div>

      <!-- ---- content ------->
      <end-bar :login="true" :menu="4"></end-bar>
    </div>
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar :login="true" :menu="4"></head-bar>
      <!-- ---- content ------->
      <div class="row items-center justify-center">
        <div>
          <img src="../../public/image/favoriteIcon.png" alt="" />
        </div>
        <div class="q-pa-md"></div>
        <div class="font36">รายการโปรด</div>
      </div>

      <div class="row q-pt-md" align="center">
        <div
          class="col-6 q-pa-md"
          v-for="(item, index) in favoriteMovie"
          :key="index"
        >
          <div class="box">
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
                  <div class="font36 q-pl-md">{{ item.nameEng }}</div>
                  <div class="font22 q-pl-md">{{ item.nameTh }}</div>
                </div>
                <div align="" class="">
                  <div class="font18 row justify-end">
                    <div
                      class="deleteBtn font16 cursor-pointer"
                      @click="deleteBtn()"
                    >
                      <q-icon
                        size="20px"
                        class="far fa-trash-alt q-pr-md"
                      />ลบรายชื่อ
                    </div>
                    <div class="q-pa-md"></div>
                    <div
                      class="playBtn font16 q-mr-md cursor-pointer"
                      @click="playBtn()"
                      v-show="item.type == 1"
                    >
                      <q-icon size="20px" class="fas fa-play q-pr-md" />เล่นหนัง
                    </div>
                    <div
                      class="playBtn font16 q-mr-md cursor-pointer"
                      @click="playBtn()"
                      v-show="item.type == 2"
                    >
                      <q-icon size="20px" class="fas fa-play q-pr-md" />เลือกตอน
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="movietag" v-show="item.type == 1">
              <img src="../../public/image/topMovie.png" alt="" />
            </div>
            <div class="movietag" v-show="item.type == 2">
              <img src="../../public/image/topSeries.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ถามตอนลบหนังออกจาก fav  -->
    <alert2btn
      v-show="alertDelMovieFav"
      textLine="คุณต้องการลบรายชื่อใช่หรือไม่"
      @cancle-alert="cancleDelDavMovie()"
      @ok-alert="DelFavMovie()"
    ></alert2btn>
  </div>
</template>

<script>
import alert2btn from "../components/alert2btn.vue";
import headBar from "../components/headBar.vue";
import endBar from "../components/endBar.vue";
export default {
  components: {
    headBar,
    endBar,
    alert2btn,
  },
  data() {
    return {
      alertDelMovieFav: false,
      favoriteMovie: [
        //type 1 = Movie
        //type 2 = Series
        {
          id: 120,
          nameEng: "X-men Dark phoenix",
          nameTh: "เอ็กซ์-เม็น ดาร์ก ฟินิกซ์",
          type: 1,
        },
        {
          id: 121,
          nameEng: "Mr.Robot",
          nameTh: "มิสเตอร์ โรบอท",
          type: 2,
        },
        {
          id: 122,
          nameEng: "Mr.Robot",
          nameTh: "มิสเตอร์ โรบอท",
          type: 2,
        },
      ],
    };
  },
  methods: {
    // กดลบหนังออกจาก Fav
    DelFavMovie() {
      this.greenNotify("del movie");
      this.alertDelMovieFav = false;
    },
    //กด cancle ลบหนัง
    cancleDelDavMovie() {
      this.alertDelMovieFav = false;
    },
    // กดปุ่มเล่นหนัง
    playBtn() {
      this.greenNotify("play movie");
    },
    // กดปุ่มลบรายชื่อ
    deleteBtn() {
      this.alertDelMovieFav = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;

  height: 230px;
  background: #1d1d1d;
}
.boxTablet {
  position: relative;
  width: 733px;
  height: 254px;
  background: black;
}
.boxMobile {
  position: relative;
  width: 337px;
  height: 130px;
  background: black;
}
.deleteBtn {
  width: 130.33px;
  height: 35.52px;
  line-height: 35.52px;
  border: 1px solid #ffffff;
  border-radius: 2px;
}
.deleteBtnTablet {
  width: 130.33px;
  height: 35.52px;
  line-height: 35.52px;
  border: 1px solid #ffffff;
  border-radius: 2px;
}
.deleteBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  border: 1px solid #ffffff;
  border-radius: 2px;
}
.playBtn {
  width: 118.23px;
  height: 35.52px;
  line-height: 35.52px;
  background: #ffffff;
  color: black;
  border-radius: 2px;
}
.playBtnTablet {
  width: 118.23px;
  height: 35.52px;
  line-height: 35.52px;
  background: #ffffff;
  color: black;
  border-radius: 2px;
}
.playBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  background: #ffffff;
  color: black;
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
.pageLineTablet {
  width: 717px;
  height: 0px;
  border: 1px solid #545454;
}
.pageLineMobile {
  width: 336px;
  height: 0px;
  border: 1px solid #545454;
}
</style>
