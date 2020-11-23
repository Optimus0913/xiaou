<template>
  <div>
    <van-nav-bar :title="$route.meta.name">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    change(i) {
      this.num = i;
    },
  },
};
</script>

<style lang="" scoped>
</style>
