<template>
  <div>
    <!--header-->
    <header>
      <a href="#" class="logo" @click="$router.go(-1)">
        <img :src="img" />
      </a>
      <h3>购物车</h3>
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../assets/images/arrowLeft (2).jpg"),
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
</style>
