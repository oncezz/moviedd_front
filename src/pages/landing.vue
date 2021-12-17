<template>
  <div class="fullscreen bgNeon">
    <div class="netgig fixed-center" align="center">
      <img
        src="../../public/image/netgig.svg"
        style="width: 80%; max-width: 500px"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
  mounted() {
    setTimeout(() => {
      this.goHome();
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.netgig {
  width: 100%;
}
.bgNeon {
  background: radial-gradient(
    57.42% 57.42% at 50% 50%,
    #004150 0%,
    #010101 100%
  );
}
</style>
