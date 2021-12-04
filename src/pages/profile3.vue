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
            :type="isPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
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
            :type="isPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
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
            v-model="userData.comfirmpassword"
            :type="isPwd ? 'password' : 'text'"
            ><template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div align="center">
          <div class="font12 q-pt-md row justify-center">
            <div class="backBtnMobile">ย้อนกลับ</div>
            <div class="q-pa-md"></div>
            <div class="nextBtnMobile text-black">ตกลง</div>
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
                :type="isPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
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
                v-model="userData.comfirmpassword"
                :type="isPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <div align="center">
              <div class="font18 q-py-xl row justify-center">
                <div class="backBtntablet">ย้อนกลับ</div>
                <div class="q-pa-md"></div>
                <div class="nextBtntablet text-black">ตกลง</div>
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
                :type="isPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
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
                :type="isPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <div class="font16 q-pt-sm" style="color: #868686" align="right">
                ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
              </div>

              <div class="font20 q-pt-md">ยืนยันรหัสผ่านใหม่</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                dense
                v-model="userData.comfirmpassword"
                :type="isPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <div align="center">
              <div class="font18 q-py-xl row justify-center">
                <div class="backBtn">ย้อนกลับ</div>
                <div class="q-pa-md"></div>
                <div class="nextBtn text-black">ตกลง</div>
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
        username: "Destiny",
        password: "12345",
        oldpassword: "",
        newpassword: "",
        comfirmpassword: "",
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
