<template>
  <div>
    <header>
      <a href="#" class="logo">
        <img :src="img" alt="logo" />
      </a>
      <input class="search" type="search" placeholder="寻找商品" />
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
      img: require("../../assets/images/logo.jpg"),
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
  background-color: #fff;
  align-items: center;
  padding: 0.43rem 0.23rem 0;
  border-bottom: 1px solid #e4e4e4;
}

header img {
  width: 1.5rem;
  height: 0.29rem;
}

header .search {
  width: 3.04rem;
  height: 0.39rem;
  text-align: center;
  font: 0.18rem/0.39rem "微软雅黑";
  color: #b4b4b4;
  background-color: #eeeeee;
}
</style>
