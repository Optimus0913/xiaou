<template>
  <div>
    <!--con-->
    <ul class="con">
      <li v-for="item in firstGoods" :key="item.id">
        <div class="details-pic">
          <img
            :src="
              item.img
                ? $imgUrl + item.img
                : 'https://img.yzcdn.cn/vant/ipad.jpeg'
            "
          />
        </div>
        <div class="details-buy">
          <h4 v-text="item.goodsname"></h4>
          <p><span>&yen;</span>{{ item.price }}</p>
          <span class="shou">已售800件</span>
          <router-link to="/details">
            <a href="javascripts:;">立即抢购</a></router-link
          >
        </div>
      </li>
      <li v-for="item in firstGoods" :key="item.id">
        <div class="details-pic">
          <img
            :src="
              item.img
                ? $imgUrl + item.img
                : 'https://img.yzcdn.cn/vant/ipad.jpeg'
            "
          />
        </div>
        <div class="details-buy">
          <h4 v-text="item.goodsname"></h4>
          <p><span>&yen;</span>{{ item.price }}</p>
          <span class="shou">已售800件</span>
          <router-link to="/details">
            <a href="javascripts:;">立即抢购</a></router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getIndexgoods } from "../../util/axios";
export default {
  data() {
    return {
      firstGoods: [],
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
        }
      });
    },
  },
};
</script>

<style lang="" scoped>
.con {
  padding: 0 0.2rem;
  background-color: #fff;
  margin-bottom: 0.38rem;
  height: 10.73rem;
}

.con li {
  display: flex;
  justify-content: space-between;
  height: 2.99rem;
  box-shadow: 0 0 0.03rem 0.03rem #e9e9e9;
  margin-bottom: 0.34rem;
}

.con li:first-child {
  padding-top: 0.2rem;
}

.con li .details-pic {
  width: 3.02rem;
  text-align: center;
}

.con li .details-pic img {
  margin-top: 0.5rem;
  margin-left: 0.36rem;
  width: 2.16rem;
  height: 2.2rem;
}

.con li .details-buy {
  width: 4.02rem;
}

.con li .details-buy h4 {
  font: 0.28rem/0.55rem "微软雅黑";
  color: #1c1c1c;
  margin-top: 0.32rem;
}

.con li .details-buy p {
  font: 0.3rem/0.53rem Arial;
  color: #f23e4a;
}

.con li .details-buy p span {
  font-size: 0.22rem;
}

.con li .details-buy .shou {
  font: 0.24rem/0.56rem Arial;
  color: #9a9a9a;
}

.con li .details-buy a {
  display: block;
  width: 1.64rem;
  height: 0.52rem;
  text-align: center;
  font: 0.28rem/0.52rem "微软雅黑";
  color: #fff7f1;
  background-color: #f26b11;
  border-radius: 0.08rem;
}
</style>
