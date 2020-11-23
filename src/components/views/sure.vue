<template>
  <div>
    <!--header-->
    <header>
      <a href="#" class="logo" @click="$router.go(-1)">
        <img :src="img" />
      </a>
      <h3>确认订单</h3>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!--people-->
    <div class="adress">
      <p>收货人:YouSus<span>100000000</span></p>
      <div class="ad clearfix">
        <p>收货地址:</p>
        <i>北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</i>
      </div>
      <a href="#"><img :src="img2" /></a>
    </div>
    <!--article-->
    <article>
      <div class="ar-pic">
        <img :src="img1" />
        <div class="pic-mon">
          <h3>雅诗兰黛护肤霜</h3>
          <p>规格：50g</p>
        </div>
        <p class="mon"><span>&yen;</span>123.00</p>
      </div>
      <div class="ar-count">
        <p>购买数量</p>
        <div class="jia">
          <a href="#">-</a>
          <input type="text" placeholder="1" />
          <a href="#">+</a>
        </div>
      </div>
      <div class="ar-mode">
        <p>配送方式</p>
        <p>XX快递</p>
      </div>
    </article>
    <!--con-->
    <div class="cont">
      <div class="coupon">
        <p>优惠券</p>
        <p>无可用</p>
      </div>
      <div class="integral">
        <p>使用积分</p>
        <div class="use">
          <input type="text" placeholder="输入积分" />
          <a href="#">使用</a>
          <p>可用<span>50</span>积分</p>
        </div>
      </div>
    </div>
    <!--money-->
    <div class="money">
      <p>
        <span>商品金额</span>
        <span>&yen;123.00</span>
      </p>
      <p>
        <span>运费</span>
        <span>+&yen;0.00</span>
      </p>
      <p>
        <span>优惠券</span>
        <span>-&yen;0.00</span>
      </p>
      <p>
        <span>会员优惠</span>
        <span>-&yen;0.00</span>
      </p>
      <p>
        <span>积分抵扣</span>
        <span>-&yen;0.00</span>
      </p>
    </div>
    <div class="submit">
      <div class="shi">
        <p>实付金额：<span>&yen;123.00</span></p>
      </div>
      <div class="sub">
        <a href="#">提交订单</a>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from "@/common/foot";
export default {
  data() {
    return {
      img: require("../../assets/images/arrowLeft (2).jpg"),
      img1: require("../../assets/images/shop_4.jpg"),
      img2: require("../../assets/images/arrowRight.jpg"),
    };
  },
  components: {
    foot,
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
.adress {
  height: 1.5rem;
  padding: 0 0.26rem;
  background-color: #fff;
  position: relative;
}
.adress > p {
  font: 0.26rem/0.47rem "微软雅黑";
  color: #5e5e5e;
  padding-top: 0.13rem;
  margin-bottom: 0.09rem;
}
.adress > p span {
  margin-left: 3.06rem;
}
.adress .ad p {
  float: left;
  font: 0.26rem/0.29rem "微软雅黑";
  color: #5e5e5e;
}
.adress .ad i {
  float: left;
  width: 5.2rem;
  display: block;
  font: 0.26rem/0.29rem "微软雅黑";
  color: #5e5e5e;
}
.adress a {
  display: block;
  position: absolute;
  right: 0.26rem;
  bottom: 0.55rem;
}
.adress a img {
  width: 0.15rem;
  height: 0.24rem;
}
article {
  height: 3.62rem;
  padding: 0 0.26rem;
  background-color: #fff;
  margin-bottom: 0.11rem;
}
article .ar-pic {
  width: 100%;
  height: 1.23rem;
  display: flex;
  position: relative;
}
article .ar-pic img {
  padding-top: 0.2rem;
  padding-right: 0.28rem;
  width: 1.1rem;
  height: 1.23rem;
}
article .ar-pic .pic-mon {
  flex: 1;
  font: 0.26rem/0.47rem "微软雅黑";
}
article .ar-pic .pic-mon h3 {
  padding-top: 0.29rem;
  color: #6a6a6a;
}
article .ar-pic .pic-mon p {
  color: #b4b4b4;
}
article .ar-pic .mon {
  font: 0.3rem Arial;
  color: #db3736;
  position: absolute;
  right: 0.26rem;
  top: 0.35rem;
}
article .ar-pic .mon span {
  font: 0.18rem "微软雅黑";
  color: #db3736;
}
article .ar-count {
  height: 1.42rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
article .ar-count p {
  font: 0.26rem/0.47rem "微软雅黑";
  color: #696969;
}
article .ar-count .jia {
  display: flex;
  justify-content: space-between;
  width: 2.9rem;
  height: 0.65rem;
}
article .ar-count .jia a {
  display: inline-block;
  font: 0.28rem/0.63rem Arial;
  color: #505050;
  text-align: center;
  border-radius: 0.04rem;
}
article .ar-count .jia a:nth-of-type(1) {
  width: 0.73rem;
  height: 0.63rem;
  border: 1px solid #505050;
}
article .ar-count .jia a:nth-of-type(2) {
  width: 0.73rem;
  height: 0.63rem;
  border: 1px solid #505050;
}
article .ar-count .jia input {
  width: 1.17rem;
  height: 0.64rem;
  text-align: center;
  font: 0.2rem Arial;
  border: 1px solid #505050;
  border-radius: 0.04rem;
}
article .ar-mode {
  height: 0.96rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
article .ar-mode p {
  font: 0.26rem "微软雅黑";
  color: #696969;
}
.cont {
  height: 2.04rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
  padding: 0 0.26rem;
}
.cont .coupon {
  height: 1.01rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f1f1f1;
}
.cont .coupon p {
  font: 0.26rem "微软雅黑";
  color: #696969;
}
.cont .integral {
  height: 1.01rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cont .integral p {
  font: 0.26rem "微软雅黑";
  color: #696969;
}
.cont .integral .use {
  width: 3.79rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cont .integral .use input {
  width: 1.49rem;
  height: 0.7rem;
  border: 2px solid #d9d9d9;
  font: 0.24rem/0.7rem "微软雅黑";
  text-align: center;
}
.cont .integral .use input::-webkit-input-placeholder {
  color: #ececec;
}
.cont .integral .use a {
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  background-color: #f26b11;
  font: 0.26rem/0.75rem "微软雅黑";
  color: #fff;
  text-align: center;
  margin-left: 0.09rem;
}
.cont .integral .use p {
  font: 0.26rem/1.01rem "微软雅黑";
  color: #989898;
}
.cont .integral .use p span {
  color: #cf3d40;
}
.money {
  height: 2.2rem;
  padding: 0.25rem 0.26rem 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.money p {
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
}
.money p span:nth-child(1) {
  font: 0.26rem/0.44rem "微软雅黑";
  color: #696969;
}
.money p span:nth-child(2) {
  font: 0.26rem/0.44rem "微软雅黑";
  color: #df3c3d;
}
.submit {
  height: 2.44rem;
  padding: 0 0.26rem;
  background-color: #fff;
  padding-bottom: 0.15rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #f1f1f1;
}
.submit .shi {
  height: 1.32rem;
  position: relative;
}
.submit .shi p {
  position: absolute;
  right: 0.26rem;
  bottom: 0.45rem;
  font: 0.3rem "微软雅黑";
  color: #696969;
}
.submit .shi p span {
  font: 0.3rem "微软雅黑";
  color: #df3c3d;
}
.submit .sub {
  width: 100%;
  height: 1.12rem;
}
.submit .sub a {
  margin: 0 auto;
  width: 3.55rem;
  height: 1.12rem;
  background-color: #f26b11;
  text-align: center;
  display: block;
  font: 0.26rem/1.12rem "微软雅黑";
  color: #fff;
}
</style>
