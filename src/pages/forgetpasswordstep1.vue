<template>
  <div>
    <!-- mobile -->
    <div class="mobile-only lt-sm q-pa-md">
      <head-bar></head-bar>
      <div align="center">
        <img
          class=""
          width="101px"
          height="135px"
          src="../../public/image/lock.png"
          alt=""
        />
      </div>
      <div class="font24 q-pt-sm" align="center">ลืมรหัสผ่าน</div>
      <div class="font14 q-pt-sm">เบอร์โทรศัพท์มือถือของคุณที่ลงทะเบียนไว้</div>
      <div class="q-pt-sm">
        <q-input
          outlined
          v-model="userData.phoneNumber"
          dark
          dense
          mask="###-###-####"
        />

        <div
          v-show="userData.phoneNumber != '' && !isPhoneNumber()"
          class="font12 q-pt-sm"
          style="color: #e75427"
        >
          หมายเลขโทรศัพท์ต้องมีความยาว 10 ตัว
        </div>
        <div
          v-show="userData.phoneNumber != '' && isPhoneNumber()"
          class="font12 q-pt-sm"
          style="color: #e75427"
        >
          &nbsp;
        </div>
      </div>
      <div align="center">
        <div class="font12 q-pt-md row justify-center">
          <div class="backBtnMobile" @click="backBtn()">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="nextBtnMobile text-black" @click="nextBtn()">ต่อไป</div>
        </div>
      </div>

      <end-bar :login="false" :menu="3"></end-bar>
    </div>
    <!-- tablet -->
    <div class="mobile-only gt-xs q-pa-md">
      <head-bar></head-bar>
      <div align="center">
        <img
          width="171px"
          height="229px"
          src="../../public/image/lock.png"
          alt=""
        />
      </div>
      <div class="font28 q-pt-md" align="center">ลืมรหัสผ่าน</div>

      <div class="font20 q-px-xl q-pt-md">
        เบอร์โทรศัพท์มือถือของคุณที่ลงทะเบียนไว้
      </div>
      <div class="q-px-xl">
        <q-input
          outlined
          v-model="userData.phoneNumber"
          dark
          mask="###-###-####"
        />

        <div
          v-show="userData.phoneNumber != '' && !isPhoneNumber()"
          class="font16 q-pt-sm"
          style="color: #e75427"
        >
          หมายเลขโทรศัพท์ต้องมีความยาว 10 ตัว
        </div>
        <div
          v-show="userData.phoneNumber != '' && isPhoneNumber()"
          class="font16 q-pt-sm"
          style="color: #e75427"
        >
          &nbsp;
        </div>
      </div>
      <div align="center">
        <div class="font18 q-py-xl row justify-center">
          <div class="backBtntablet" @click="backBtn()">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="nextBtntablet text-black" @click="nextBtn()">ต่อไป</div>
        </div>
      </div>

      <end-bar :login="false" :menu="3"></end-bar>
    </div>

    <!-- pc -->
    <div class="desktop-only">
      <head-bar></head-bar>
      <div class="PCbox">
        <div align="center" class="q-pt-xl">
          <img
            Width="171px"
            Height="229px"
            src="../../public/image/lock.png"
            alt=""
          />
        </div>
        <div class="font28 q-pt-md" align="center">ลืมรหัสผ่าน</div>

        <div class="font20 q-pt-md">
          เบอร์โทรศัพท์มือถือของคุณที่ลงทะเบียนไว้
        </div>
        <div class="q-pt-sm">
          <q-input
            outlined
            mask="###-###-####"
            v-model="userData.phoneNumber"
            dark
            dense
          ></q-input>

          <div
            v-show="userData.phoneNumber != '' && !isPhoneNumber()"
            class="font16 q-pt-sm"
            style="color: #e75427"
          >
            หมายเลขโทรศัพท์ต้องมีความยาว 10 ตัว
          </div>
          <div
            v-show="userData.phoneNumber != '' && isPhoneNumber()"
            class="font16 q-pt-sm"
            style="color: #e75427"
          >
            &nbsp;
          </div>
        </div>
        <div align="center">
          <div class="font18 q-py-xl row justify-center">
            <div class="backBtn" @click="backBtn()">ย้อนกลับ</div>
            <div class="q-pa-md"></div>
            <div class="nextBtn text-black" @click="nextBtn()">ต่อไป</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headBar from "src/components/headBar.vue";
import EndBar from "src/components/endBar.vue";
export default {
  components: { headBar, EndBar },
  data() {
    return {
      userData: {
        phoneNumber: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // กดปุ่มย้อนกลับไปหน้า เข้าสู่ระบบ
    backBtn() {
      this.$router.push("/login");
    },
    // กดปุ่มต่อไปเพื่อไปหน้า ขอ OTP
    nextBtn() {
      this.userPhoneNumber();

      // this.$router.push("/forgetpassword2");
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
    async userPhoneNumber() {
      let data = {
        telephone: this.userData.phoneNumber,
      };
      let url = this.serverpath + "fe_profile_fogetcheckphone.php";
      let res = await axios.post(url, JSON.stringify(data));
      console.log(res.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.fontblue {
  color: #00d1ff;
}
.PCbox {
  width: 600px;
  margin: auto;
}
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
.nextBtn {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.nextBtntablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.nextBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  background: #00d1ff;
}
</style>
