<template>
  <div>
    <!--adver-->
    <div class="adver">
      <a href="#"><img :src="img" alt="bar" /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../assets/images/bar.jpg"),
    };
  },
};
</script>

<style lang="" scoped>
.adver {
  margin-bottom: 0.3rem;
}

.adver a {
  display: block;
}

.adver a img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
