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
        <div class="font24 q-pt-lg">แก้ไขเบอร์โทรศัพท์</div>

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
          <div class="font14 q-pt-lg">เบอร์โทรศัพท์</div>
          <div class="">
            <q-input
              input-style="font-size: 14px;"
              dark
              outlined
              dense
              v-model="userData.phoneNumber"
            />
          </div>

          <div class="font14 q-pt-lg">รหัสผ่าน</div>
          <q-input
            class=""
            input-style="font-size: 14px;"
            dark
            outlined
            dense
            v-model="userData.password"
            :type="isPwd ? 'password' : 'text'"
          >
          </q-input>
        </div>
        <div align="center">
          <div class="font12 q-pt-md row justify-center">
            <div class="backBtnMobile">ย้อนกลับ</div>
            <div class="q-pa-md"></div>
            <div class="nextBtnMobile text-black">ต่อไป</div>
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
        <div class="font28 q-pt-xl">แก้ไขเบอร์โทรศัพท์</div>
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
              <div class="font20 q-pt-xl">เบอร์โทรศัพท์</div>
              <div class="q-pt-sm">
                <q-input
                  input-style="font-size: 18px;"
                  dark
                  outlined
                  dense
                  v-model="userData.phoneNumber"
                  readonly
                />
              </div>

              <div class="font20 q-pt-xl">รหัสผ่าน</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                dense
                v-model="userData.password"
                :type="isPwd ? 'password' : 'text'"
              >
              </q-input>
            </div>
            <div align="center">
              <div class="font18 q-py-xl row justify-center">
                <div class="backBtn">ย้อนกลับ</div>
                <div class="q-pa-md"></div>
                <div class="nextBtn text-black">ต่อไป</div>
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
        <div class="font28 q-pt-lg">แก้ไขเบอร์โทรศัพท์</div>
        <div class="row">
          <div class="col-4"></div>
          <div class="col">
            <div align="left">
              <div class="font20 q-pt-sm">ชื่อผู้ใช้งาน</div>
              <div class="q-pt-sm">
                <q-input
                  input-style="font-size: 18px;"
                  dark
                  outlined
                  v-model="userData.username"
                  readonly
                  dense
                />
              </div>
              <div class="font20 q-pt-xl">เบอร์โทรศัพท์</div>
              <div class="q-pt-sm">
                <q-input
                  input-style="font-size: 18px;"
                  dark
                  outlined
                  dense
                  v-model="userData.phoneNumber"
                />
              </div>

              <div class="font20 q-pt-xl">รหัสผ่าน</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                dense
                outlined
                v-model="userData.password"
                :type="isPwd ? 'password' : 'text'"
              >
              </q-input>
            </div>
            <div align="center">
              <div class="font18 q-py-xl row justify-center">
                <div class="backBtn">ย้อนกลับ</div>
                <div class="q-pa-md"></div>
                <div class="nextBtn text-black">ต่อไป</div>
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
