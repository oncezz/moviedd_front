<template>
  <div class="fullscreen bgDrop">
    <div class="fixed-center alertBox" align="center">
      <q-icon
        name="fas fa-question-circle"
        color="yellow-14"
        size="60px"
        class="q-pt-md"
      />
      <div class="fontTitle q-py-md">{{ textLine }}</div>
      <div class="row justify-evenly">
        <div class="whiteBtn" @click="cancleAlert()">ยกเลิก</div>
        <div class="blueBtn" @click="okAlert()">ตกลง</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictureType: {
      type: Number,
    },
    textLine: {
      type: String,
    },
  },
  methods: {
    cancleAlert() {
      this.$emit("cancle-alert");
    },
    okAlert() {
      this.$emit("ok-alert");
    },
  },
};
</script>

<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .alertBox {
    width: 300px;
    height: 195px;
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.95) 74.33%,
      rgba(0, 209, 255, 0.95) 127.31%
    );
    border: 1px solid rgba(0, 209, 255, 0.3);
    //   backdrop-filter: blur(4px);
  }
  .fontTitle {
    line-height: 40px;
    font-size: 14px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .alertBox {
    width: 400px;
    height: 210px;
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.95) 74.33%,
      rgba(0, 209, 255, 0.95) 127.31%
    );
    border: 1px solid rgba(0, 209, 255, 0.3);
    //   backdrop-filter: blur(4px);
  }
  .fontTitle {
    line-height: 40px;
    font-size: 20px;
  }
}
</style>
