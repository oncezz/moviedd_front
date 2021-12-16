<template>
  <div class="fullscreen bgDrop">
    <div class="fixed-center alertBox" align="center">
      <div class="q-pt-md">
        <q-icon
          name="fas fa-exclamation-circle"
          color="yellow-5"
          size="55px"
          v-show="pictureType == 1"
        />
        <q-icon
          name="fas fa-check-circle"
          color="green-13"
          size="43px"
          v-show="pictureType == 2"
        />
        <div class="fontTitle1line" v-show="!line2show">
          {{ textLine1 }}
        </div>
        <div class="q-py-sm" v-show="line2show">
          <div class="fontTitle2line">{{ textLine1 }}</div>
          <div class="fontDes">{{ textLine2 }}</div>
        </div>
        <div class="blueBtn posBtn" @click="closeAlert()">ตกลง</div>
        <!-- <div class="font28" v-show="line2show">{{ textLine1 }}</div> -->
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
    textLine1: {
      type: String,
    },
    textLine2: {
      type: String,
    },
  },
  data() {
    return {
      line2show: false,
    };
  },
  methods: {
    check2line() {
      if (this.textLine2 == undefined) {
        this.line2show = false;
      } else {
        this.line2show = true;
      }
    },
    closeAlert() {
      this.$emit("close-alert");
    },
  },
  mounted() {
    this.check2line();
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
  .posBtn {
    position: relative;
    top: 5px;
  }
  .fontTitle1line {
    line-height: 60px;
    font-size: 18px;
  }
  .fontTitle2line {
    font-size: 18px;
  }
  .fontDes {
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
  .posBtn {
    position: relative;
    top: 0px;
  }
  .fontTitle1line {
    line-height: 80px;
    font-size: 22px;
  }
  .fontTitle2line {
    font-size: 22px;
    line-height: 40px;
  }
  .fontDes {
    font-size: 16px;
  }
}
</style>
