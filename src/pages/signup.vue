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
        <div class="font14 q-pl-lg" align="left">
          <div class="q-pt-md">หมายเลขโทรศัพท์มือถือ</div>
          <q-input dark outlined dense v-model="userData.phoneNumber">
          </q-input>
          <div class="font12" style="color: #868686">ใช้สำหรับยืนยันตัวตน</div>
          <div class="q-pt-sm">ชื่อผู้ใช้งาน</div>
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
          <div class="q-pt-sm">รหัสผ่าน</div>
          <q-input dark outlined dense v-model="userData.password"> </q-input>
          <div class="font12" style="color: #868686">
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6-10 หลัก
          </div>
        </div>
        <div class="saveBtnMobile q-mt-md" @click="saveDia()">ยืนยัน</div>
        <div class="font12 q-py-md">
          ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
          <span class="fontU cursor-pointer" style="color: #00d1ff">
            เข้าสู่ระบบ</span
          >
        </div>
      </div>
      <!-- end header  -->
      <div class="endHeaderMobile text-black">
        <div class="q-pt-md" style="font-size: 21px" align="center">
          สิทธิพิเศษสำหรับสมาชิก
        </div>
        <div class="row q-pt-md q-pl-md">
          <div class="lineOrderMobile"></div>
          <div class="q-pl-md">
            <div class="font16">ระบบจัดเก็บหนัง</div>
            <div class="font13">ง่ายต่อการดูหนัง หรือไว้ดูภายหลัง</div>
          </div>
        </div>

        <div class="row q-pt-md q-pl-md">
          <div class="lineOrderMobile"></div>

          <div class="q-pl-md">
            <div class="font16">ระบบจัดการหน้าแรก</div>
            <div class="font13">
              ระบบ AI จะจัดหนังในแนวที่คุณชอบ <br />
              มารอให้คุณได้ชม อย่างจุใจ
            </div>
          </div>
        </div>
      </div>

      <!-- end  -->
      <end-bar></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
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
          <q-input dark outlined dense v-model="userData.phoneNumber">
          </q-input>
          <div class="font16" style="color: #868686">ใช้สำหรับยืนยันตัวตน</div>
        </div>
        <div class="font20 q-py-sm" align="left" style="width: 500px">
          <div class="font20 q-pt-sm">ชื่อผู้้ใช้งาน</div>
          <q-input dark outlined dense v-model="userData.username"> </q-input>
          <div class="font16" style="color: #868686">
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
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              /> </template
          ></q-input>
          <div class="font16" style="color: #868686">
            ตัวอักษรภาษาอังกฤษหรือตัวเลข 6 - 10 หลัก
          </div>
        </div>
        <div class="saveBtn font18 q-mt-lg" @click="saveDia()">ยืนยัน</div>
        <div class="font16 q-pt-md">
          ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
          <span class="fontU cursor-pointer" style="color: #00d1ff">
            เข้าสู่ระบบ</span
          >
        </div>
      </div>
      <div>
        <div class="promoTag text-black row no-padding">
          <div class="col q-pt-md q-pl-xl">
            <div class="font32">สิทธิพิเศษสำหรับสมาชิก</div>
            <div class="row q-pt-md">
              <div class="lineOrder"></div>
              <div class="q-pl-md">
                <div class="font24" style="margin-top: -5px">
                  ระบบจัดเก็บหนัง
                </div>

                <div class="font19">ง่ายต่อการดูหนัง หรือไว้ดูภายหลัง</div>
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="lineOrder"></div>
              <div class="q-pl-md">
                <div class="font24" style="margin-top: -5px">
                  ระบบจัดการหน้าแรก
                </div>

                <div class="font19">
                  ระบบ AI จะจัดหนังในแนวที่คุณชอบ มารอให้คุณได้ชม อย่างจุใจ
                </div>
              </div>
            </div>
          </div>

          <div class="picTag">
            <img src="../../public/image/picTag.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- dialog  -->
    <q-dialog v-model="wrongDia">
      <q-card class="diaBox">
        <div align="center">
          <div class="q-pa-lg">
            <img src="../../public/image/redTime.svg" width="62px" alt="" />
          </div>
          <div class="font20 text-White q-px-sm">{{ wrongStr }}</div>
          <div class="okInDia" @click="closeDia()">ตกลง</div>
        </div>
      </q-card>
    </q-dialog>
    <div class="fullscreen bgDrop" v-show="wrongDia"></div>
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
  background: #00d1ff;
}
.lineOrder {
  width: 2px;
  height: 57px;
  background: #010101;
}
.picTag {
  position: absolute;
  bottom: -6px;
  right: 0px;
}
.saveBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  border: 1px solid white;
  border-radius: 2px;
}
.endHeaderMobile {
  width: 100%;
  height: calc(100vh - 574px);
  background: #00d1ff;
}

.lineOrderMobile {
  width: 2px;
  height: 44px;
  background: #010101;
}
</style>
