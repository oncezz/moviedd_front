<template>
  <div>
    <!-- mobile -->
    <div class="mobile-only lt-sm q-pa-md">
      <div align="center" style="padding-left: 40px">
        <img src="../../public/image/OTPpopcorn.png" />
      </div>
      <div class="font24" align="center">ยืนยัน OTP</div>
      <div class="font14 q-pt-md" align="center">
        รหัส OTP ได้ถูกส่งไปที่หมายเลข 098-765-4321
      </div>
      <div align="center">รหัสอ้างอิง #3566</div>
      <div class="row q-px-lg">OTP</div>
      <div align="right"><u>ส่งรหัส OTP อีกครั้ง (30)</u></div>
      <div
        class="row q-pt-lg"
        align="center"
        style="width: 260px; margin: auto"
      >
        <div class="col-6" align="right">
          <q-btn
            outline=""
            color="white"
            label="ย้อนกลับ"
            class="q-mr-lg"
            style="width: 120px"
          />
        </div>
        <div class="col-6" align="left">
          <q-btn
            label="ต่อไป"
            class="q-ml-lg"
            style="background-color: #00d1ff; color: #010101; width: 120px"
          />
        </div>
      </div>
    </div>

    <!-- tablet -->
    <div class="mobile-only gt-xs q-pa-md">
      <div align="center" style="padding-left: 60px">
        <img src="../../public/image/OTPpopcorn.png" />
        <div class="font28" align="center">ยืนยัน OTP</div>
        <div class="font20 q-pt-md" align="center">
          รหัส OTP ได้ถูกส่งไปที่หมายเลข 098-765-4321
        </div>
        <div class="font20" align="center">รหัสอ้างอิง #3566</div>
        <div class="row q-px-lg">OTP</div>
        <div class="font16" align="right"><u>ส่งรหัส OTP อีกครั้ง (30)</u></div>
        <div
          class="row q-pt-lg"
          align="center"
          style="width: 260px; margin: auto"
        ></div>
        <div class="row">
          <div class="col-6" align="right">
            <q-btn
              outline=""
              color="white"
              label="ย้อนกลับ"
              class="q-mr-lg"
              style="width: 120px"
            />
          </div>
          <div class="col-6" align="left">
            <q-btn
              label="ต่อไป"
              class="q-ml-lg"
              style="background-color: #00d1ff; color: #010101; width: 120px"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- PC -->
    <div class="desktop-only q-pa-md">PC</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
