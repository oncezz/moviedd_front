<template>
  <div class="fullscreen bgNeon">
    <div class="netgig fixed-center" align="center">
      <img
        src="../../public/image/netgig.svg"
        style="width: 90%; max-width: 500px"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMain() {
      this.$router.push("/home");
    },
  },
  mounted() {
    setTimeout(() => {
      this.goToMain();
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
    54.74% 54.74% at 50% 50%,
    #004150 0%,
    #010101 100%
  );
}
</style>
