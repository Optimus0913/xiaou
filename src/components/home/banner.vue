<template>
  <div>
    <div class="banner">
      <a href="#"
        ><van-swipe :autoplay="3000">
          <van-swipe-item v-for="item in bannerlist" :key="item.id">
            <img :src="$imgUrl + item.img" alt="" />
          </van-swipe-item> </van-swipe
      ></a>
    </div>
  </div>
</template>

<script>
import { getBanner } from "../../util/axios";
export default {
  data() {
    return {
      bannerlist: [],
    };
  },
  mounted() {
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      getBanner().then((res) => {
        // console.log(res, "响应");
        if (res.code == 200) {
          this.bannerlist = res.list;
        }
      });
    },
  },
};
</script>

<style lang="" scoped>
.banner a {
  display: block;
}

.banner a img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
