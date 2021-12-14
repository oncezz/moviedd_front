<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>

      <!-- ---- content ------->
      <div class="" align="center">
        <div class="q-pt-lg">
          <img
            Width="201px"
            Height="180px"
            src="../../public/image/loginPicMobile.png"
            alt=""
          />
        </div>
        <div class="font20">เข้าสู่ระบบ</div>
        <div align="left" class="q-px-md">
          <div class="q-pt-sm">ชื่อผู้ใช้งาน</div>
          <q-input dark outlined dense v-model="userData.username"></q-input>
          <div class="font12" style="color: #868686">
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
          </div>
          <div class="q-pt-sm">รหัสผ่าน</div>
          <q-input
            dark
            outlined
            dense
            v-model="userData.username"
            :type="isPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="font12" style="color: #868686">
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
          </div>
        </div>

        <div class="fontU font14 q-pr-md" align="right" @click="forget1()">
          ลืมรหัสผ่าน
        </div>

        <div class="loginBtnMobile text-black q-mt-md" @click="loginPass()">
          เข้าสู่ระบบ
        </div>
        <div class="font12 q-pt-md">
          ถ้าคุณไม่ได้เป็นสมาชิก สามารถกด
          <span class="fontU" style="color: #00d1ff" @click="signUp()"
            >สมัครสมาชิก</span
          >
        </div>
        <div style="height: 40px" class=""></div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="false" :menu="3"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="" align="center">
        <div class="">
          <img src="../../public/image/loginPicTablet.png" alt="" />
        </div>
        <div class="font28">เข้าสู่ระบบ</div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <div align="left">
              <div class="font20">ชื่อผู้ใช้งาน</div>
              <q-input
                dark
                outlined
                dense
                v-model="userData.username"
                class="q-pt-sm"
              ></q-input>
              <div class="font16 q-pt-sm" style="color: #868686">
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
              </div>
              <div class="font20 q-pt-md">รหัสผ่าน</div>
              <q-input
                class="q-pt-sm"
                dark
                outlined
                dense
                v-model="userData.username"
                :type="isPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <div class="font16 q-pt-sm" style="color: #868686">
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
              </div>
            </div>
            <div class="fontU font16" align="right" @click="forget1()">
              ลืมรหัสผ่าน
            </div>
            <div
              class="loginBtnTablet text-black font18 q-mt-lg"
              @click="loginPass()"
            >
              เข้าสู่ระบบ
            </div>
            <div class="font16 q-pt-lg">
              ถ้าคุณไม่ได้เป็นสมาชิก สามารถกด
              <span class="fontU" style="color: #00d1ff" @click="signUp()"
                >สมัครสมาชิก</span
              >
            </div>
          </div>

          <div class="col-2"></div>
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="false" :menu="3"></end-bar>
    </div>
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="" align="center">
        <div>
          <div class="q-pt-lg">
            <img src="../../public/image/loginPicPc.png" alt="" />
          </div>
        </div>
        <div class="font28">เข้าสู่ระบบ</div>
        <div class="row">
          <div class="col-4"></div>
          <div class="col">
            <div align="left">
              <div class="font20">ชื่อผู้ใช้งาน</div>
              <q-input
                dark
                outlined
                dense
                v-model="userData.username"
                class="q-pt-sm"
              ></q-input>
              <div class="font16 q-pt-sm" style="color: #868686">
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
              </div>
              <div class="font20 q-pt-md">รหัสผ่าน</div>
              <q-input
                class="q-pt-sm"
                dark
                outlined
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
              <div class="font16 q-pt-sm" style="color: #868686">
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
              </div>
            </div>
            <div
              class="fontU font16 q-pt-md cursor-pointer"
              align="right"
              @click="forget1()"
            >
              ลืมรหัสผ่าน
            </div>

            <div
              class="loginBtnPc text-black font18 q-mt-lg"
              @click="loginPass()"
            >
              เข้าสู่ระบบ
            </div>
            <div class="font16 q-pt-lg">
              ถ้าคุณไม่ได้เป็นสมาชิก สามารถกด
              <span
                class="fontU cursor-pointer"
                style="color: #00d1ff"
                @click="signUp()"
                >สมัครสมาชิก</span
              >
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
    async loginPass() {
      let data = {
        username: this.userData.username,
        password: this.userData.password,
      };
      let url = this.serverpath + "fe_checkpassword.php";
      let res = await axios.post(url, JSON.stringify(data));
      // console.log(res.data);
      if (res.data == "fail") {
        this.redNotify("wrong password");
      } else {
        this.$q.localStorage.set("userid", res.data[0].id);
        this.$q.localStorage.set("username", res.data[0].username);
        this.$router.push("/home");
      }
    },
    // กดลืมรหัสผ่านเพื่่อไปหน้า forgetpassword1
    forget1() {
      this.$router.push("/forgetpassword1");
    },
    // กดสมัครสมาชิกเพื่อไปหน้า signup
    signUp() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style lang="scss" scoped>
.loginBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  background: #00d1ff;
  border-radius: 2px;
}
.loginBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.loginBtnPc {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.loginPicTablet {
  width: 337px;
  height: 293px;
}
.loginPicPc {
  width: 337px;
  height: 313px;
}
</style>
