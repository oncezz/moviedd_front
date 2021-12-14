<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div align="center">
        <div class="row items-center">
          <div class="col-2"></div>
          <div class="col">
            <div class="font18 q-ma-sm">เลือกแนวหนังที่คุณชอบ</div>
            <div class="font14">เลือกสูงสุดได้ 8 แนว</div>
          </div>
          <div class="col-2" align="right">
            <div class="skipBtnMobile font18" align="center">ข้าม</div>
          </div>
        </div>
      </div>
      <div class="row q-ma-lg">
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/cartoon.png"
            alt=""
          />
        </div>

        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/korea.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/family.png"
            alt=""
          />
        </div>

        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/china.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/superhero.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/scifi.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/japan.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/drama.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/comedy.png"
            alt=""
          />
        </div>

        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/thai.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/history.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/adventure.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/musical.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/fantasy.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/popular.png"
            alt=""
          />
        </div>

        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/triller.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/show.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/romantic.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/mystery.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/war.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/horror.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/documentary.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/award.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/crime.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/india.png"
            alt=""
          />
        </div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/erotic.png"
            alt=""
          />
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="loginKey == 1 ? true : false" :menu="1"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div align="center">
        <div class="row items-center">
          <div class="col-4"></div>
          <div class="col">
            <div class="font24 q-ma-sm">เลือกแนวหนังที่คุณชอบ</div>
            <div class="font20">เลือกสูงสุดได้ 8 แนว</div>
          </div>
          <div class="col-4" align="right">
            <div class="skipBtnTablet font24" align="center">ข้าม</div>
          </div>
        </div>
      </div>

      <div class="row q-ma-xl">
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/cartoon.png"
            alt=""
          />
        </div>

        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/korea.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/family.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/china.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/superhero.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/scifi.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/japan.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/drama.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/comedy.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/thai.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/history.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/adventure.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/musical.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/fantasy.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/popular.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/triller.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/show.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/romantic.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/mystery.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/war.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/horror.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/documentary.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/award.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/crime.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/india.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/erotic.png"
            alt=""
          />
        </div>
      </div>
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
        <div class="row items-center">
          <div class="col-4"></div>
          <div class="col">
            <div class="font24 q-ma-sm">เลือกแนวหนังที่คุณชอบ</div>
            <div class="font20">เลือกสูงสุดได้ 8 แนว</div>
          </div>
          <div class="col-4" align="right">
            <div class="skipBtn font24" align="center">ข้าม</div>
          </div>
        </div>
      </div>
      <div class="row q-pt-xl">
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/cartoon.png"
            alt=""
          />
        </div>
      </div>
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
      temp: "@/assets/cartoonBlue.png",
      loginKey: this.$q.localStorage.getItem("login"),
      movieCatList: [
        {
          catname: "ดราม่า",
          id: 1,
          orderid: 800,
          pick: false,
        },
        {
          catname: "แอคชั่น",
          id: 2,
          orderid: 3000,
          pick: false,
        },
      ],
    };
  },
  methods: {
    async loadFavCat() {
      let data = {
        userid: this.$q.localStorage.getItem("userid"),
      };
      let url = this.serverpath + "fe_profileloadfav.php";
      let res = await axios.post(url, JSON.stringify(data));
      this.movieCatList = res.data;
    },
  },
  mounted() {
    this.loadFavCat();
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
.skipBtnTablet {
  width: 83px;
  height: 58px;
  line-height: 58px;
  color: black;
  background: #00d1ff;
  border-radius: 40px 0px 0px 40px;
}
.skipBtnMobile {
  width: 60px;
  height: 42px;
  line-height: 42px;
  color: black;
  background: #00d1ff;
  border-radius: 20px 0px 0px 20px;
}
</style>
