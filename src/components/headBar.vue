<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <div class="headMobile font14 row items-center fixed-top q-pr-lg">
        <div class="col-4 q-pt-sm" align="center">
          <img
            class=""
            src="../../public/image/netgig.svg"
            width="54px"
            alt=""
          />
        </div>
        <div class="col" align="center">ภาพยนต์</div>
        <div class="col" align="center">ซีรีย์</div>
        <div class="col" align="center">หมวดหนัง</div>
      </div>
      <div class="headMobile q-pa-sm"></div>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <div class="headTablet font20 row items-center fixed-top">
        <div class="col-3 q-pt-sm" align="center">
          <img src="../../public/image/netgig.svg" width="92px" alt="" />
        </div>

        <div class="col"></div>
        <div class="col-6 row">
          <div class="col" align="center">ภาพยนต์</div>
          <div class="col" align="center">ซีรีย์</div>
          <div class="col" align="center">ตลก</div>
          <div class="col" align="center"><q-icon class="fas fa-search" /></div>
        </div>
      </div>
      <div class="headTablet q-pa-sm"></div>
    </div>
    <!-- PC  -->
    <div class="desktop-only">
      <div class="headPC font20 row items-center fixed-top">
        <div class="col-2 cursor-pointer" align="center" @click="goHome()">
          <img src="../../public/image/netgig.svg" alt="" />
        </div>
        <div class="col-1 menuHead" align="center">หนัง</div>
        <div class="col-1 menuHead" align="center">ซี่รี่ย์</div>
        <div class="col-1 menuHead" @click="goToMovieCategory()" align="center">
          ประเภท
        </div>
        <div class="col"></div>
        <!-- ----- Fav ----  -->
        <div
          v-show="mlogin"
          class="col-1 menuHead"
          align="center"
          @click="goTofavorite()"
        >
          รายการโปรด
        </div>
        <!-- -- Profile--- -->
        <div v-show="mlogin" class="menuHead col-1" align="center">
          <q-btn
            style="width: 160px"
            class="font20"
            :label="userData.username"
            no-caps
          >
            <q-menu dark auto-close>
              <q-list style="width: 160px">
                <q-item
                  clickable
                  class="font18"
                  align="center"
                  @click="profileBtn()"
                >
                  <q-item-section @click="profileBtn()"
                    >บัญชีผู้ใช้งาน</q-item-section
                  >
                </q-item>
                <q-item clickable class="font18" align="center">
                  <q-item-section @click="logOut()">ออกจากระบบ</q-item-section>
                </q-item>
                <q-separator />
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <!-- ------- sign Up -----  -->
        <div
          v-show="!mlogin"
          class="col-1 menuHead"
          align="center"
          @click="goTosignup()"
        >
          สมัครสมาชิก
        </div>
        <!-- --------  log in ----------  -->
        <div
          v-show="!mlogin"
          class="col-1 menuHead"
          align="center"
          @click="goTologin()"
        >
          เข้าสู่ระบบ
        </div>
        <!----------------------->
        <div class="col-1" align="center">
          <q-icon
            @click="goSearch()"
            class="menuHead fas fa-search cursor-pointer"
          />
        </div>
      </div>
      <div class="headPC q-pa-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   login: {
  //     type: Boolean,
  //   },
  // },
  data() {
    return {
      mlogin: false, // ดูว่า login หรือยัง
      userData: {
        id: "",
        username: "",
      },
      options: ["บัญชีผู้ใช้งาน", "ออกจากระบบ"],
    };
  },
  methods: {
    loadUserData() {
      this.userData.id = this.$q.localStorage.getItem("userid");
      this.userData.username = this.$q.localStorage.getItem("username");
      if (this.userData.id == null) {
        this.mlogin = false;
      } else {
        this.mlogin = true;
      }
    },
    // กดปุ่มบัญชีอผู้ใช้งานไปหน้า profile
    profileBtn() {
      this.$router.push("/profile");
    },
    // กดปุ่มไปหน้า search
    goSearch() {
      this.$router.push("/search");
    },
    // กดปุ่มยืนยันแนวหนัง
    saveBtn() {
      this.greenNotify("complete");
    },
    // กดไอค่อน NETGIG กลับมาหน้า home
    goHome() {
      this.$router.push("/home");
    },
    goTosignup() {
      this.$router.push("/signup");
    },
    goTologin() {
      this.$router.push("/login");
    },
    // กดปุ่มรายการโปรดเพื่อไป favorite
    goTofavorite() {
      this.$router.push("/favorite");
    },
    goProfile() {
      this.$router.push("/profile");
    },
    logOut() {
      this.$q.localStorage.clear();
      this.$router.push("/home");
    },
    goToMovieCategory() {
      this.$router.push("/moviecategory");
    },
  },
  mounted() {
    this.loadUserData();
  },
};
</script>

<style lang="scss" scoped>
.headPC {
  z-index: 99;
  margin: auto;
  max-width: 1600px;
  width: 100%;
  height: 82px;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.headTablet {
  z-index: 99;
  width: 100%;
  height: 78px;
  text-decoration: underline;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.headMobile {
  z-index: 99;
  width: 100%;
  height: 46px;
  text-decoration: underline;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.menuHead {
  cursor: pointer;
}
.menuHead:hover {
  color: #00d1ff;
}
</style>
