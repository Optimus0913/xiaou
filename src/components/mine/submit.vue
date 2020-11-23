<template>
  <div>
    <!--header-->
    <header>
      <a href="#" class="logo" @click="$router.go(-1)">
        <img :src="img" />
      </a>
      <h3>登录</h3>
      <p class="subm">
        <router-link to="/register"
          ><a href="javascript:;">注册</a></router-link
        >
      </p>
    </header>
    <div class="content">
      <div>
        <p>手机号：</p>
        <input type="text" class="check" v-model="msglist.phone" />
      </div>
      <div>
        <p>密<span>我</span>码：</p>
        <input type="text" class="check" v-model="msglist.psw" />
      </div>
      <router-link to="/me"
        ><a href="javascript:;" class="next">登录</a></router-link
      >
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
      msglist: {
        phone: "",
        psw: "",
      },
    };
  },
  components: {
    foot,
  },
  //   methods: {
  //     sub() {
  //       if (
  //         this.msglist.phone ==
  //           JSON.parse(localStorage.getItem("userInfo")).phone &&
  //         this.msglist.psw == JSON.parse(localStorage.getItem("userInfo")).psw
  //       ) {
  //         location.href = "index.html";
  //       } else if (
  //         this.msglist.phone !==
  //         JSON.parse(localStorage.getItem("userInfo")).phone
  //       ) {
  //         alert("用户名不存在或者错误");
  //       } else if (
  //         this.msglist.psw !== JSON.parse(localStorage.getItem("userInfo")).psw
  //       ) {
  //         alert("密码错误");
  //       }
  //     },
  //   },
};
</script>

<style lang="" scoped>
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

header .subm a {
  font: 0.35rem/0.85rem "微软雅黑";
  color: #fffffd;
}

.content {
  background-color: #fff;
  height: 10rem;
}

.content div {
  border-bottom: 1px solid #000;
  padding-bottom: 0.2rem;
  width: 5.5rem;
  margin-left: 1rem;
  margin-bottom: 0.3rem;
}

.content div:nth-child(1) {
  padding-top: 1rem;
}

.content .new {
  font: 0.24rem "微软雅黑";
}

.content p {
  display: inline-block;
  font: 0.24rem/0.5rem "微软雅黑";
  color: #000;
}

.content p > span {
  visibility: hidden;
}

.content .check {
  width: 50%;
  height: 0.5rem;
  font: 0.28rem "微软雅黑";
}

.content .next {
  border-radius: 0.1rem;
  display: block;
  width: 5.5rem;
  height: 0.8rem;
  margin-left: 1rem;
  background-color: rgb(253, 152, 0);
  text-align: center;
  font: 0.32rem/0.8rem "微软雅黑";
  color: #fff;
}
</style>
