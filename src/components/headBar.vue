<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <div class="headMobile font14 row items-center fixed-top q-pr-lg">
        <div class="col-4 q-pt-sm" align="center">
          <img
            class=""
            src="../../public/image/netgig.svg"
            width="54px"
            alt=""
          />
        </div>
        <div class="col" align="center">ภาพยนต์</div>
        <div class="col" align="center">ซีรีย์</div>
        <div class="col" align="center">หมวดหนัง</div>
      </div>
      <div class="headMobile q-pa-sm"></div>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <div class="headTablet font20 row items-center fixed-top">
        <div class="col-3 q-pt-sm" align="center">
          <img src="../../public/image/netgig.svg" width="92px" alt="" />
        </div>

        <div class="col"></div>
        <div class="col-6 row">
          <div class="col" align="center">ภาพยนต์</div>
          <div class="col" align="center">ซีรีย์</div>
          <div class="col" align="center">ตลก</div>
          <div class="col" align="center"><q-icon class="fas fa-search" /></div>
        </div>
      </div>
      <div class="headTablet q-pa-sm"></div>
    </div>
    <!-- PC  -->
    <div class="desktop-only">
      <div class="headPC font20 row items-center fixed-top">
        <div class="col-2" align="center">
          <img src="../../public/image/netgig.svg" alt="" />
        </div>
        <div class="col-1" align="center">หนัง</div>
        <div class="col-1" align="center">ซี่รี่ย์</div>
        <div class="col-1" align="center">ประเภท</div>
        <div class="col"></div>
        <div class="col-1" align="center">รายชื่อ</div>
        <div class="col-1" align="center">โปรไฟล์</div>
        <div class="col-1" align="center"><q-icon class="fas fa-search" /></div>
      </div>
      <div class="headPC q-pa-sm"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.headPC {
  z-index: 9;
  margin: auto;
  max-width: 1600px;
  width: 100%;
  height: 82px;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.headTablet {
  z-index: 9;
  width: 100%;
  height: 78px;
  text-decoration: underline;
  color: white;
  background: rgba(0, 0, 0, 1);
}
.headMobile {
  z-index: 9;
  width: 100%;
  height: 46px;
  text-decoration: underline;
  color: white;
  background: rgba(0, 0, 0, 1);
}
</style>
