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
      <div>
        <q-input outlined v-model="telephone" dark dense />
        <div align="right" class="font12 q-pt-sm" style="color: #868686">
          ใช้สำหรับการยืนยันตัวตน
        </div>
      </div>
      <div align="center">
        <div class="font12 q-pt-md row justify-center">
          <div class="backBtnMobile">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="nextBtnMobile text-black">ต่อไป</div>
        </div>
      </div>
      <div class="q-pt-lg font12" align="center">
        ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
        <span class="fontblue"> <U>เข้าสู่ระบบ</U></span>
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
        <q-input outlined v-model="telephone" dark />
        <div align="right" class="font16 q-pt-sm" style="color: #868686">
          ใช้สำหรับการยืนยันตัวตน
        </div>
      </div>
      <div align="center">
        <div class="font18 q-py-xl row justify-center">
          <div class="backBtntablet">ย้อนกลับ</div>
          <div class="q-pa-md"></div>
          <div class="nextBtntablet text-black">ต่อไป</div>
        </div>
      </div>
      <div class="font16" align="center">
        ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
        <span class="fontblue"><u>เข้าสู่ระบบ</u></span>
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
          <q-input outlined v-model="telephone" dark dense></q-input>
          <div align="right" class="font16 q-pt-md" style="color: #868686">
            ใช้สำหรับการยืนยันตัวตน
          </div>
        </div>
        <div align="center">
          <div class="font18 q-py-xl row justify-center">
            <div class="backBtn">ย้อนกลับ</div>
            <div class="q-pa-md"></div>
            <div class="nextBtn text-black">ต่อไป</div>
          </div>
        </div>
        <div class="font16" align="center">
          ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
          <span class="fontblue"><u>เข้าสู่ระบบ</u></span>
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
      telephone: "",
    };
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
