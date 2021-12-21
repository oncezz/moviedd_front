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
            <div v-show="allPick == 0" class="font20">เลือกสูงสุดได้ 8 แนว</div>
            <div v-show="allPick != 0" class="font20">
              เลือกไปแล้ว {{ allPick }}/8 แนว
            </div>
          </div>
          <div class="col-4" align="right">
            <div
              v-show="allPick == 0"
              class="skipBtn font24"
              align="center"
              @click="skipBtn()"
            >
              ข้าม
            </div>
            <div
              v-show="allPick != 0"
              @click="saveUserFavBtn()"
              class="skipBtn font24"
              align="center"
            >
              เสร็จสิ้น
            </div>
          </div>
        </div>
      </div>
      <div class="row q-pt-xl q-px-xl q-ml-lg">
        <div
          class="col-2 q-pa-sm"
          v-for="(item, index) in movieCatList"
          :key="index"
          style="position: relative"
        >
          <div
            class="blueCatBtnPC"
            v-show="item.pick"
            @click="pickCategory(index, item.pick)"
          ></div>
          <div
            class="catBtnPC"
            align="center"
            :style="{ background: getPicPath(item.id) }"
            @click="pickCategory(index, item.pick)"
          >
            <div class="font22" align>{{ item.catname }}</div>
          </div>
        </div>
      </div>
      <!----------------------->
    </div>
    <!-- กดบันทึกแนวหนังเรียบร้อย  -->
    <alert1btn
      v-show="saveCategoryDoneAlert"
      textLine1="สมัครสมาชิกเสร็จสิ้น"
      pictureType="2"
      @close-alert="closeAlertSaveBtn()"
    >
    </alert1btn>
    <!-- เลือกหมวดหนังเกิน 8 หมวด  -->
    <alert1btn
      v-show="pickCategory8Alert"
      textLine1="เลือกหนังได้สูงสุด 8 แนว"
      textLine2="เลือกอีกครั้งเพื่อยกเลิกแนวหนัง"
      pictureType="1"
      @close-alert="closeAlertPickBtn()"
    >
    </alert1btn>
  </div>
</template>

<script>
import axios from "axios";
import headBar from "../components/headBar.vue";
import endBar from "../components/endBar.vue";
import alert1btn from "src/components/alert1btn.vue";
export default {
  components: {
    headBar,
    endBar,
    alert1btn,
  },
  data() {
    return {
      temp: "@/assets/cartoonBlue.png",
      loginKey: this.$q.localStorage.getItem("login"),
      allPick: 0,
      movieCatList: [
        {
          catname: "ดราม่า",
          id: 1,
          orderid: 800,
          pick: false,
        },
      ],
      itemFav: [],
      saveCategoryDoneAlert: false, // Alert เลือกหมวดหนังเสร็จสิ้น
      pickCategory8Alert: false, // เลือกหมวดหนังเกิน 8
    };
  },
  methods: {
    // กด ข้าม ไม่เลือกหมวดหนัง
    skipBtn() {
      this.saveCategoryDoneAlert = true;
    },
    //ปิด alert save หมวดหนัง
    closeAlertSaveBtn() {
      this.saveCategoryDoneAlert = false;
      this.$router.push("/home");
    },
    //ปิด alert เลือกหมวดหนังเกิน
    closeAlertPickBtn() {
      this.pickCategory8Alert = false;
    },
    // กดเลือกหมวดหนังเรียบร้อย
    async saveUserFavBtn() {
      let data = [];
      data = this.movieCatList.filter((item) => item.pick).map((x) => x.id);
      let data2 = {
        userid: this.$q.localStorage.getItem("userid"),
        fav: data,
      };
      console.log(data2);
      let url = this.serverpath + "fe_profile_savefavcategory.php";
      let res = await axios.post(url, JSON.stringify(data2));

      this.saveCategoryDoneAlert = true;
      // this.$router.push("/home");
    },
    // กด เลือก/ไม่เลือก หมวดหนัง
    pickCategory(index, pick) {
      if (pick) {
        this.movieCatList[index].pick = false;
        this.allPick--;
      } else {
        if (this.allPick == 8) {
          this.pickCategory8Alert = true;
        } else {
          this.movieCatList[index].pick = true;
          this.allPick++;
        }
      }
    },
    // สร้าง url รูปเป็น string ไปใส่ใน :style
    getPicPath(id) {
      let url = "";
      url = "url(" + this.serverpath + "category/" + id + ".png) no-repeat";
      return url;
    },
    // โหลด category ที่มี pick เพิ่ม true,false
    async loadFavCat() {
      let data = {
        userid: this.$q.localStorage.getItem("userid"),
      };
      let url = this.serverpath + "fe_profileloadfav.php";
      let res = await axios.post(url, JSON.stringify(data));
      this.movieCatList = res.data;
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].pick) {
          this.allPick++;
        }
      }
    },
  },
  mounted() {
    this.loadFavCat();
  },
};
</script>

<style lang="scss" scoped>
.skipBtn {
  cursor: pointer;
  width: 125px;
  height: 55px;
  line-height: 55px;
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
.catBtnPC {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  cursor: pointer;
  border-radius: 10px;
  height: 124px;
  width: 208px;
  line-height: 124px;
}
.blueCatBtnPC {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  z-index: 9;
  position: absolute;
  margin: auto;
  cursor: pointer;
  border-radius: 10px;
  height: 124px;
  width: 208px;
  background: rgba(0, 209, 255, 0.3);
  border: 4px solid #00d1ff;
}
</style>
