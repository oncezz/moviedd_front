<template>
  <div>
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <div class="backGroundPc">
        <div class="row items-center">
          <div class="col-1"></div>
          <div class="col topTextPc q-pt-md" align="center">ประเภทหนัง</div>
          <div class="col-1 closeBtn" @click="closeBtn()" align="center">
            <q-icon name="far fa-times-circle" size="40px" />
          </div>
        </div>
        <div class="categoryNamePc">
          <div
            v-for="(item, index) in category"
            :key="index"
            class="q-pa-md"
            align="center"
          >
            <div class="categoryTextPc">
              {{ item.catname }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      category: [],
    };
  },
  methods: {
    async loadCategory() {
      let url = this.serverpath + "fe_category_loadcategory.php";
      let res = await axios.get(url);

      this.category = res.data;
      this.category.sort((a, b) => a.orderid - b.orderid);
    },
    // กดปุ่มปิดกลับไปหน้าแรก
    closeBtn() {
      this.$router.push("/home");
    },
  },
  mounted() {
    this.loadCategory();
  },
};
</script>

<style lang="scss" scoped>
.backGroundPc {
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #00d1ff -47.95%, #000000 78.61%);
}
.headTopPc {
  width: 100%;
  height: 82px;
  background: #000000;
}
.topTextPc {
  font-size: 36px;
  font-weight: bold;
  color: #00d1ff;
}
.categoryTextPc {
  display: inline-block;
  cursor: pointer;
  font-size: 34px;
  color: white;
}
.categoryTextPc:hover {
  color: yellow;
}
.categoryNamePc {
  overflow-y: auto;
  height: calc(100vh - 100px);
}
.closeBtn {
  cursor: pointer;
}
.closeBtn:hover {
  color: yellow;
}
</style>
