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
        <div class="font24 q-pt-lg">แก้ไขรหัสผ่าน</div>

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
          <div class="font14 q-pt-md">รหัสผ่านเดิม</div>
          <q-input
            class="q-pt-sm"
            input-style="font-size: 14px;"
            dark
            outlined
            dense
            v-model="userData.oldpassword"
            :type="oldPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="oldPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="oldPwd = !oldPwd"
              />
            </template>
          </q-input>

          <div class="font14 q-pt-md">รหัสผ่านใหม่</div>
          <q-input
            class="q-pt-sm"
            input-style="font-size: 14px;"
            dark
            outlined
            dense
            v-model="userData.newpassword"
            :type="oldPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="oldPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="oldPwd = !oldPwd"
              />
            </template>
          </q-input>
          <div class="font12 q-pt-sm" style="color: #868686" align="right">
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div class="font14 q-pt-sm">ยืนยันรหัสผ่านใหม่</div>
          <q-input
            class="q-pt-sm"
            input-style="font-size: 14px;"
            dark
            outlined
            dense
            v-model="userData.confirmpassword"
            :type="confirmPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="confirmPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="confirmPwd = !confirmPwd"
              />
            </template>
          </q-input>
        </div>
        <div align="center">
          <div class="font12 q-pt-md row justify-center">
            <div class="backBtnMobile" @click="goBackProfile()">ย้อนกลับ</div>
            <div class="q-pa-md"></div>
            <div class="confirmBtnMobile text-black" @click="confirmBtn()">
              ตกลง
            </div>
          </div>
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
        <div class="font28 q-pt-lg">แก้ไขรหัสผ่าน</div>
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
              <div class="font20 q-pt-xl">รหัสผ่านเดิม</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                dense
                v-model="userData.oldpassword"
                :type="oldPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="oldPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="oldPwd = !oldPwd"
                  />
                </template>
              </q-input>

              <div class="font20 q-pt-xl">รหัสผ่านใหม่</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                dense
                v-model="userData.newpassword"
                :type="newPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="newPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="newPwd = !newPwd"
                  />
                </template>
              </q-input>
              <div
                class="font16 fontU q-pt-sm"
                style="color: #868686"
                align="right"
              >
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
              </div>

              <div class="font20 q-pt-md">ยืนยันรหัสผ่านใหม่</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                dense
                v-model="userData.confirmpassword"
                :type="confirmPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="confirmPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="confirmPwd = !confirmPwd"
                  />
                </template>
              </q-input>
            </div>
            <div align="center">
              <div class="font18 q-py-xl row justify-center">
                <div class="backBtntablet" @click="goBackProfile()">
                  ย้อนกลับ
                </div>
                <div class="q-pa-md"></div>
                <div class="confirmBtntablet text-black" @click="confirmBtn()">
                  ตกลง
                </div>
              </div>
            </div>
          </div>

          <div class="col-2"></div>
        </div>
      </div>

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
        <div class="font28 q-pt-lg">แก้ไขรหัสผ่าน</div>
        <div class="row">
          <div class="col-4"></div>
          <div class="col">
            <div align="left">
              <div class="font20 q-pt-md">ชื่อผู้ใช้งาน</div>
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
              <div class="font20 q-pt-xl">รหัสผ่านเดิม</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                dense
                v-model="userData.oldpassword"
                :type="oldPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="oldPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="oldPwd = !oldPwd"
                  />
                </template>
              </q-input>

              <div class="font20 q-pt-xl">รหัสผ่านใหม่</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                dense
                v-model="userData.newpassword"
                :type="newPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="newPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="newPwd = !newPwd"
                    mask="NNNNNNNNNN"
                  />
                </template>
              </q-input>
              <div
                v-show="userData.newpassword == ''"
                class="font16 q-pt-sm"
                style="color: #868686"
              >
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
              </div>
              <div
                v-show="userData.newpassword != '' && !isUserNewPassword()"
                class="font16 q-pt-sm"
                style="color: #e75427"
              >
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
              </div>
              <div
                v-show="userData.newpassword != '' && isUserNewPassword()"
                class="font16 q-pt-sm"
                style="color: #e75427"
              >
                &nbsp;
              </div>

              <div class="font20 q-pt-md">ยืนยันรหัสผ่านใหม่</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                dense
                v-model="userData.confirmpassword"
                :type="confirmPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="confirmPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="confirmPwd = !confirmPwd"
                  />
                </template>
              </q-input>
            </div>
            <div align="center">
              <div class="font18 q-py-xl row justify-center">
                <div class="backBtn" @click="goBackProfile()">ย้อนกลับ</div>
                <div class="q-pa-md"></div>
                <div class="confirmBtn text-black" @click="confirmBtn()">
                  ตกลง
                </div>
              </div>
            </div>
          </div>

          <div class="col-4"></div>
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
      userData: {
        phoneNumber: "088-888-8888",
        username: "Destiny", //ชื่อผู้ใช้งาน
        password: "12345",
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
      },
      oldPwd: true,
      newPwd: true,
      confirmPwd: true,

      userId: "", //รหัสผู้ใช้งาน
    };
  },
  methods: {
    // กดแล้วย้อนกลับไปหน้าแรก
    goBackProfile() {
      this.$router.push("/profile");
    },
    // กดปุ่มต่อไป
    async confirmBtn() {
      if (
        this.userData.oldpassword.length == 0 ||
        this.userData.newpassword.length == 0 ||
        this.userData.confirmpassword.length == 0
      ) {
        this.redNotify("กรุณากรอกตัวเลือกให้ครบ");
        return;
      }
      if (this.userData.newpassword != this.userData.confirmpassword) {
        this.redNotify("รหัสผ่านของคุณไม่ตรงกัน");
        return;
      }
      let data = {
        userId: this.userId,
        oldPassword: this.userData.oldpassword,
        newPassword: this.userData.newpassword,
      };
      let url = this.serverpath + "fe_changepassword.php";
      let res = await axios.post(url, JSON.stringify(data));
      if (res.data === "finish") {
        this.greenNotify("เปลี่ยนรหัสผ่านเสร็จสิ้น");
        this.$router.push("/home");
      } else {
        this.redNotify("รหัสผ่านเดิมไม่ถูกต้อง");
      }
    },
    // เช็คว่าloginรึยัง
    checkUserLogIn() {
      if (this.userId == null) {
        this.$router.push("/home");
      }
    },
    // ตัวโหลด data
    loadUserData() {
      this.userId = this.$q.localStorage.getItem("userid");
      this.userData.username = this.$q.localStorage.getItem("username");
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
    // เช็คพาสเวิดใหม่ให้มี 6-10 หลัก
    isUserNewPassword() {
      return (
        this.userData.newpassword.length > 5 &&
        this.userData.newpassword.length < 11
      );
    },
    // เช็คยืนยันพาสเวิดใหม่ให้มี 6-10 หลัก
    isUserRePassword() {
      return (
        this.userData.rePassword.length > 5 &&
        this.userData.rePassword.length < 11
      );
    },
  },
  mounted() {
    this.loadUserData();
  },
};
</script>

<style lang="scss" scoped>
.backBtn {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.backBtntablet {
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
.confirmBtn {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.confirmBtntablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.confirmBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  background: #00d1ff;
}
</style>
