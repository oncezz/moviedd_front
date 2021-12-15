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
        <div class="col-1" align="center">หนัง</div>
        <div class="col-1" align="center">ซี่รี่ย์</div>
        <div class="col-1" align="center">ประเภท</div>
        <div class="col"></div>
        <div
          class="col-1 cursor-pointer"
          align="center"
          @click="goTofavorite()"
        >
          รายการโปรด
        </div>
        <div class="col-1" align="center">
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
                  <q-item-section>บัญชีผู้ใช้งาน</q-item-section>
                </q-item>
                <q-item clickable class="font18" align="center">
                  <q-item-section>ออกจากระบบ</q-item-section>
                </q-item>
                <q-separator />
              </q-list>
            </q-menu>
          </q-btn>

          <!-- <q-select
            class="font20 q-pb-sm"
            dark
            dense
            rounded
            filled
            v-model="userData.username"
            :options="options"
            label=""
          /> -->
        </div>
        <div class="col-1" align="center"><q-icon class="fas fa-search" /></div>
      </div>
      <div class="headPC q-pa-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        username: "DESTINY",
      },
      model: null,
      options: ["บัญชีผู้ใช้งาน", "ออกจากระบบ"],
    };
  },
  methods: {
    // กดปุ่มบัญชีอผู้ใช้งานไปหน้า profile
    profileBtn() {
      this.$router.push("/profile");
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
  },
};
</script>

<style lang="scss" scoped>
.headPC {
  z-index: 9;
  margin: auto;
  max-width: 1600px;
  width: 100%;
  height: 82px;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.headTablet {
  z-index: 9;
  width: 100%;
  height: 78px;
  text-decoration: underline;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.headMobile {
  z-index: 9;
  width: 100%;
  height: 46px;
  text-decoration: underline;
  color: white;
  background: rgba(0, 0, 0, 1);
}
</style>
