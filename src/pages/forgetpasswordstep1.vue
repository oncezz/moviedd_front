<template>
  <div>
    <!-- mobile -->
    <div class="mobile-only lt-sm q-pa-md">
      <head-bar></head-bar>
      <div align="center"><img src="../../public/image/lock.png" alt="" /></div>
      <div class="font24" align="center">ลืมรหัสผ่าน</div>
      <div class="font14">เบอร์โทรศัพท์มือถือของคุณที่ลงทะเบียนไว้</div>
      <div>
        <q-input
          outlined
          v-model="telephone"
          dark
          dense
          hint="ใช้ในการยืนยันตัวตน "
        />
      </div>
      <div class="row q-pt-lg">
        <div class="col-6" align="center">
          <q-btn
            outline=""
            color="white"
            label="ย้อนกลับ"
            class="q-ml-lg"
            style="width: 120px"
          />
        </div>
        <div class="col-6" align="center">
          <q-btn
            label="ต่อไป"
            class="q-mr-lg"
            style="background-color: #00d1ff; color: #010101; width: 120px"
          />
        </div>
      </div>
      <div class="q-pt-md" align="center">
        ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
        <span class="fontblue"> <U>เข้าสู่ระบบ</U></span>
      </div>
      <end-bar :login="false" :menu="3"></end-bar>
    </div>
    <!-- tablet -->
    <div class="mobile-only gt-xs q-pa-md">
      <head-bar></head-bar>
      <div align="center">
        <img src="../../public/image/lock.png" alt="" height="230px" />
      </div>
      <div class="font28" align="center">ลืมรหัสผ่าน</div>
      <div class="font20 q-px-xl">เบอร์โทรศัพท์มือถือของคุณที่ลงทะเบียนไว้</div>
      <div class="q-px-xl">
        <q-input
          outlined
          v-model="telephone"
          dark
          hint="ใช้ในการยืนยันตัวตน "
        />
      </div>
      <div class="row q-pt-lg">
        <div class="col-6" align="right">
          <q-btn
            outline=""
            color="white"
            label="ย้อนกลับ"
            class="q-mr-lg"
            style="width: 150px; height: 50px; font-size: 18px"
          />
        </div>
        <div class="col-6" align="left">
          <q-btn
            label="ต่อไป"
            class="q-ml-lg"
            style="
              background-color: #00d1ff;
              color: #010101;
              width: 150px;
              height: 50px;
              font-size: 18px;
            "
          />
        </div>
      </div>
      <div class="font16 q-pt-lg" align="center">
        ถ้าคุณเป็นสมาชิกอยู่แล้ว สามารถ
        <span class="fontblue"><u>เข้าสู่ระบบ</u> </span>
      </div>
      <end-bar :login="false" :menu="3"></end-bar>
    </div>

    <!-- pc -->
    <div class="desktop-only q-pa-md">
      <head-bar></head-bar>
      <div class="PCbox">
        <div align="center">
          <img src="../../public/image/lock.png" alt="" />
        </div>
        <div class="font28" align="center">ลืมรหัสผ่าน</div>

        <div class="font18 q-pt-md">
          เบอร์โทรศัพท์มือถือของคุณที่ลงทะเบียนไว้
        </div>
        <div class="q-pt-sm">
          <q-input
            outlined
            v-model="telephone"
            dark
            dense
            hint="ใช้ในการยืนยันตัวตน "
          ></q-input>
        </div>

        <div class="row q-pt-lg" style="width: 450px; margin: auto">
          <div class="col-6" align="center">
            <q-btn
              outline=""
              color="white"
              label="ย้อนกลับ"
              class="q-ml-lg"
              style="width: 120px"
            />
          </div>
          <div class="col-6" align="center">
            <q-btn
              label="ต่อไป"
              class="q-mr-lg"
              style="background-color: #00d1ff; color: #010101; width: 120px"
            />
          </div>
        </div>
        <div class="q-pt-md" align="center">
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
</style>
