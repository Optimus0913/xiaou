<template>
  <div>
    <heade></heade>
    <artic></artic>
    <foot></foot>
  </div>
</template>

<script>
import heade from "@/components/car/heade";
import foot from "@/common/foot";
import artic from "@/components/car/artic";
export default {
  data() {
    return {};
  },
  components: {
    foot,
    heade,
    artic,
  },
};
</script>

<style lang="" scoped>
</style>
