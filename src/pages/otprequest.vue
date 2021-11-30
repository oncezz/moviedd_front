<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div class="q-pt-lg">
        <div align="center">
          <img
            class="q-pl-sm"
            Width="117px"
            src="../../public/image/OTPPopcornTablet.png"
            alt=""
          />
        </div>
        <div align="center">
          <div class="font20 q-ma-sm">สมัครสมาชิก</div>
          <div class="font14">รหัส OTP ได้ถูกส่งไปที่หมายเลข 098-765-4321</div>
          <div class="font14 q-pt-sm">รหัสอ้างอิง #3566</div>
          <div class="brx" style="height: 200px"></div>
          <div class="row justify-center q-py-xl">
            <div class="backBtnMobile">ย้อนกลับ</div>
            <div class="q-pa-md"></div>
            <div class="saveBtnMobile">ยืนยัน</div>
          </div>
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :menu="2"></end-bar>
    </div>
    <!-- Tablet  -->
    <div class="mobile-only gt-xs">
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div>
        <div align="center">
          <div class="q-pt-xl">
            <img
              Width="209px"
              Height="220px"
              class=""
              src="../../public/image/OTPPopcornTablet.png"
              alt=""
            />
          </div>
        </div>
        <div align="center">
          <div class="font28 q-ma-md">สมัครสมาชิก</div>
          <div class="font20">รหัส OTP ได้ถูกส่งไปที่หมายเลข 098-765-4321</div>
          <div class="font20 q-pt-md">รหัสอ้างอิง #3566</div>
          <div class="brx" style="height: 200px"></div>
          <div class="row justify-center q-py-xl">
            <div class="backBtnTablet">ย้อนกลับ</div>
            <div class="q-pa-md"></div>
            <div class="saveBtnTablet">ต่อไป</div>
          </div>
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :menu="2"></end-bar>
    </div>
    <!-- PC  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <head-bar></head-bar>
      <!-- ---- content ------->
      <div>
        <div align="center" class="text-white">
          <div class="q-pt-md">
            <img
              class=""
              Width="227px"
              Height="238.95px"
              src="../../public/image/OTPPopcorn.png"
              alt=""
            />
          </div>
        </div>
        <div align="center" class="">
          <div class="font28 q-ma-sm">สมัครสมาชิก</div>
          <div class="font20">รหัส OTP ได้ถูกส่งไปหมายเลข 098-765-4321</div>
          <div class="font20">รหัสอ้างอิง #3566</div>
          <div class="brx" style="height: 200px"></div>
          <div class="q-py-xl row justify-center">
            <div class="backBtn">ย้อนกลับ</div>
            <div class="q-pa-md"></div>
            <div class="saveBtn">ยืนยัน</div>
          </div>
        </div>
        <div></div>
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
};
</script>

<style lang="scss" scoped>
.saveBtn {
  color: black;
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.saveBtnTablet {
  color: black;
  width: 116px;
  height: 40px;
  line-height: 40px;
  background: #00d1ff;
}
.saveBtnMobile {
  color: black;
  width: 90px;
  height: 27px;
  line-height: 27px;
  background: #00d1ff;
}
.backBtn {
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
}
.backBtnTablet {
  width: 116px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ffffff;
}
.backBtnMobile {
  width: 90px;
  height: 27px;
  line-height: 27px;
  border: 1px solid #ffffff;
}
</style>
