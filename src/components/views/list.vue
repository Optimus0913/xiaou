<template>
  <div>
    <!--header-->
    <header>
      <a href="javascript:;" class="logo" @click="$router.go(-1)">
        <img class="le" :src="img" />
      </a>
      <img :src="img1" alt="logo" />
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!--search-->
    <a class="search" href="#"> <img :src="img2" /> <span>搜索商品</span> </a>
    <van-list>
      <van-card
        @click="goDetail(item.id)"
        v-for="item in goodslist"
        :key="item.id"
        :price="item.price.toFixed(2)"
        :title="item.goodsname"
        :thumb="
          item.img
            ? $imgUrl + item.img
            : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605690430066&di=6b40da2d29ed89625f77cf2d525a943f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F11%2F20140911211243_3rT4u.jpeg'
        "
      />
    </van-list>
  </div>
</template>

<script>
import { getGoods } from "../../util/axios";
export default {
  data() {
    return {
      img: require("../../assets/images/arrowLeft.jpg"),
      img1: require("../../assets/images/logo.jpg"),
      img2: require("../../assets/images/search.jpg"),
      goodslist: [],
    };
  },
  mounted() {
    this.getGoodslist();
  },
  methods: {
    getGoodslist() {
      getGoods({ fid: this.$route.query.id }).then((res) => {
        if (res.code == 200) {
          console.log(res);
          this.goodslist = res.list;
        }
      });
    },
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="" scoped>
header .menu {
  width: 0.55rem;
  display: flex;
  justify-content: space-between;
}
header .menu span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 50%;
  background-color: #050505;
}
header {
  display: flex;
  justify-content: space-between;
  height: 0.85rem;
  background-color: #fff;
  align-items: center;
  padding: 0.43rem 0.29rem 0;
}
header a .le {
  width: 0.17rem;
  height: 0.29rem;
}
header img {
  width: 1.5rem;
  height: 0.29rem;
}
.search {
  display: flex;
  text-align: center;
  margin: 0.22rem auto 0.33rem;
  display: block;
  width: 6.23rem;
  height: 0.77rem;
  background-color: #f26b11;
  border-radius: 0.36rem;
}
.search img {
  width: 0.26rem;
  height: 0.26rem;
  margin-top: 0.26rem;
  margin-right: 0.23rem;
}
.search span {
  font: 0.26rem/0.77rem "微软雅黑";
  color: #fff;
}
</style>
