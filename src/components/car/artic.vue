<template>
  <div>
    <!--article-->
    <ul class="article">
      <li
        v-for="(item, index) in list"
        :class="item.isshow ? 'articlex' : ''"
        @touchstart="start($event, index)"
        @touchmove="move($event, index)"
        :key="item.id"
      >
        <input
          type="checkbox"
          class="icon"
          v-model="item.val1"
          @change="select"
        />
        <img :src="item.img" />
        <div class="con">
          <h3 v-text="item.name"></h3>
          <p>规格：<span v-text="item.size"></span></p>
          <p>&yen;{{ item.count }}</p>
        </div>
        <div class="co">
          <a href="javascript:;" @click="sub(index)">-</a>
          <input type="text" v-model="item.num" />
          <a href="javascript:;" @click="add(index)">+</a>
        </div>
        <div class="del" @click="del(index)">删除</div>
      </li>
    </ul>
    <!--结算-->
    <div class="jie">
      <div class="quan">
        <input type="checkbox" class="ico" v-model="val" @change="Allselect" />
        <label> 全选 </label>
      </div>
      <div class="zong">
        <p>
          总计:<span>{{ Allsum }}</span>
        </p>
        <p>不含运费，已优惠&yen;0.00</p>
      </div>
      <!-- <a href="./sure.html" class="suan"> 去结算({{ Countsum }}件) </a> -->
      <router-link to="/sure" tag="a" class="suan">
        去结算({{ Countsum }}件)
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startx: 0,
      val: "",
      list: [
        {
          id: 1,
          num: 1,
          img: require("../../assets/images/shop_4.jpg"),
          name: "欧莱雅面霜",
          size: "50g",
          count: "123.00",
          val1: "",
          isshow: false,
        },
        {
          id: 2,
          num: 1,
          img: require("../../assets/images/shop_4.jpg"),
          name: "欧莱雅面霜",
          size: "50g",
          count: "123.00",
          val1: "",
          isshow: false,
        },
        {
          id: 3,
          num: 1,
          img: require("../../assets/images/shop_4.jpg"),
          name: "欧莱雅面霜",
          size: "50g",
          count: "123.00",
          val1: "",
          isshow: false,
        },
        {
          id: 4,
          num: 1,
          img: require("../../assets/images/shop_4.jpg"),
          name: "欧莱雅面霜",
          size: "50g",
          count: "123.00",
          val1: "",
          isshow: false,
        },
      ],
    };
  },
  //计算总价
  computed: {
    Allsum() {
      let sum = 0;
      this.list.map((item, i) => {
        if (item.val1) {
          sum += item.num * item.count;
        }
      });
      return sum.toFixed(2);
    },
    Countsum() {
      let sum1 = 0;
      this.list.map((item) => {
        if (item.val1) {
          sum1 += item.num;
        }
      });
      return sum1;
    },
  },
  methods: {
    //商品添加
    add(index) {
      this.list[index].num++;
    },
    //商品减少
    sub(index) {
      if (this.list[index].num <= 1) {
        return;
      }
      this.list[index].num--;
    },
    // 全选控制单选
    Allselect() {
      this.list.map((item) => (item.val1 = this.val));
    },
    // 单选控制全选
    select() {
      // console.log(this.list.every((item) => item.val1));
      this.val = this.list.every((item) => item.val1);
    },
    //点击
    start(e) {
      this.startx = e.changedTouches[0].clientX;
    },
    //滑动
    move(e, idx) {
      let moveX = e.changedTouches[0].clientX;
      let moveX1 = moveX - this.startx;
      if (moveX1 < -40) {
        this.list[idx].isshow = true;
      } else if (moveX1 >= 0) {
        this.list[idx].isshow = false;
      } else {
        this.list[idx].isshow = false;
      }
      // console.log(this.startx);
      // console.log(moveX1);
    },
    //删除
    del(i) {
      this.list.splice(i, 1);
    },
  },
};
</script>

<style lang="" scoped>
.article {
  height: 9.44rem;
  background-color: #fff;
  overflow: hidden;
}

.article li {
  padding: 0 0.22rem 0.3rem;
  width: calc(8.26rem);
  height: 1.72rem;
  display: flex;
  position: relative;
}

.article li img {
  width: 1.35rem;
  height: 1.72rem;
  margin-left: 0.63rem;
}

.article li .con {
  flex: 1;
  padding-left: 0.18rem;
}

.article li .con h3 {
  font: 0.26rem/0.56rem "微软雅黑";
  color: #333333;
}

.article li .con p:nth-of-type(1) {
  height: 0.54rem;
  display: flex;
  align-items: center;
  font: 0.23rem "微软雅黑";
  color: #686868;
}

.article li .con p:last-child {
  font: 0.32rem/0.41rem Arial;
  color: #e43a3d;
}

.article li .con p span {
  font: 0.24rem Arial;
  color: #686868;
}

.article li .co {
  text-align: center;
  width: 2.1rem;
  height: 0.57rem;
  border: 1px solid #505050;
  border-radius: 0.04rem;
  position: absolute;
  right: 1.73rem;
  bottom: 0.54rem;
  display: flex;
}

.article li .co a {
  display: inline-block;
  font: 0.28rem/0.57rem Arial;
  color: #505050;
}

.article li .co a:nth-of-type(1) {
  flex: 1;
  height: 0.57rem;
  border-right: 1px solid #505050;
}

.article li .co a:nth-of-type(2) {
  flex: 1;
  height: 0.57rem;
  border-left: 1px solid #505050;
}

.article li .co input {
  width: 0.79rem;
  height: 0.57rem;
  text-align: center;
  font: 0.2rem Arial;
}

.article li .del {
  width: 0.98rem;
  height: 1.72rem;
  background-color: #e43a3d;
  text-align: center;
  font: 0.24rem/1.72rem "微软雅黑";
  color: #ffffff;
}

.article li:first-child {
  padding-top: 0.26rem;
}

.article li:first-child .icon {
  display: inline-block;
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
  border: 0.02rem solid #b0281c;
  background: url(../../assets/images/selectCart.jpg) no-repeat center;
  margin-top: 0.5rem;
}

.articlex {
  transform: translateX(-1.28rem);
}

.article li:nth-of-type(2) .icon,
.article li:nth-of-type(3) .icon,
.article li:nth-of-type(4) .icon {
  display: inline-block;
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
  border: 0.02rem solid #cdcdcd;
  margin-top: 0.5rem;
}
.jie {
  width: 100%;
  height: 1.14rem;
  display: flex;
  margin-bottom: 1.2rem;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  position: fixed;
  right: 0;
  bottom: 0;
}

.jie .quan {
  width: 1.86rem;
  display: flex;
  align-items: center;
  padding-left: 0.22rem;
}

.jie .quan .ico {
  display: inline-block;
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
  border: 0.02rem solid #b0281c;
  background: url(../../assets/images/selectCart.jpg) no-repeat center;
}

.jie .quan label {
  font: 0.24rem "微软雅黑";
  color: #666666;
  margin-left: 0.15rem;
}

.jie .zong {
  width: 2.96rem;
}

.jie .zong p {
  font: 0.3rem/0.46rem "微软雅黑";
}

.jie .zong p:nth-of-type(1) {
  margin-top: 0.25rem;
  margin-left: 0.73rem;
  color: #333333;
}

.jie .zong p:nth-of-type(1) span {
  color: #e5383c;
  margin-left: 0.2rem;
}

.jie .zong p:nth-of-type(2) {
  text-align: center;
  font: 0.2rem/0.36rem "微软雅黑";
  color: #a3a3a3;
}

.jie .suan {
  display: block;
  text-align: center;
  flex: 1;
  background-color: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #ffffff;
}
</style>
