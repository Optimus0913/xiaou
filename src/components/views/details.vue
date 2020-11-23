<template>
  <div>
    <!--header-->
    <header>
      <a href="javascript:;" class="logo" @click="$router.go(-1)">
        <img :src="img" />
      </a>
      <h3>商品详情</h3>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!--banner-->
    <div class="banner">
      <a href="#">
        <img :src="img1" alt="" />
      </a>
    </div>
    <!--title-->
    <div class="title">
      <h3>雅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</h3>
      <p><span>&yen;123.00</span><i>(此价格不与套装优惠同时使用)</i></p>
    </div>
    <!--buy-->
    <div class="buy">
      <div>
        <span>促销：</span>
        <a href="#">满 减</a>
        <i>满两件九折 三件八折</i>
        <img :src="img2" />
      </div>
      <div>
        <span>购买数量</span>
        <div class="co">
          <a href="#">-</a>
          <input type="text" placeholder="1" />
          <a href="#">+</a>
        </div>
      </div>
      <div>
        <span>商品属性</span>
        <img :src="img2" />
      </div>
      <div>
        <span>规格</span>
        <a class="a1" href="#">30g</a>
        <a class="a2" href="#">5g</a>
      </div>
    </div>
    <!--det-->
    <div class="det">
      <h3>商品详情</h3>
      <img :src="img3" />
      <img :src="img4" />
      <img :src="img5" />
      <img :src="img6" />
      <img :src="img7" />
    </div>
    <!--evaluate-->
    <div class="evaluate">
      <h3>商品评价</h3>
      <p>1235668fg</p>
      <p>效果很好，物流到位，下次继续来！</p>
      <div class="eva-pic">
        <img :src="img8" />
        <img :src="img9" />
        <img :src="img10" />
      </div>
      <p>2020-01-13</p>
      <p>
        <span>共1000+条评论</span>
        <a href="#"><span>查看更多 ></span></a>
      </p>
    </div>
    <footer>
      <a href="javascript:;">
        <img :src="img11" />
        <router-link to="/cart"> <p>购物车</p></router-link>
        <i>2</i>
      </a>
      <router-link to="/cart" tag="a">加入购物车</router-link>
      <!-- <a href="javascript:;"></a> -->
      <router-link to="/sure" tag="a">立即购买</router-link>
      <!-- <a href="javascript:;">立即购买</a> -->
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../assets/images/arrowLeft (2).jpg"),
      img1: require("../../assets/images/picDetail_8.jpg"),
      img2: require("../../assets/images/arrow.jpg"),
      img3: require("../../assets/images/picDetail_3.jpg"),
      img4: require("../../assets/images/picDetail_4.jpg"),
      img5: require("../../assets/images/picDetail_5.jpg"),
      img6: require("../../assets/images/picDetail_6.jpg"),
      img7: require("../../assets/images/picDetail_7.jpg"),
      img8: require("../../assets/images/picDetail_8.jpg"),
      img9: require("../../assets/images/picDetail_9.jpg"),
      img10: require("../../assets/images/picDetail_10.jpg"),
      img11: require("../../assets/images/iconCart.jpg"),
    };
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
footer {
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  background-color: #fff;
  border: 1px solid #ebebeb;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
}
footer a {
  display: block;
  text-align: center;
  margin-top: 0.22rem;
}
footer a img {
  width: 0.57rem;
  height: 0.57rem;
}
footer a P {
  font: 0.2rem/0.32rem "微软雅黑";
  color: #808080;
  margin-bottom: 0.08rem;
}
footer .active p {
  color: #ff5a05;
}
body {
  background-color: #f1f1f1;
}
.flexbet {
  display: flex;
  justify-content: space-between;
}
header {
  display: flex;
  justify-content: space-between;
  height: 0.85rem;
  background-color: #f26b11;
  align-items: center;
  padding: 0.43rem 0.29rem 0;
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
.banner a {
  display: block;
}
.banner a img {
  display: block;
  width: 100%;
  height: auto;
}
.title {
  height: 2.05rem;
  padding: 0 0.43rem 0 0.37rem;
  background-color: #fff;
  margin-bottom: 0.17rem;
}
.title h3 {
  font: 0.3rem/0.38rem "微软雅黑";
  color: #333333;
  padding-top: 0.22rem;
  padding-bottom: 0.14rem;
}
.title p {
  display: flex;
  align-items: center;
  height: 0.53rem;
}
.title p span {
  font: 0.3rem "微软雅黑";
  color: #e3393a;
}
.title p i {
  font: 0.22rem "微软雅黑";
  color: #888888;
  margin-left: 0.18rem;
}
.buy {
  background-color: #fff;
  height: 3.98rem;
  margin-bottom: 0.21rem;
}
.buy div:first-child {
  height: 0.98rem;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
}
.buy div:first-child span {
  font: 0.26rem "微软雅黑";
  color: #454545;
  margin-left: 0.23rem;
}
.buy div:first-child a {
  display: inline-block;
  width: 0.64rem;
  height: 0.36rem;
  border: 1px solid #b0281a;
  text-align: center;
  font: 0.2rem/0.36rem "微软雅黑";
  color: #b0281a;
  border-radius: 0.04rem;
}
.buy div:first-child i {
  font: 0.24rem "微软雅黑";
  color: #454545;
  margin-left: 0.15rem;
}
.buy div:first-child img {
  width: 0.25rem;
  height: 0.15rem;
  position: absolute;
  right: 0.21rem;
}
.buy div:nth-child(2) {
  height: 1.08rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}
.buy div:nth-child(2) span {
  font: 0.26rem "微软雅黑";
  color: #454545;
  margin-left: 0.23rem;
}
.buy div:nth-child(2) .co {
  text-align: center;
  width: 2.1rem;
  height: 0.57rem;
  border: 1px solid #505050;
  margin-right: 0.3rem;
  border-radius: 0.04rem;
}
.buy div:nth-child(2) .co a {
  display: inline-block;
  font: 0.28rem/0.57rem Arial;
  color: #505050;
}
.buy div:nth-child(2) .co a:nth-of-type(1) {
  width: 0.62rem;
  height: 0.57rem;
  border-right: 1px solid #505050;
  border-radius: 0;
}
.buy div:nth-child(2) .co a:nth-of-type(2) {
  width: 0.67rem;
  height: 0.57rem;
  border-left: 1px solid #505050;
  border-radius: 0;
}
.buy div:nth-child(2) .co input {
  width: 0.79rem;
  height: 0.57rem;
  text-align: center;
  font: 0.2rem Arial;
}
.buy div:nth-child(3) {
  height: 0.8rem;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}
.buy div:nth-child(3) span {
  font: 0.26rem "微软雅黑";
  color: #454545;
  margin-left: 0.23rem;
}
.buy div:nth-child(3) img {
  width: 0.25rem;
  height: 0.15rem;
  position: absolute;
  right: 0.21rem;
}
.buy div:last-child {
  height: 0.59rem;
  display: flex;
  align-items: center;
}
.buy div:last-child span {
  font: 0.24rem "微软雅黑";
  color: #b5b5b5;
  margin-left: 0.23rem;
}
.buy div:last-child a {
  display: inline-block;
  display: flex;
  align-items: center;
  text-align: center;
  font: 0.28rem "微软雅黑";
  color: #fff;
  border-radius: 0.04rem;
}
.buy div:last-child .a1 {
  padding-left: 0.53rem;
  width: 0.97rem;
  height: 0.59rem;
  background-color: #e43a3d;
  margin-left: 0.7rem;
}
.buy div:last-child .a2 {
  padding-left: 0.36rem;
  width: 0.81rem;
  height: 0.59rem;
  background-color: #e1e1e3;
  margin-left: 0.15rem;
}
.det {
  height: 24.79rem;
  background-color: #fff;
  margin-bottom: 0.3rem;
}
.det h3 {
  font: 0.26rem/0.95rem "微软雅黑";
  color: #454545;
  margin-left: 0.23rem;
  padding-bottom: 0.05rem;
}
.det img {
  width: 100%;
  height: auto;
}
.evaluate {
  height: 5.64rem;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 1.13rem;
}
.evaluate h3 {
  height: 0.93rem;
  border-bottom: 1px solid #f1f1f1;
  font: 0.26rem/0.93rem "微软雅黑";
  color: #454545;
  padding-left: 0.23rem;
}
.evaluate p:nth-of-type(1) {
  font: 0.26rem/0.52rem Arial;
  color: #656565;
  margin-top: 0.1rem;
  padding-left: 0.23rem;
}
.evaluate p:nth-of-type(2) {
  font: 0.26rem/0.61rem "微软雅黑";
  color: #454545;
  padding-left: 0.23rem;
}
.evaluate p:nth-of-type(3) {
  font: 0.26rem/0.77rem Arial;
  color: #999999;
  padding-left: 0.23rem;
  border-bottom: 1px solid #f1f1f1;
  padding: top 0.08rem;
}
.evaluate p:nth-of-type(4) {
  display: flex;
  justify-content: space-between;
}
.evaluate p:nth-of-type(4) span {
  font: 0.26rem/0.91rem Arial;
  color: #999999;
  padding-left: 0.23rem;
}
.evaluate p:nth-of-type(4) a span {
  font: 0.26rem/0.91rem Arial;
  color: #999999;
  padding-right: 0.28rem;
}
.evaluate .eva-pic {
  width: 5.08rem;
  display: flex;
  justify-content: space-between;
  margin-left: 0.31rem;
  margin-top: 0.1rem;
}
.evaluate .eva-pic img {
  width: 1.54rem;
  height: 1.51rem;
}
footer {
  padding: 0;
  height: 1.13rem;
  background-color: #fff;
  display: flex;
  position: fixed;
  right: 0;
  bottom: 0;
}
footer a {
  margin: 0;
  display: block;
  text-align: center;
}
footer a:nth-of-type(1) {
  width: 1.72rem;
  height: 1.13rem;
  position: relative;
}
footer a:nth-of-type(1) img {
  padding-top: 0.3rem;
  width: 0.43rem;
  height: 0.37rem;
}
footer a:nth-of-type(1) p {
  font: 0.18rem/0.43rem "微软雅黑";
  color: #868686;
}
footer a:nth-of-type(1) i {
  display: block;
  width: 0.24rem;
  height: 0.24rem;
  background-color: #e5383a;
  color: #fff;
  position: absolute;
  right: 0.6rem;
  top: 0.2rem;
  font: 0.19rem Aarial;
  border-radius: 50%;
}
footer a:nth-of-type(2) {
  flex: 1;
  height: 1.13rem;
  font: 0.3rem/1.13rem "微软雅黑";
  color: #fff;
  background-color: #f26b11;
}
footer a:nth-of-type(3) {
  flex: 1;
  height: 1.13rem;
  font: 0.3rem/1.13rem "微软雅黑";
  color: #fff;
  border-left: 1px solid #f38456;
  background-color: #e43a3d;
}
</style>
