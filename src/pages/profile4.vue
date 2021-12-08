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
        </div>
      </div>
      <div class="row q-pt-md">
        <div class="col-3" align="left">
          <div
            class="backBtnMobile font18 text-black"
            align="center"
            @click="backBtn()"
          >
            กลับ
          </div>
        </div>
        <div class="col" align="center">
          <div class="font18">เลือกแนวหนังที่คุณชอบ</div>
          <div class="font14">เลือกหนังไปแล้ว 4/8 แนว</div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row q-ma-md">
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/cartoon.png"
            alt=""
          />
        </div>

        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/korea.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 15px"></div>
        <div class="col-6" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/family.png"
            alt=""
          />
        </div>
      </div>
      <div align="center" class="q-pt-md font18">
        <div class="saveBtnMobile" @click="saveBtn()">บันทึก</div>
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
        <div class="font28 q-pt-xl">แนวหนังที่ชอบ</div>
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
            </div>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row q-pt-xl">
          <div class="col-4" align="left">
            <div
              class="brx backBtnTablet font24 text-black"
              align="center"
              @click="backBtn()"
            >
              กลับ
            </div>
          </div>
          <div class="col" align="center">
            <div class="font24">เลือกแนวหนังที่คุณชอบ</div>
            <div class="font20">เลือกหนังไปแล้ว 4/8 แนว</div>
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row q-ma-lg">
          <div class="col-4" align="center">
            <img
              style="width: 90%"
              src="../../public/image/movielist/cartoon.png"
              alt=""
            />
          </div>

          <div class="col-4" align="center">
            <img
              style="width: 90%"
              src="../../public/image/movielist/korea.png"
              alt=""
            />
          </div>
          <div class="col-4" align="center">
            <img
              style="width: 90%"
              src="../../public/image/movielist/family.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div align="center" class="q-pt-md font24">
        <div class="saveBtnTablet" @click="saveBtn()">บันทึก</div>
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
        <div class="font28 q-pt-lg">แนวหนังที่ชอบ</div>
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
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
      <div class="row q-pt-xl">
        <div class="col-3">
          <div
            class="backBtn text-black font24 q-ml-lg"
            align="center"
            @click="backBtn()"
          >
            กลับ
          </div>
        </div>
        <div class="col" align="center">
          <div class="font24">เลือกแนวหนังที่คุณชอบ</div>
          <div class="font20">เลือกหนังไปแล้ว 4/8 แนว</div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row q-pt-xl">
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/cartoon.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/korea.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/family.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/china.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/superhero.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/scifi.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div align="center" class="q-pt-lg font24">
      <div class="saveBtn" @click="saveBtn()">บันทึก</div>
    </div>
    <div class="q-pt-xl"></div>
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
    // กดปุ่มกลับ
    backBtn() {
      this.$router.push("/profile");
    },
    // กดปุ่มยืนยันแนวหนัง
    saveBtn() {
      this.greenNotify("complete");
    },
  },
};
</script>

<style lang="scss" scoped>
.signoutBtn {
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
.backBtn {
  width: 120px;
  height: 50px;
  line-height: 50px;
  background: #00d1ff;
  border-radius: 40px;
}
.backBtnTablet {
  width: 83px;
  height: 58px;
  line-height: 58px;
  background: #00d1ff;
  border-radius: 0px 40px 40px 0px;
}
.backBtnMobile {
  width: 60px;
  height: 42px;
  line-height: 42px;
  background: #00d1ff;
  border-radius: 0px 20px 20px 0px;
}
.saveBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  color: black;
  background: #00d1ff;
  border-radius: 2px;
}
.saveBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  color: black;
  background: #00d1ff;
  border-radius: 2px;
}
.saveBtn {
  width: 116px;
  height: 40px;
  line-height: 40px;
  color: black;
  background: #00d1ff;
  border-radius: 2px;
}
</style>
