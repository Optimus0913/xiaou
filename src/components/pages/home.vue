<template>
  <div>
    <heade></heade>
    <tnav></tnav>
    <banner></banner>
    <menu-pic></menu-pic>
    <limit></limit>
    <adver></adver>
    <find></find>
    <!-- <cno></cno> -->
    <foot></foot>
  </div>
</template>

<script>
// import "@/assets/css/index.css";
import heade from "@/components/home/heade";
import tnav from "@/components/home/tnav";
import banner from "@/components/home/banner";
import menuPic from "@/components/home/menu-pic";
import limit from "@/components/home/limit";
import adver from "@/components/home/adver";
import foot from "@/common/foot";
import find from "@/components/home/find";
// import cno from "@/components/home/cno";

export default {
  data() {
    return {};
  },
  components: {
    heade,
    tnav,
    banner,
    menuPic,
    limit,
    adver,
    find,
    // cno,
    foot,
  },
};
</script>

<style lang="" scoped>
</style>
