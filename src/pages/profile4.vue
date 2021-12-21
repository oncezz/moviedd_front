<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div align="center" class="q-pt-xl">
        <img
          width="225px"
          height="91px"
          src="../../public/image/profilePic.png"
          alt=""
        />
        <div class="font24 q-pt-lg">ข้อมูลบัญชีผู้ใช้งาน</div>

        <div align="left" class="q-pa-md">
          <div class="font14 q-pt-sm">ชื่อผู้ใช้งาน</div>
          <div class="">
            <q-input
              input-style="font-size: 14px;"
              dark
              outlined
              dense
              v-model="userData.username"
              readonly
            />
          </div>
        </div>
      </div>
      <div class="row q-pt-md">
        <div class="col-3" align="left"></div>
        <div class="col" align="center">
          <div class="font18">เลือกแนวหนังที่คุณชอบ</div>
          <div class="font14">เลือกหนังไปแล้ว 4/8 แนว</div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row q-ma-md">
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
      </div>
      <div align="center" class="q-pt-md font12">
        <div class="q-py-xl row justify-center">
          <div class="backBtnMobile" @click="backBtn()">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="saveBtnMobile" @click="saveBtn()">ตกลง</div>
        </div>
      </div>
      <!-- ---- content ------->
      <end-bar :login="true" :menu="5"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div align="center" class="q-pt-xl">
        <img
          width="323px"
          height="131px"
          src="../../public/image/profilePic.png"
          alt=""
        />
        <div class="font28 q-pt-xl">แนวหนังที่ชอบ</div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <div align="left">
              <div class="font20 q-pt-sm">ชื่อผู้ใช้งาน</div>
              <div class="q-pt-sm">
                <q-input
                  input-style="font-size: 18px;"
                  dark
                  outlined
                  dense
                  v-model="userData.username"
                  readonly
                />
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row q-pt-xl">
          <div class="col-4" align="left"></div>
          <div class="col" align="center">
            <div class="font24">เลือกแนวหนังที่คุณชอบ</div>
            <div class="font20">เลือกหนังไปแล้ว 4/8 แนว</div>
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row q-ma-lg">
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
        </div>
      </div>
      <div align="center" class="q-pt-lg">
        <div class="q-py-xl font18 row justify-center">
          <div class="backBtnTablet" @click="backBtn()">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="saveBtnTablet" @click="saveBtn()">ตกลง</div>
        </div>
      </div>
      <div class="q-pt-xl"></div>

      <!-- ---- content ------->
      <end-bar :login="true" :menu="5"></end-bar>
    </div>
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div align="center" class="q-pt-xl">
        <img
          width="323px"
          height="131px"
          src="../../public/image/profilePic.png"
          alt=""
        />
        <div class="font28 q-pt-lg">แนวหนังที่ชอบ</div>
        <div class="row">
          <div class="col-4"></div>
          <div class="col">
            <div align="left">
              <div class="font20 q-pt-sm">ชื่อผู้ใช้งาน</div>
              <div class="q-pt-sm">
                <q-input
                  input-style="font-size: 18px;"
                  dark
                  outlined
                  dense
                  v-model="userData.username"
                  readonly
                />
              </div>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
      <div class="row q-pt-xl">
        <div class="col-3"></div>
        <div class="col" align="center">
          <div class="font24">เลือกแนวหนังที่คุณชอบ</div>
          <div class="font20">เลือกหนังไปแล้ว {{ allPick }}/8 แนว</div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row q-pt-xl">
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
      <div align="center" class="q-pt-lg">
        <div class="q-py-xl font18 row justify-center">
          <div class="backBtn" @click="backBtn()">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="saveBtn" @click="saveBtn()">ตกลง</div>
        </div>
      </div>
    </div>
    <div>
      <div class="q-pt-xl"></div>
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
      allPick: 0,
      movieCatList: [],
      userData: {
        username: "Destiny",
        userid: 1,
      },
    };
  },
  methods: {
    // กดปุ่มกลับไปหน้า profile
    backBtn() {
      this.$router.push("/profile");
    },
    // กดปุ่มยืนยันแนวหนัง
    async saveBtn() {
      let data = [];
      data = this.movieCatList.filter((item) => item.pick).map((x) => x.id);
      let data2 = {
        userid: this.$q.localStorage.getItem("userid"),
        fav: data,
      };
      let url = this.serverpath + "fe_profile_savefavcategory.php";
      let res = await axios.post(url, JSON.stringify(data2));
      this.greenNotify("complete");
      this.$router.push("/profile");
    },
    // กด เลือก/ไม่เลือก หมวดหนัง
    pickCategory(index, pick) {
      if (pick) {
        this.movieCatList[index].pick = false;
        this.allPick--;
      } else {
        if (this.allPick == 8) {
          this.redNotify("pick 8/8");
          return;
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
    // load ข้อมูล
    async loadData() {
      this.userData.username = this.$q.localStorage.getItem("username");
      this.userData.userid = this.$q.localStorage.getItem("userid");
      let data = {
        userid: this.userData.userid,
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
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.signoutBtn {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.signoutBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.signoutBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.backBtn {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
}
.backBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
}
.backBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;

  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 2px;
}
.saveBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  color: black;
  background: #00d1ff;
  border-radius: 2px;
}
.saveBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  color: black;
  background: #00d1ff;
  border-radius: 2px;
}
.saveBtn {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  color: black;
  background: #00d1ff;
  border-radius: 2px;
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
