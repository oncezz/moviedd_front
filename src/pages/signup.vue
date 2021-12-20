<template>
  <div class="">
    <!-- mobile -->
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- head  -->
      <div class="q-pr-lg" align="center">
        <div>
          <img
            width="337px"
            height="175.01px"
            src="../../public/image/signupPromo.png"
            alt=""
          />
        </div>
        <div class="font20">สมัครสมาชิก</div>
        <div class="font18 q-pl-lg" align="left">
          <div class="q-pt-md">หมายเลขโทรศัพท์มือถือ</div>
          <q-input
            dark
            outlined
            dense
            mask="###-###-####"
            v-model="userData.phoneNumber"
          >
          </q-input>
          <div
            v-show="userData.phoneNumber == ''"
            class="font12"
            style="color: #868686"
          >
            ใช้สำหรับยืนยันตัวตน
          </div>
          <div
            v-show="userData.phoneNumber != '' && !isPhoneNumber()"
            class="font12"
            style="color: #e75427"
          >
            หมายเลขโทรศัพท์ต้องมีความยาว 10 ตัว
          </div>
          <div
            v-show="userData.phoneNumber != '' && isPhoneNumber()"
            class="font12"
            style="color: #e75427"
          >
            &nbsp;
          </div>
          <div class="q-pt-sm font18">ชื่อผู้ใช้งาน</div>
          <q-input
            dark
            outlined
            mask="NNNNNNNNNN"
            dense
            v-model="userData.username"
          >
          </q-input>
          <div
            class="font12"
            style="color: #868686"
            v-show="userData.username == ''"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>

          <div
            v-show="userData.username != '' && !isUserName()"
            class="font12"
            style="color: #e75427"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div
            v-show="userData.username != '' && isUserName()"
            class="font12"
            style="color: #e75427"
          >
            &nbsp;
          </div>
          <div class="q-pt-sm">รหัสผ่าน</div>
          <q-input
            dark
            outlined
            dense
            mask="NNNNNNNNNN"
            v-model="userData.password"
            :type="isPwd ? 'password' : 'text'"
            ><template v-slot:append
              ><q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div
            v-show="userData.password != '' && !isUserPassword()"
            class="font12"
            style="color: #e75427"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>

          <div
            v-show="userData.password == ''"
            class="font12"
            style="color: #868686"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div
            v-show="userData.password != '' && isUserPassword()"
            class="font12"
            style="color: #e75427"
          >
            &nbsp;
          </div>
        </div>
        <div class="saveBtnMobile q-mt-md" @click="goToOpt()">ถัดไป</div>
        <div class="font14 q-py-md">
          ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ

          <span
            @click="goToLogIn()"
            class="fontU cursor-pointer"
            style="color: #00d1ff"
          >
            เข้าสู่ระบบ</span
          >
        </div>
      </div>
      <!-- end header  -->

      <div class="endHeaderMobile">
        <div class="q-pt-md" style="font-size: 21px" align="center">
          สิทธิพิเศษสำหรับสมาชิก
        </div>
        <div class="row q-pt-md q-pl-md">
          <div class="lineOrderMobile"></div>
          <div class="q-pl-sm">
            <div class="font16">ระบบจัดเก็บหนัง</div>
            <div class="font13">ง่ายต่อการดูหนัง หรือไว้ดูภายหลัง</div>
          </div>
        </div>

        <div class="row q-pt-md q-pl-md">
          <div class="lineOrderMobile"></div>

          <div class="q-pl-sm">
            <div class="font16">ระบบจัดการหน้าแรก</div>
            <div class="font13">
              ระบบ AI จะจัดหนังในแนวที่คุณชอบ <br />
              มารอให้คุณได้ชม อย่างจุใจ
            </div>
          </div>
        </div>
        <div class="picTagM">
          <img
            height="300px"
            src="../../public/image/sinupPromoMobile.png"
            alt=""
          />
        </div>
      </div>

      <!-- end  -->
      <end-bar :menu="2" :login="false"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- head  -->
      <div class="" align="center">
        <div>
          <img
            width="540.08px"
            height="280.47px"
            src="../../public/image/signupPromo.png"
            alt=""
          />
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <div class="font28">สมัครสมาชิก</div>
            <div class="font20" align="left" style="">
              <div class="q-pt-md">หมายเลขโทรศัพท์มือถือ</div>
              <q-input
                dark
                outlined
                dense
                v-model="userData.phoneNumber"
                mask="###-###-####"
              >
              </q-input>
              <div
                v-show="userData.phoneNumber == ''"
                class="font16"
                style="color: #868686"
              >
                ใช้สำหรับยืนยันตัวตน
              </div>
              <div
                v-show="userData.phoneNumber != '' && !isPhoneNumber()"
                class="font16"
                style="color: #e75427"
              >
                หมายเลขโทรศัพท์ต้องมีความยาว 10 ตัว
              </div>
              <div
                v-show="userData.phoneNumber != '' && isPhoneNumber()"
                class="font16"
                style="color: #e75427"
              >
                &nbsp;
              </div>
              <div class="q-pt-md">ชื่อผู้ใช้งาน</div>
              <q-input
                dark
                outlined
                dense
                v-model="userData.username"
                mask="NNNNNNNNNN"
              >
              </q-input>
              <div
                class="font16"
                style="color: #868686"
                v-show="userData.username == ''"
              >
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
              </div>
              <div
                v-show="userData.username != '' && isUserName()"
                class="font16"
                style="color: #e75427"
              >
                &nbsp;
              </div>
              <div
                v-show="userData.username != '' && !isUserName()"
                class="font16"
                style="color: #e75427"
              >
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
              </div>
              <div class="q-pt-sm">รหัสผ่าน</div>
              <q-input
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
                v-show="userData.password != '' && !isUserPassword()"
                class="font16"
                style="color: #e75427"
              >
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
              </div>
              <div
                v-show="userData.password != '' && isUserPassword()"
                class="font16"
                style="color: #e75427"
              >
                &nbsp;
              </div>

              <div
                v-show="userData.password == ''"
                class="font16"
                style="color: #868686"
              >
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
              </div>
            </div>
            <div
              class="saveBtnTablet font18"
              style="margin-top: 37px"
              @click="goToOpt()"
            >
              ถัดไป
            </div>

            <div class="font16 q-py-md q-pb-xl">
              ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
              <span
                @click="goToLogIn()"
                class="fontU cursor-pointer"
                style="color: #00d1ff"
              >
                เข้าสู่ระบบ</span
              >
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
      <!-- endHeader  -->
      <div class="endHeaderTablet">
        <div class="q-pt-md" style="font-size: 32px" align="center">
          สิทธิพิเศษสำหรับสมาชิก
        </div>
        <div class="row q-pt-md q-pl-xl">
          <div class="lineOrderTablet"></div>
          <div class="q-pl-md">
            <div class="font24">ระบบจัดเก็บหนัง</div>
            <div class="font19">ง่ายต่อการดูหนัง หรือไว้ดูภายหลัง</div>
          </div>
        </div>

        <div class="row q-pt-md q-pl-xl">
          <div class="lineOrderTablet"></div>

          <div class="q-pl-md">
            <div class="font24">ระบบจัดการหน้าแรก</div>
            <div class="font19">
              ระบบ AI จะจัดหนังในแนวที่คุณชอบ มารอให้คุณได้ชม <br />
              อย่างจุใจ
            </div>
          </div>
        </div>
        <div class="picTagTablet">
          <img src="../../public/image/signupPromoTablet.png" alt="" />
        </div>
      </div>

      <end-bar :menu="2" :login="false"></end-bar>
    </div>

    <!-- PC  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar></head-bar>
      <div class="q-pa-lg text-white" align="center">
        <div><img src="../../public/image/signupPromo.png" alt="" /></div>
        <div class="font28">สมัครสมาชิก</div>
        <div class="font20 q-py-sm" align="left" style="width: 500px">
          <div class="font20 q-pt-sm">หมายเลขโทรศัพท์มือถือ</div>

          <q-input
            dark
            outlined
            dense
            v-model="userData.phoneNumber"
            mask="###-###-####"
          >
          </q-input>
          <div
            v-show="userData.phoneNumber == ''"
            class="font16"
            style="color: #868686"
          >
            ใช้สำหรับยืนยันตัวตน
          </div>
          <div
            v-show="userData.phoneNumber != '' && !isPhoneNumber()"
            class="font16"
            style="color: #e75427"
          >
            หมายเลขโทรศัพท์ต้องมีความยาว 10 ตัว
          </div>
          <div
            v-show="userData.phoneNumber != '' && isPhoneNumber()"
            class="font16"
            style="color: #e75427"
          >
            &nbsp;
          </div>
        </div>
        <div class="font20 q-py-sm" align="left" style="width: 500px">
          <div class="font20 q-pt-sm">ชื่อผู้ใช้งาน</div>
          <q-input
            dark
            outlined
            dense
            v-model="userData.username"
            mask="NNNNNNNNNN"
          >
          </q-input>
          <div
            class="font16"
            style="color: #868686"
            v-show="userData.username == ''"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div
            v-show="userData.username != '' && isUserName()"
            class="font16"
            style="color: #e75427"
          >
            &nbsp;
          </div>
          <div
            v-show="userData.username != '' && !isUserName()"
            class="font16"
            style="color: #e75427"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
        </div>
        <div class="font20 q-py-sm" align="left" style="width: 500px">
          <div class="font20 q-pt-sm">รหัสผ่าน</div>
          <q-input
            dark
            outlined
            dense
            v-model="userData.password"
            mask="NNNNNNNNNN"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              /> </template
          ></q-input>

          <div
            v-show="userData.password != '' && !isUserPassword()"
            class="font16"
            style="color: #e75427"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
          <div
            v-show="userData.password != '' && isUserPassword()"
            class="font16"
            style="color: #e75427"
          >
            &nbsp;
          </div>

          <div
            v-show="userData.password == ''"
            class="font16"
            style="color: #868686"
          >
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
        </div>
        <div class="saveBtn font18 q-mt-lg" @click="goToOpt()">ถัดไป</div>
        <div class="font16 q-pt-md">
          ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
          <span
            class="fontU cursor-pointer"
            style="color: #00d1ff"
            @click="goToLogIn()"
          >
            เข้าสู่ระบบ</span
          >
        </div>
      </div>
      <div>
        <div class="promoTag row no-padding">
          <div class="col q-pt-md q-pl-xl">
            <div class="font28">สิทธิพิเศษสำหรับสมาชิก</div>
            <div class="row q-pt-md">
              <div class="lineOrder"></div>
              <div class="q-pl-md">
                <div class="font20" style="margin-top: -5px">
                  ระบบจัดเก็บหนัง
                </div>

                <div class="font18">ง่ายต่อการดูหนัง หรือไว้ดูภายหลัง</div>
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="lineOrder"></div>
              <div class="q-pl-md">
                <div class="font20" style="margin-top: -5px">
                  ระบบจัดการหน้าแรก
                </div>

                <div class="font18">
                  ระบบ AI จะจัดหนังในแนวที่คุณชอบ มารอให้คุณได้ชม อย่างจุใจ
                </div>
              </div>
            </div>
          </div>

          <div class="picTag">
            <img height="350px" src="../../public/image/picTag.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="fullscreen bgDrop" v-show="wrongDia"></div>
    <div class=""></div>
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
        phoneNumber: "",
        username: "",
        password: "",
      },
      isPwd: true,
      wrongDia: false,
      wrongStr: "ชื่อผู้ใช้งานไม่สามารถใช้ได้ เนื่องจากมีชื่อใช้งานนี้อยู่แล้ว",
    };
  },
  methods: {
    saveDia() {
      this.wrongDia = true;
    },
    closeDia() {
      this.wrongDia = false;
    },
    async goToOpt() {
      let data = {
        username: this.userData.username,
        phonenumber: this.userData.phoneNumber,
        password: this.userData.password,
      };
      let url = this.serverpath + "fe_signup_adduser.php";
      let res = await axios.post(url, JSON.stringify(data));
      if (res.data == "This phone number exist") {
        this.redNotify("เบอร์มือถือนี้มีการลงทะเบียนใช้งานแล้ว");
        return;
      } else if (res.data == "This username exist") {
        this.redNotify("ชื่อผู้ใช้งานนี้มีอยู่ในระบบแล้ว");
        return;
      } else {
        this.$router.push("/movielist");
      }
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
  },
};
</script>

<style lang="scss" scoped>
.inputBox {
  width: 500px;
  border-radius: 5px;
}
.saveBtn {
  cursor: pointer;
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: 1px solid white;
}
.promoTag {
  position: relative;
  height: 287px;
  width: 100%;
  background: #1f1f1f;
}
.lineOrder {
  width: 2px;
  height: 57px;
  background: #ffffff;
}
.lineOrderTablet {
  width: 2px;
  height: 57px;
  background: #ffffff;
}
.picTag {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.picTagTablet {
  position: absolute;
  bottom: -220px;
  right: 0px;
}
.picTagM {
  position: absolute;
  bottom: -120px;
  right: 0px;
}
.saveBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  border: 1px solid white;
  border-radius: 2px;
}
.saveBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid white;
}
.endHeaderMobile {
  width: 100%;
  height: calc(100vh - 574px);
  background: #1f1f1f;
}
.endHeaderTablet {
  width: 100%;
  height: 291px;
  background: #1f1f1f;
}

.lineOrderMobile {
  width: 2px;
  height: 44px;
  background: #ffffff;
}
</style>
