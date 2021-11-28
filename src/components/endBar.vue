<template>
  <div>
    <div class="mobile-only lt-sm">
      <div class="enderMobile"></div>
      <div class="enderMobile font14 row items-center fixed-bottom">
        <!-- home  -->
        <div class="col" align="center">
          <div class="noPick" v-show="menu != 1" @click="goHome()">
            <div class="">
              <img src="../../public/image/homeIcon.svg" width="22px" alt="" />
            </div>
            <div>หน้าหลัก</div>
          </div>
          <div class="pick" v-show="menu == 1">
            <div>
              <img src="../../public/image/homeIconA.svg" width="22px" alt="" />
            </div>
            <div>หน้าหลัก</div>
          </div>
        </div>
        <!-- sign up  -->
        <div class="col" align="center" v-show="!login">
          <div class="noPick" v-show="menu != 2" @click="goTosignup()">
            <div>
              <img
                src="../../public/image/signupIcon.svg"
                width="20px"
                alt=""
              />
            </div>
            <div>สมัครสมาชิก</div>
          </div>
          <div class="pick" v-show="menu == 2">
            <div>
              <img
                src="../../public/image/signupIconA.svg"
                width="20px"
                alt=""
              />
            </div>
            <div>สมัครสมาชิก</div>
          </div>
        </div>
        <!-- log in  -->
        <div class="col noPick" align="center" v-show="!login">
          <div class="noPick" v-show="menu != 3" @click="goTologin()">
            <div>
              <img src="../../public/image/loginIcon.svg" width="24px" alt="" />
            </div>
            <div>เข้าสู่ระบบ</div>
          </div>
          <div class="pick" v-show="menu == 3">
            <div>
              <img
                src="../../public/image/loginIconA.svg"
                width="24px"
                alt=""
              />
            </div>
            <div>เข้าสู่ระบบ</div>
          </div>
        </div>
        <!-- Favorite  -->
        <div class="col noPick" align="center" v-show="login">
          <div class="noPick" v-show="menu != 4" @click="goTofavorite()">
            <div>
              <img src="../../public/image/favIcon.svg" width="24px" alt="" />
            </div>
            <div>เพิ่มรายชื่อ</div>
          </div>
          <div class="pick" v-show="menu == 4">
            <div>
              <img src="../../public/image/favIconA.svg" width="24px" alt="" />
            </div>
            <div>เพิ่มรายชื่อ</div>
          </div>
        </div>
        <!-- Profile  -->
        <div class="col noPick" align="center" v-show="login">
          <div class="noPick" v-show="menu != 5" @click="goProfile()">
            <div>
              <img
                src="../../public/image/profileIcon.svg"
                width="24px"
                alt=""
              />
            </div>
            <div>โปรไฟล์</div>
          </div>
          <div class="pick" v-show="menu == 5">
            <div>
              <img
                src="../../public/image/profileIconA.svg"
                width="24px"
                alt=""
              />
            </div>
            <div>โปรไฟล์</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ------  tablet  ---------  -->
    <div class="mobile-only gt-xs">
      <div class="enderTablet"></div>
      <div class="enderTablet font14 row items-center fixed-bottom">
        <!-- home  -->
        <div class="col" align="center">
          <div class="noPick" v-show="menu != 1" @click="goHome()">
            <div>
              <img src="../../public/image/homeIcon.svg" width="30px" alt="" />
            </div>
            <div>หน้าหลัก</div>
          </div>
          <div class="pick" v-show="menu == 1">
            <div>
              <img src="../../public/image/homeIconA.svg" width="30px" alt="" />
            </div>
            <div>หน้าหลัก</div>
          </div>
        </div>
        <!-- sign up  -->
        <div class="col" align="center" v-show="!login">
          <div class="noPick" v-show="menu != 2" @click="goTosignup()">
            <div>
              <img
                src="../../public/image/signupIcon.svg"
                width="30px"
                alt=""
              />
            </div>
            <div>สมัครสมาชิก</div>
          </div>
          <div class="pick" v-show="menu == 2">
            <div>
              <img
                src="../../public/image/signupIconA.svg"
                width="30px"
                alt=""
              />
            </div>
            <div>สมัครสมาชิก</div>
          </div>
        </div>
        <!-- log in  -->
        <div class="col noPick" align="center" v-show="!login">
          <div class="noPick" v-show="menu != 3" @click="goTologin()">
            <div>
              <img src="../../public/image/loginIcon.svg" width="30px" alt="" />
            </div>
            <div>เข้าสู่ระบบ</div>
          </div>
          <div class="pick" v-show="menu == 3">
            <div>
              <img
                src="../../public/image/loginIconA.svg"
                width="30px"
                alt=""
              />
            </div>
            <div>เข้าสู่ระบบ</div>
          </div>
        </div>
        <!-- Favorite  -->
        <div class="col noPick" align="center" v-show="login">
          <div class="noPick" v-show="menu != 4" @click="goTofavorite()">
            <div>
              <img src="../../public/image/favIcon.svg" width="30px" alt="" />
            </div>
            <div>เพิ่มรายชื่อ</div>
          </div>
          <div class="pick" v-show="menu == 4">
            <div>
              <img src="../../public/image/favIconA.svg" width="30px" alt="" />
            </div>
            <div>เพิ่มรายชื่อ</div>
          </div>
        </div>
        <!-- Profile  -->
        <div class="col noPick" align="center" v-show="login">
          <div class="noPick" v-show="menu != 5" @click="goProfile()">
            <div>
              <img
                src="../../public/image/profileIcon.svg"
                width="30px"
                alt=""
              />
            </div>
            <div>โปรไฟล์</div>
          </div>
          <div class="pick" v-show="menu == 5">
            <div>
              <img
                src="../../public/image/profileIconA.svg"
                width="30px"
                alt=""
              />
            </div>
            <div>โปรไฟล์</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Number,
    },
    login: {
      type: Boolean,
    },
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    goTosignup() {
      this.$router.push("/signup");
    },
    goTologin() {
      this.$router.push("/login");
    },
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
.enderMobile {
  width: 100%;
  height: 66px;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.enderTablet {
  width: 100%;
  height: 78px;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.noPick {
  color: #fbfbfb;
  font-weight: 500;
}
.pick {
  color: #00d1ff;
}
</style>
