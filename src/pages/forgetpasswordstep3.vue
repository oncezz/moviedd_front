<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->

      <div align="center" class="q-pt-xl">
        <img
          width="139px"
          height="139px"
          src="../../public/image/keyIcon.png"
          alt=""
        />
        <div class="font24 q-pt-md">ตั้งค่ารหัสผ่านใหม่</div>
        <div align="left" class="q-px-md">
          <div class="font14">ชื่อผู้ใช้งาน</div>
          <div class="">
            <q-input
              input-style="font-size: 14px;"
              dark
              filled
              v-model="userData.username"
              readonly
            />
          </div>
          <div class="font14 q-pt-lg">รหัสผ่านใหม่</div>
          <q-input
            class=""
            input-style="font-size: 14px;"
            dark
            outlined
            mask="NNNNNNNNNN"
            dense
            v-model="userData.password"
            :type="isPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div
            v-show="userData.password == ''"
            class="font12 q-pt-sm"
            style="color: #868686"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div
            v-show="userData.password != '' && !isUserPassword()"
            class="font12 q-pt-sm"
            style="color: #e75427"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div
            v-show="userData.password != '' && isUserPassword()"
            class="font12 q-pt-sm"
            style="color: #e75427"
          >
            &nbsp;
          </div>

          <div class="font14 q-pt-md">ยืนยันรหัสผ่านใหม่</div>
          <q-input
            class=""
            input-style="font-size: 14px;"
            dark
            outlined
            dense
            v-model="userData.rePassword"
            :type="isPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div
            v-show="userData.rePassword == ''"
            class="font12 q-pt-sm"
            style="color: #868686"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div
            v-show="userData.rePassword != '' && !isUserRePassword()"
            class="font12 q-pt-sm"
            style="color: #e75427"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div
            v-show="userData.rePassword != '' && isUserRePassword()"
            class="font12 q-pt-sm"
            style="color: #e75427"
          >
            &nbsp;
          </div>
        </div>
      </div>
      <div align="center" class="font12">
        <div class="row justify-center q-py-lg">
          <div class="saveBtnMobile text-black" @click="saveBtn()">ยืนยัน</div>
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="loginKey == 1 ? true : false" :menu="1"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div align="center" class="q-pt-xl">
        <img
          width="209px"
          height="209px"
          src="../../public/image/keyIcon.png"
          alt=""
        />
        <div class="font28">ตั้งค่ารหัสผ่านใหม่</div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col">
          <div align="left">
            <div class="font20 q-pt-md">ชื่อผู้ใช้งาน</div>
            <div class="q-pt-sm">
              <q-input
                input-style="font-size: 18px;"
                dark
                filled
                v-model="userData.username"
                readonly
              />
            </div>
            <div class="font20 q-pt-md">รหัสผ่านใหม่</div>
            <q-input
              class="q-pt-sm"
              input-style="font-size: 18px;"
              dark
              outlined
              dense
              mask="NNNNNNNNNN"
              v-model="userData.password"
              :type="isPwd ? 'password' : 'text'"
              ><template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div
              v-show="userData.password == ''"
              class="font16 q-pt-sm"
              style="color: #868686"
            >
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
            </div>
            <div
              v-show="userData.password != '' && !isUserPassword()"
              class="font16 q-pt-sm"
              style="color: #e75427"
            >
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
            </div>
            <div
              v-show="userData.password != '' && isUserPassword()"
              class="font16 q-pt-sm"
              style="color: #e75427"
            >
              &nbsp;
            </div>

            <div class="font20 q-pt-lg">ยืนยันรหัสผ่านใหม่</div>
            <q-input
              class="q-pt-sm"
              input-style="font-size: 18px;"
              dark
              outlined
              dense
              mask="NNNNNNNNNN"
              v-model="userData.rePassword"
              :type="isPwd ? 'password' : 'text'"
              ><template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div
              v-show="userData.rePassword == ''"
              class="font16 q-pt-sm"
              style="color: #868686"
            >
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
            </div>
            <div
              v-show="userData.rePassword != '' && !isUserRePassword()"
              class="font16 q-pt-sm"
              style="color: #e75427"
            >
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
            </div>
            <div
              v-show="userData.rePassword != '' && isUserRePassword()"
              class="font16 q-pt-sm"
              style="color: #e75427"
            >
              &nbsp;
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <div align="center" class="font18">
        <div class="row justify-center q-py-xl">
          <div class="saveBtnTablet text-black" @click="saveBtn()">ยืนยัน</div>
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
      <div align="center" class="q-pt-xl">
        <img
          width="209px"
          height="209px"
          src="../../public/image/keyIcon.png"
          alt=""
        />
        <div class="font28">ตั้งค่ารหัสผ่านใหม่</div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col">
          <div align="left">
            <div class="font20 q-pt-md">ชื่อผู้ใช้งาน</div>
            <div class="q-pt-sm">
              <q-input
                input-style="font-size: 18px;"
                dark
                filled
                v-model="userData.username"
                readonly
              />
            </div>

            <div class="font20 q-pt-xl">รหัสผ่านใหม่</div>
            <q-input
              class="q-pt-sm"
              input-style="font-size: 18px;"
              dark
              outlined
              dense
              mask="NNNNNNNNNN"
              v-model="userData.password"
              :type="isPwd ? 'password' : 'text'"
              ><template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div
              v-show="userData.password == ''"
              class="font16 q-pt-sm"
              style="color: #868686"
            >
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
            </div>
            <div
              v-show="userData.password != '' && !isUserPassword()"
              class="font16 q-pt-sm"
              style="color: #e75427"
            >
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
            </div>
            <div
              v-show="userData.password != '' && isUserPassword()"
              class="font16 q-pt-sm"
              style="color: #e75427"
            >
              &nbsp;
            </div>

            <div class="font20 q-pt-lg">ยืนยันรหัสผ่านใหม่</div>
            <q-input
              class="q-pt-sm"
              input-style="font-size: 18px;"
              dark
              outlined
              dense
              v-model="userData.rePassword"
              :type="isPwd ? 'password' : 'text'"
              ><template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div
              v-show="userData.rePassword == ''"
              class="font16 q-pt-sm"
              style="color: #868686"
            >
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
            </div>
            <div
              v-show="userData.rePassword != '' && !isUserRePassword()"
              class="font16 q-pt-sm"
              style="color: #e75427"
            >
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
            </div>
            <div
              v-show="userData.rePassword != '' && isUserRePassword()"
              class="font16 q-pt-sm"
              style="color: #e75427"
            >
              &nbsp;
            </div>
          </div>
        </div>

        <div class="col-4"></div>
      </div>
      <div align="center" class="font18">
        <div class="row justify-center q-py-xl">
          <div class="saveBtn text-black" @click="saveBtn()">ยืนยัน</div>
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
  data() {
    return {
      userData: {
        phoneNumber: "",
        username: "Destiny",
        password: "",
        rePassword: "",
      },
      isPwd: true,
      comfirmPwd: "",
      loginKey: this.$q.localStorage.getItem("login"),
    };
  },
  methods: {
    // กดปุ่มยืนยันตั้งค่ารหัสผ่านใหม่
    saveBtn() {
      this.greenNotify("complete");
    },
    // ตัวเช็คเบอมือถือ 10 หลัก
    isPhoneNumber() {
      return this.userData.phoneNumber.length == 12;
    },
    // เช็คชื่อผู้ใช้งานให้เป็นภาษาอังกฤษเท่านั้น
    isUserName() {
      return (
        this.userData.username.length > 5 && this.userData.username.length < 11
      );
    },
    // เช็คพาสเวิดให้มี 6-10 หลัก
    isUserPassword() {
      return (
        this.userData.password.length > 5 && this.userData.password.length < 11
      );
    },
    // เช็คยืนยันพาสเวิดให้มี 6-10 หลัก
    isUserRePassword() {
      return (
        this.userData.rePassword.length > 5 &&
        this.userData.rePassword.length < 11
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.backBtn {
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.backBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.backBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.saveBtn {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.saveBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.saveBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  background: #00d1ff;
}
</style>
