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

        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/korea.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/family.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/china.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/superhero.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/scifi.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 20px"></div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/japan.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/drama.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/comedy.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/thai.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/history.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/adventure.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 20px"></div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/musical.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/fantasy.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/popular.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/triller.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/show.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/romantic.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 20px"></div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/mystery.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/war.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/horror.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/documentary.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/award.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/crime.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 20px"></div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/india.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/erotic.png"
            alt=""
          />
        </div>

        <!-- <img :src="require(temp)" alt="" width="200px" /> -->
        <!-- <img
            :src="require('/image/movielist/cartoonBlue.png')"
            alt=""
          /> -->
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
      temp: "@/assets/cartoonBlue.png",
      loginKey: this.$q.localStorage.getItem("login"),
      movieCatList: [
        {
          // ดราม่า
          id: 1,
          orderid: 800,
          pick: false,
        },
        {
          // แอคชั่น
          id: 2,
          orderid: 3000,
          pick: false,
        },
        {
          // สารคดี
          id: 3,
          orderid: 2200,
          pick: false,
        },
        {
          // เกาหลี
          id: 4,
          orderid: 200,
          pick: false,
        },
        {
          // การ์ตูน
          id: 713,
          orderid: 100,
          pick: false,
        },
        {
          // ครอบครัว
          id: 714,
          orderid: 300,
          pick: false,
        },
        {
          // ซุปเปอร์ฮีโร่
          id: 716,
          orderid: 500,
          pick: false,
        },
        {
          // ตลก
          id: 717,
          orderid: 900,
          pick: false,
        },
        {
          // ไทย
          id: 718,
          orderid: 1000,
          pick: false,
        },
        {
          // ประวัติศาสตร์
          id: 719,
          orderid: 1100,
          pick: false,
        },
        {
          // ยอดนิยม
          id: 721,
          orderid: 1500,
          pick: false,
        },
        {
          // ระทึกขวัญ
          id: 722,
          orderid: 1600,
          pick: false,
        },
        {
          // รายการโชว์
          id: 723,
          orderid: 1700,
          pick: false,
        },
        {
          // ลึกลับ
          id: 724,
          orderid: 1900,
          pick: false,
        },
        {
          // จีน
          id: 725,
          orderid: 400,
          pick: false,
        },
        {
          // ไซไฟ
          id: 726,
          orderid: 600,
          pick: false,
        },
        {
          // ญี่ปุ่น
          id: 727,
          orderid: 700,
          pick: false,
        },
        {
          // ผจญภัย
          id: 728,
          orderid: 1200,
          pick: false,
        },
        {
          // เพลง
          id: 729,
          orderid: 1300,
          pick: false,
        },
        {
          // แฟนตาซี
          id: 730,
          orderid: 1400,
          pick: false,
        },
        {
          // โรแมนติก
          id: 731,
          orderid: 1800,
          pick: false,
        },
        {
          // สงคราม
          id: 732,
          orderid: 2000,
          pick: false,
        },
        {
          // สยองขวัญ
          id: 733,
          orderid: 2100,
          pick: false,
        },
        {
          // หนังรางวัล
          id: 734,
          orderid: 2300,
          pick: false,
        },
        {
          // อาชญากรรม
          id: 735,
          orderid: 2400,
          pick: false,
        },
      ],
    };
  },
  methods: {
    loadImg: function (path) {
      require(path);
    },
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
