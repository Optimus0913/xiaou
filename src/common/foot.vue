<template>
  <div>
    <footer>
      <router-link to="/home" active-class="active" tag="a">
        <!-- <img :src="img1" /> -->
        <span class="iconfont icon-shouye"></span>
        首页
      </router-link>
      <router-link to="/cart" active-class="active" tag="a">
        <!-- <img :src="img2" /> -->
        <span class="iconfont icon-gouwuche"></span>
        购物车
      </router-link>
      <router-link to="/mine" active-class="active" tag="a">
        <!-- <img :src="img3" /> -->
        <span class="iconfont icon-My"></span>
        我的
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // img1: require("../assets/images/iconIndex2.jpg"),
      // img2: require("../assets/images/iconCart.jpg"),
      // img3: require("../assets/images/iconMine.jpg"),
    };
  },
};
</script>

<style lang="!" scoped>
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
  margin-top: 0.25rem;
  padding-bottom: 0.1rem;
  font: 0.2rem/0.32rem "微软雅黑";
  color: #808080;
}

footer span {
  display: block;
  margin-top: 0.1rem;
  width: 0.57rem;
  height: 0.57rem;
  font-size: 0.53rem;
  color: #808080;
  /* color: #ff5a05; */
}

/* footer a P {
  font: 0.2rem/0.32rem "微软雅黑";
  color: #808080;
  margin-bottom: 0.08rem;
} */
.active {
  color: #ff5a05 !important;
}
.active span {
  color: #ff5a05 !important;
}
/* footer .active p {
  color: #ff5a05;
} */
</style>
