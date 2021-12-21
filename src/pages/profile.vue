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
        <div class="font24 q-pt-lg">บัญชีผู้ใช้งาน</div>

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
          <div class="font14 q-pt-lg">เบอร์โทรศัพท์</div>
          <div class="">
            <q-input
              input-style="font-size: 14px;"
              dark
              outlined
              dense
              v-model="userData.phoneNumber"
              readonly
            />
          </div>
          <div
            class="font12 fontU q-pt-sm"
            align="right"
            @click="editPhoneNumberBtn()"
          >
            แก้ไข
          </div>
          <div class="font14">รหัสผ่าน</div>
          <q-input
            class="q-pt-sm"
            input-style="font-size: 14px;"
            dark
            type="password"
            outlined
            readonly
            dense
            v-model="userData.password"
          >
          </q-input>
          <div
            class="font12 fontU q-pt-sm"
            align="right"
            @click="editPasswordBtn()"
          >
            เปลี่ยนรหัสผ่าน
          </div>
        </div>
        <hr class="pagelineMobile" />
      </div>
      <div class="row">
        <div class="font18 col-7 q-pl-md q-pt-md">
          แนวหนังที่คุณชอบ {{ itemFav.length }}/8
        </div>
        <div
          class="font12 q-pr-lg col fontU q-pt-lg"
          align="right"
          @click="editcatagory()"
        >
          แก้ไข
        </div>
      </div>
      <div class="q-pt-md q-pl-lg">
        <div class="row" align="center">
          <div
            class="catPickMobile col-5 q-mx-sm q-my-xs"
            align="center"
            v-for="(item, index) in itemFav"
            :key="index"
            :style="{ background: getPicPath(item.id) }"
          >
            <div class="font18" align>{{ item.catname }}</div>
          </div>
        </div>
      </div>
      <div class="q-pa-md"></div>
      <hr class="pagelineMobile" />
      <div align="center" class="q-pt-lg">
        <div class="signoutBtnMobile font14" @click="exitBtn()">ออกจากระบบ</div>
      </div>
      <div class="q-pt-lg"></div>

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
        <div class="font28 q-pt-xl">บัญชีผู้ใช้งาน</div>
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
              <div class="font20 q-pt-xl">เบอร์โทรศัพท์</div>
              <div class="q-pt-sm">
                <q-input
                  input-style="font-size: 18px;"
                  dark
                  outlined
                  dense
                  v-model="userData.phoneNumber"
                  readonly
                />
              </div>
              <div
                class="font16 fontU q-pt-sm"
                align="right"
                @click="editPhoneNumberBtn()"
              >
                แก้ไข
              </div>
              <div class="font20 q-pt-md">รหัสผ่าน</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                type="password"
                readonly
                dense
                v-model="userData.password"
              >
              </q-input>
              <div
                class="font16 fontU q-pt-sm"
                align="right"
                @click="editPasswordBtn()"
              >
                เปลี่ยนรหัสผ่าน
              </div>
            </div>
            <div align="center" class="q-pt-md">
              <div class="q-pa-md"></div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
        <hr class="pageline" />
        <div class="q-pa-sm"></div>
        <div class="row">
          <div class="font24 col-5 q-pt-sm">
            แนวหนังที่คุณชอบ {{ itemFav.length }}/8
          </div>
          <div
            class="font16 q-pr-xl col fontU q-pt-sm"
            align="right"
            @click="editcatagory()"
          >
            แก้ไข
          </div>
        </div>

        <div class="q-pt-md q-pl-lg">
          <div class="row" align="center">
            <div
              class="catPick col-4 q-ma-md"
              align="center"
              v-for="(item, index) in itemFav"
              :key="index"
              :style="{ background: getPicPath(item.id) }"
            >
              <div class="font22" align>{{ item.catname }}</div>
            </div>
          </div>
        </div>
        <div class="q-pa-md"></div>
        <hr class="pageline" />
        <div class="q-pt-lg">
          <div class="signoutBtnTablet font18" @click="exitBtn()">
            ออกจากระบบ
          </div>
        </div>
        <div class="q-pa-md"></div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="true" :menu="5"></end-bar>
    </div>
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar :login="true" :menu="5"></head-bar>
      <!-- ---- content ------->
      <div align="center" class="q-pt-xl">
        <img
          width="323px"
          height="131px"
          src="../../public/image/profilePic.png"
          alt=""
        />
        <div class="font28 q-pt-lg">ข้อมูลบัญชีผู้ใช้งาน</div>
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
              <div class="font20 q-pt-xl">เบอร์โทรศัพท์</div>
              <div class="q-pt-sm">
                <q-input
                  input-style="font-size: 18px;"
                  dark
                  outlined
                  dense
                  v-model="userData.phoneNumber"
                  readonly
                />
              </div>
              <div
                class="font16 fontU q-pt-sm cursor-pointer"
                align="right"
                @click="editPhoneNumberBtn()"
              >
                แก้ไข
              </div>
              <div class="font20 q-pt-md">รหัสผ่าน</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                type="password"
                readonly
                dense
                v-model="userData.password"
              >
              </q-input>
              <div
                class="font16 fontU q-pt-sm cursor-pointer"
                align="right"
                @click="editPasswordBtn()"
              >
                เปลี่ยนรหัสผ่าน
              </div>
            </div>
            <div align="center" class="q-pt-md">
              <div class="signoutBtn font18" @click="exitBtn()">ออกจากระบบ</div>
              <div class="q-pa-md"></div>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
      <hr class="pageline" />
      <div class="q-pa-sm"></div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col">
          <div align="center" class="font28">
            แนวหนังที่คุณชอบ {{ itemFav.length }}/8
          </div>
          <div class="row q-pt-md" align="center">
            <div
              class="catPick col-3 q-ma-md"
              align="center"
              v-for="(item, index) in itemFav"
              :key="index"
              :style="{ background: getPicPath(item.id) }"
            >
              <div class="font22" align>{{ item.catname }}</div>
            </div>
          </div>
        </div>
        <div
          class="col-2 font16 fontU q-pr-lg cursor-pointer"
          align="right "
          @click="editcatagory()"
        >
          แก้ไข
        </div>
      </div>
      <div class="row q-pt-md q-pl-sm"></div>
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
      userData: {
        id: 1,
        phoneNumber: "088-888-8888",
        username: "Destiny",
        password: "123456",
      },
      itemFav: [],
    };
  },
  methods: {
    // check login
    checkUser() {
      if (this.$q.localStorage.getItem("userid") == null) {
        this.$router.push("/home");
      }
    },
    // กดปุ่มออกจากระบบ
    exitBtn() {
      this.$q.localStorage.clear();
      this.$router.push("/home");
    },
    // กดปุ่มแก้ไข เบอโทรศัพท์
    editPhoneNumberBtn() {
      this.$router.push("/profile2");
    },
    // กดปุ่มเปลี่ยนรหัสผ่าน
    editPasswordBtn() {
      this.$router.push("/profile3");
    },
    // กดปุ่มแก้ไขแนวหนังที่ชอบ
    editcatagory() {
      this.$router.push("/profile4");
    },
    async loadData() {
      this.userData.username = this.$q.localStorage.getItem("username");
      let data = {
        userid: this.$q.localStorage.getItem("userid"),
      };
      let url = this.serverpath + "fe_profile_loadtelephone.php";
      let res = await axios.post(url, JSON.stringify(data));
      if (res.data === "fail") {
        this.$q.localStorage.clear();
        this.$router.push("/home");
      } else {
        this.userData.phoneNumber = res.data;
      }
      url = this.serverpath + "fe_profileloadfav.php";
      let res2 = await axios.post(url, JSON.stringify(data));
      // console.log(res2.data);
      this.itemFav = res2.data.filter((item) => item.pick);
    },
    getPicPath(id) {
      let url = "";
      url = "url(" + this.serverpath + "category/" + id + ".png) no-repeat";
      return url;
    },
  },
  mounted() {
    this.checkUser();
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
.pageline {
  width: 96%;
  margin: auto;
  border: 1px solid #868686;
}
.pagelineMobile {
  width: 93%;
  margin: auto;
  border: 1px solid #868686;
}
.catPick {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  border-radius: 10px;
  height: 124px;
  width: 208px;
  line-height: 124px;
}
.catPickMobile {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  border-radius: 10px;
  height: 87px;
  width: 146px;
  line-height: 87px;
}
</style>
