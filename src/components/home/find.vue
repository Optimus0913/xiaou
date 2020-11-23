<template>
  <div>
    <!--find-->
    <van-tabs type="card">
      <van-tab title="发现新品">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in firstGoods"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="热门推荐">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in secondGoods"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="所有商品">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in thirdGoods"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getIndexgoods } from "../../util/axios";
export default {
  data() {
    return {
      firstGoods: [],
      secondGoods: [],
      thirdGoods: [],
    };
  },
  mounted() {
    this.getIndexGoodslist();
  },
  methods: {
    getIndexGoodslist() {
      getIndexgoods().then((res) => {
        if (res.code == 200) {
          this.firstGoods = res.list[0].content;
          this.secondGoods = res.list[1].content;
          this.thirdGoods = res.list[2].content;
        }
      });
    },
  },
};
</script>

<style lang="" scoped>
.van-tabs {
  margin-bottom: 80px;
}
</style>
