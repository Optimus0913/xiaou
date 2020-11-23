<template>
  <div>
    <!--header-->
    <header>
      <a href="#" class="logo" @click="$router.go(-1)">
        <img :src="img" />
      </a>
      <h3>注册</h3>
      <p class="subm">
        <router-link to="/submit">
          <a href="jacascript:;" class="goSub">登录</a></router-link
        >
      </p>
    </header>
    <div class="content">
      <div>
        <p>昵<span>我</span>称：</p>
        <input type="text" class="check" @blur="blur" v-model="msglist.name" />
      </div>
      <h2 v-show="isErr">{{ errInfo }}</h2>
      <div>
        <p>手机号：</p>
        <input
          type="text"
          class="check"
          @blur="pblur"
          v-model="msglist.phone"
        />
      </div>
      <h2 v-show="isErr1">{{ errInfo1 }}</h2>
      <div>
        <p>密<span>我</span>码：</p>
        <input type="text" class="check" @blur="mblur" v-model="msglist.psw" />
      </div>
      <h2 v-show="isErr2">{{ errInfo2 }}</h2>
      <div>
        <p>验证码：</p>
        <input type="text" class="check" />
        <span class="new" @click="send">{{ sendma }}</span>
      </div>
      <h2 v-show="isErr">{{ errInfo3 }}</h2>
      <router-link to="/submit">
        <a class="next" @click="sub">下一步</a></router-link
      >
      <div class="last">
        <input type="checkbox" v-model="msglist.isChecked" />
        <p>&nbsp;我已阅读并同意使用条款和隐私政策</p>
      </div>
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
      num: 60,
      sendma: "发送验证码",
      newma: "重新发送",
      isErr: false,
      isErr1: false,
      isErr2: false,
      isErr3: false,
      errInfo: "",
      errInfo1: "",
      errInfo2: "",
      errInfo3: "",
      msglist: {
        name: "",
        phone: "",
        psw: "",
        yan: "",
        isChecked: false,
      },
      arr: [false, false, false],
    };
  },
  components: {
    foot,
  },
  methods: {
    //发送验证码
    send() {
      let timer = setInterval(() => {
        this.num--;
        // console.log(this);
        this.sendma = this.newma + "(" + this.num + ")";
        if (this.num == 0) {
          clearInterval(timer);
          this.sendma = "发送验证码";
          this.num = 60;
        }
      }, 1000);
    },
    //用户名输入失焦事件
    blur() {
      if (this.msglist.name == "") {
        this.errInfo = "用户名不能为空";
        this.isErr = true;
        this.arr[0] = false;
      } else {
        this.isErr = false;
        this.arr[0] = true;
      }
    },
    //手机号失焦事件
    pblur() {
      let res1 = /^1\d{10}$/;
      if (res1.test(this.msglist.phone.trim())) {
        this.isErr1 = false;
        this.arr[1] = true;
      } else if (this.msglist.phone.trim() == "") {
        this.errInfo1 = "手机号不能为空";
        this.isErr1 = true;
        this.arr[1] = false;
      } else if (!res1.test(this.msglist.phone.trim())) {
        this.errInfo1 = "手机号格式不正确";
        this.isErr1 = true;
        this.arr[1] = false;
      }
      console.log(this.msglist.phone.trim());
    },
    //密码失焦事件
    mblur() {
      let res2 = /^\w{6,20}$/;
      if (res2.test(this.msglist.psw)) {
        this.isErr2 = false;
        this.arr[2] = true;
      } else if (this.msglist.psw == "") {
        this.errInfo2 = "密码不能为空";
        this.isErr2 = true;
        this.arr[2] = false;
      } else {
        this.errInfo2 = "请输入6到20位数字，字母及_组成的密码";
        this.isErr2 = true;
        this.arr[2] = false;
      }
    },
    //登录
    sub() {
      this.blur();
      this.pblur();
      this.mblur();
      let n = this.arr.every(function (item) {
        return item;
      });
      if (n) {
        if (this.msglist.isChecked == false) {
          alert("请先勾选协议");
        } else {
          //本地存储用户注册的值
          localStorage.setItem("userInfo", JSON.stringify(this.msglist));
          location.href = "submit.html";
          this.msglist.isChecked == false;
        }
      }
    },
  },
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
