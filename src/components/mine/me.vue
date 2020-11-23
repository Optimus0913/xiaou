<template>
  <div>
    <!--header-->
    <header>
      <a href="javascript:;" class="logo" @click="$router.go(-1)">
        <img :src="img" />
      </a>
      <h3>我的订单</h3>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!--title-->
    <div class="title">
      <a href="#"></a>
      <a href="#">
        <p>悠朔</p>
        <span>V1</span>
      </a>
      <a href="#">每日签到</a>
    </div>
    <!--nav-->
    <ul class="nav">
      <li>
        <a href="#"
          ><img :src="img1" />
          <p>全部订单</p>
        </a>
      </li>
      <li>
        <a href="#"
          ><img :src="img2" />
          <p>待付款</p>
        </a>
      </li>

      <li>
        <a href="#"
          ><img :src="img3" />
          <p>待收货</p>
        </a>
      </li>
    </ul>
    <!--article-->
    <ul class="article">
      <li>
        <a href="#">
          <img :src="img4" />
          <span>地址管理</span>
          <img :src="img9" />
        </a>
      </li>
      <li>
        <a href="#">
          <img :src="img5" />
          <span>我的钱包</span>
          <span>200余额</span>
          <img :src="img9" />
        </a>
      </li>
      <li>
        <a href="#">
          <img :src="img6" />
          <span>我的优惠券</span>
          <img :src="img9" />
        </a>
      </li>
      <li>
        <a href="#">
          <img :src="img7" />
          <span>我的二维码</span>
          <img :src="img9" />
        </a>
      </li>
      <li>
        <a href="#">
          <img :src="img8" />
          <span>我的小伙伴</span>
          <img :src="img9" />
        </a>
      </li>
    </ul>
    <foot></foot>
  </div>
</template>

<script>
import foot from "@/common/foot";
export default {
  data() {
    return {
      img: require("../../assets/images/arrowLeft (2).jpg"),
      img1: require("../../assets/images/iconMine_1.jpg"),
      img2: require("../../assets/images/iconMine_2.jpg"),
      img3: require("../../assets/images/iconMine_3.jpg"),
      img4: require("../../assets/images/iconMine_4.jpg"),
      img5: require("../../assets/images/iconMine_5.jpg"),
      img6: require("../../assets/images/iconMine_6.jpg"),
      img7: require("../../assets/images/iconMine_7.jpg"),
      img8: require("../../assets/images/iconMine_8.jpg"),
      img9: require("../../assets/images/arrowRight.jpg"),
    };
  },
  components: {
    foot,
  },
};
</script>

<style lang="" scoped>
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}

.flexbet {
  display: flex;
  justify-content: space-between;
}

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

.title {
  height: 2.06rem;
  background-color: #f26b11;
  display: flex;
  align-items: center;
  position: relative;
}

.title a {
  display: inline-block;
}

.title a:first-child {
  width: 1.55rem;
  height: 1.55rem;
  border-radius: 50%;
  border: 5px solid #fffffd;
  margin-left: 0.29rem;
  background: url(../../assets/images/mine.png) no-repeat center;
  background-color: #822e02;
  background-size: 1.41rem;
}

.title a:nth-child(2) {
  width: 0.7rem;
  height: 0.96rem;
  margin-left: 0.25rem;
}

.title a:nth-child(2) p {
  font: 0.3rem/0.52rem "微软雅黑";
  color: #fffef1;
}

.title a:nth-child(2) span {
  font: italic 0.3rem/0.44rem "微软雅黑";
  color: #1a1d14;
}

.title a:last-child {
  width: 1.59rem;
  height: 0.71rem;
  background-color: #fff;
  font: 0.26rem/0.71rem "微软雅黑";
  color: #ff7425;
  text-align: center;
  border-radius: 0.04rem;
  position: absolute;
  right: 0.38rem;
  bottom: 0.61rem;
}

.nav {
  height: 1.42rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.65rem;
  margin-bottom: 0.21rem;
}

.nav li {
  text-align: center;
  padding-top: 0.35rem;
}

.nav li a img {
  width: 0.32rem;
  height: 0.32rem;
  margin-bottom: 0.1rem;
}

.nav li a p {
  font: 0.24rem/0.41rem "微软雅黑";
  color: #696969;
}

.article {
  height: 7.17rem;
  background-color: #fff;
  margin-bottom: 1.2rem;
}

.article li {
  border-bottom: 1px solid #d9d9d9;
  position: relative;
}

.article li a {
  display: flex;
  align-items: center;
}

.article li a img:first-child {
  width: 0.45rem;
  height: 0.38rem;
  margin-left: 0.08rem;
}

.article li a img:last-child {
  width: 0.14rem;
  height: 0.24rem;
  position: absolute;
  right: 0.3rem;
}

.article li a span {
  font: 0.26rem/1.11rem "微软雅黑";
  color: #666;
  margin-left: 0.26rem;
}

.article li:nth-child(2) span:nth-child(3) {
  font: 0.24rem "微软雅黑";
  color: #eb7012;
  position: absolute;
  right: 0.68rem;
}
</style>
