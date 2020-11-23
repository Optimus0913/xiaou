<template>
  <div>
    <!--header-->
    <header>
      <a href="javascript:;" class="logo" @click="$router.go(-1)">
        <img :src="img2" />
      </a>
      <h3>商品分类</h3>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <div class="cateinfo">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          :title="item.catename"
          v-for="item in firstlist"
          :key="item.id"
        />
      </van-sidebar>
      <van-grid :border="false" :column-num="3">
        <van-grid-item
          v-for="item in secondlist"
          :key="item.id"
          :to="'/list?id=' + item.id"
        >
          <van-image
            :src="
              item.img
                ? $imgUrl + item.img
                : 'https://img.yzcdn.cn/vant/ipad.jpeg'
            "
          />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getCatetree } from "../../util/axios";
export default {
  data() {
    return {
      activeKey: 0,
      firstlist: [],
      secondlist: [],
      img2: require("../../assets/images/arrowLeft (2).jpg"),
    };
  },
  methods: {
    onChange(e) {
      console.log(e);
      this.secondlist = this.firstlist[e].children;
    },
    getCatetreelist() {
      getCatetree().then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.firstlist = res.list;
          this.secondlist = res.list[this.activeKey].children;
        }
      });
    },
  },
  mounted() {
    this.getCatetreelist();
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
  background-color: #f26b11;
  align-items: center;
  padding: 0.43rem 0.29rem 0;
  border-bottom: 1px solid #e4e4e4;
}

header a img {
  width: 0.17rem;
  height: 0.29rem;
}

header h3 {
  font: 0.35rem/0.85rem "微软雅黑";
  color: #fffffd;
}

header .menu {
  width: 0.55rem;
  display: flex;
  justify-content: space-between;
}

header .menu span {
  background-color: #fdfffe;
}
.cateinfo {
  display: flex;
}
.van-grid {
  flex: 1;
}
</style>
