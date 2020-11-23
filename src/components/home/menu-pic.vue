<template>
  <div>
    <!--menu-pic-->
    <ul class="menu-pic">
      <li>
        <a href="javascript:;"
          ><img :src="img1" />
          <p>限时抢购</p>
        </a>
      </li>
      <li>
        <a href="javascript:;"
          ><img :src="img2" />
          <p>积分商城</p>
        </a>
      </li>
      <li>
        <a href="javascript:;"
          ><img :src="img3" />
          <p>联系我们</p>
        </a>
      </li>
      <li>
        <router-link to="/classification"
          ><a href="javascript:;"
            ><img :src="img4" />
            <p>商品分类</p>
          </a></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: require("../../assets/images/indexicon1.jpg"),
      img2: require("../../assets/images/indexicon2.jpg"),
      img3: require("../../assets/images/indexicon3.jpg"),
      img4: require("../../assets/images/indexicon4.jpg"),
    };
  },
};
</script>

<style lang="" scoped>
.menu-pic {
  display: flex;
  justify-content: space-around;
  height: 1.79rem;
  background-color: #fff;
  padding-top: 0.31rem;
  align-items: center;
}

.menu-pic li {
  text-align: center;
}

.menu-pic li a img {
  width: 0.64rem;
  height: 0.62rem;
}

.menu-pic li a P {
  font: 0.28rem/0.68rem "微软雅黑";
  color: #666666;
}
</style>
