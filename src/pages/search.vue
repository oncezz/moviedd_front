<template>
  <div>
    <!-- mobile  -->
    <div class="mobile-only lt-sm">
      <!-- ---- content ------->
      <div class="fixed-top headBGtablet"></div>
      <div>
        <q-icon
          size="sm"
          class="fas fa-arrow-left q-pl-lg"
          style="padding-top: 10px"
        />
      </div>
      <div align="center" class="q-pt-sm">
        <q-input
          outlined
          rounded
          dark
          bg-color="grey-10"
          clearable
          clear-icon="close"
          v-model="searchMovie"
          placeholder="ค้นหาหนังหรือซีรีย์"
          style="width: 90%; font-size: 14px"
        >
          <template v-slot:prepend>
            <q-icon color="" class="fas fa-search" />
          </template>
        </q-input>
        <div class="q-pt-lg font14">หนังค้นหายอดนิยม</div>
      </div>
      <div class="row q-pa-lg">
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic1.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic2.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic3.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 10px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic4.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic5.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic6.png"
            alt=""
          />
        </div>
      </div>

      <!-- ---- content ------->
      <end-bar :login="loginKey == 1 ? true : false" :menu="1"></end-bar>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs">
      <!-- ---- content ------->
      <div class="fixed-top headBGtablet"></div>
      <div>
        <q-icon
          size="lg"
          class="fas fa-arrow-left q-pl-lg"
          style="padding-top: 10px"
        />
      </div>
      <div align="center" class="q-pt-sm">
        <q-input
          outlined
          rounded
          dark
          bg-color="grey-10"
          clearable
          clear-icon="close"
          v-model="searchMovie"
          placeholder="ค้นหาหนังหรือซีรีย์"
          style="width: 95%; font-size: 20px"
        >
          <template v-slot:prepend>
            <q-icon color="" class="fas fa-search" />
          </template>
        </q-input>
        <div class="q-pt-lg font20">หนังค้นหายอดนิยม</div>
      </div>
      <div class="row q-pa-lg">
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic1.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic2.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic3.png"
            alt=""
          />
        </div>
        <div class="row" style="width: 100%; height: 10px"></div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic4.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic5.png"
            alt=""
          />
        </div>
        <div class="col-4" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic6.png"
            alt=""
          />
        </div>
      </div>
      <end-bar :login="loginKey == 1 ? true : false" :menu="1"></end-bar>
      <!-- ---- content ------->
    </div>
    <!-- pc  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <!-- ---- content ------->
      <div class="fixed-top headBG"></div>

      <div>
        <q-icon size="xl" class="fas fa-arrow-left q-pt-xl" />
      </div>

      <div align="center">
        <q-input
          outlined
          rounded
          dark
          bg-color="grey-10"
          clearable
          clear-icon="close"
          v-model="searchMovie"
          placeholder="ค้นหาหนังหรือซีรีย์"
          style="width: 60%; font-size: 20px"
        >
          <template v-slot:prepend>
            <q-icon color="" class="fas fa-search" />
          </template>
        </q-input>
        <div class="q-pt-lg font20">หนังค้นหายอดนิยม</div>
      </div>
      <div class="row q-pa-lg">
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic1.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic2.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic3.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic4.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic5.png"
            alt=""
          />
        </div>
        <div class="col-2" align="center">
          <img
            style="width: 90%"
            src="../../public/image/movielist/pic6.png"
            alt=""
          />
        </div>
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
  data() {
    return {
      loginKey: this.$q.localStorage.getItem("login"),
      searchMovie: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.headBG {
  width: 100%;
  height: 40vh;
  background: linear-gradient(
    180deg,
    #00d1ff -82.5%,
    rgba(0, 209, 255, 0) 98.87%
  );
}
.headBGtablet {
  width: 100%;
  height: 40vh;
  background: linear-gradient(
    180deg,
    #00d1ff -82.5%,
    rgba(0, 209, 255, 0) 98.87%
  );
}
.headBGmobile {
  width: 100%;
  height: 150vh;
  background: linear-gradient(
    180deg,
    #00d1ff -82.5%,
    rgba(0, 209, 255, 0) 98.87%
  );
}
</style>
