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
          <div align="right" class="font12 q-pt-sm" style="color: #868686">
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
          </div>

          <div class="font14 q-pt-sm">ยืนยันรหัสผ่านใหม่</div>
          <q-input
            class=""
            input-style="font-size: 14px;"
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
          <div align="right" class="font12 q-pt-sm" style="color: #868686">
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
          </div>
        </div>
      </div>
      <div align="center" class="font12">
        <div class="row justify-center q-py-lg">
          <div class="backBtnMobile">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="saveBtnMobile text-black">ยืนยัน</div>
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
            <div class="font20 q-pt-xl">รหัสผ่านใหม่</div>
            <q-input
              class="q-pt-sm"
              input-style="font-size: 18px;"
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
            <div align="right" class="font16 q-pt-sm" style="color: #868686">
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
            </div>

            <div class="font20 q-pt-lg">ยืนยันรหัสผ่านใหม่</div>
            <q-input
              class="q-pt-sm"
              input-style="font-size: 18px;"
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
            <div align="right" class="font16 q-pt-sm" style="color: #868686">
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
            </div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <div align="center" class="font18">
        <div class="row justify-center q-py-xl">
          <div class="backBtnTablet">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="saveBtnTablet text-black">ยืนยัน</div>
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
            <div align="right" class="font16 q-pt-sm" style="color: #868686">
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
            </div>

            <div class="font20 q-pt-lg">ยืนยันรหัสผ่านใหม่</div>
            <q-input
              class="q-pt-sm"
              input-style="font-size: 18px;"
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
            <div align="right" class="font16 q-pt-sm" style="color: #868686">
              ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
            </div>
          </div>
        </div>

        <div class="col-4"></div>
      </div>
      <div align="center" class="font18">
        <div class="row justify-center q-py-xl">
          <div class="backBtn">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="saveBtn text-black">ยืนยัน</div>
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
      },
      isPwd: true,
      comfirmPwd: "",
      loginKey: this.$q.localStorage.getItem("login"),
    };
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
