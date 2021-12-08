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
        <div class="font24 q-pt-lg">ข้อมูลบัญชีผู้ใช้งาน</div>

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
              readonly
            />
          </div>
          <div
            class="font12 fontU q-pt-sm"
            style="color: #868686"
            align="right"
            @click="changePhoneNumber()"
          >
            แก้ไข
          </div>
          <div class="font14">รหัสผ่าน</div>
          <q-input
            class="q-pt-sm"
            input-style="font-size: 14px;"
            dark
            outlined
            readonly
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
            class="font12 fontU q-pt-sm"
            style="color: #868686"
            align="right"
            @click="changePassword()"
          >
            เปลี่ยนรหัสผ่าน
          </div>
        </div>
        <div align="center" class="q-pt-md">
          <div class="signoutBtnMobile font14" @click="exitBtn()">
            ออกจากระบบ
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
        <div class="font28 q-pt-xl">ข้อมูลบัญชีผู้ใช้งาน</div>
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
              <div
                class="font16 fontU q-pt-sm"
                style="color: #868686"
                align="right"
                @click="changePhoneNumber()"
              >
                แก้ไข
              </div>
              <div class="font20 q-pt-md">รหัสผ่าน</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                readonly
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
                class="font16 fontU q-pt-sm"
                style="color: #868686"
                align="right"
                @click="changePassword()"
              >
                เปลี่ยนรหัสผ่าน
              </div>
            </div>
            <div align="center" class="q-pt-md">
              <div class="signoutBtnTablet font18">ออกจากระบบ</div>
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
        <div class="font28 q-pt-lg">ข้อมูลบัญชีผู้ใช้งาน</div>
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
              <div
                class="font16 fontU q-pt-sm cursor-pointer"
                style="color: #868686"
                align="right"
                @click="changePhoneNumber()"
              >
                แก้ไข
              </div>
              <div class="font20 q-pt-md">รหัสผ่าน</div>
              <q-input
                class="q-pt-sm"
                input-style="font-size: 18px;"
                dark
                outlined
                readonly
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
                class="font16 fontU q-pt-sm cursor-pointer"
                style="color: #868686"
                align="right"
                @click="changePassword()"
              >
                เปลี่ยนรหัสผ่าน
              </div>
            </div>
            <div align="center" class="q-pt-md">
              <div class="signoutBtn font18" @click="exitBtn()">ออกจากระบบ</div>
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
  methods: {
    exitBtn() {
      this.$q.notify("Message");
    },
    changePhoneNumber() {
      this.$router.push("/profile2");
    },
    changePassword() {
      this.$router.push("/profile3");
    },
  },
};
</script>

<style lang="scss" scoped>
.signoutBtn {
  cursor: pointer;
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.signoutBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
.signoutBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
}
</style>
