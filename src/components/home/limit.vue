<template>
  <div>
    <!--limit-->
    <div class="limit">
      <div class="limit-l">
        <h3><img :src="img1" alt="timer" /> 限时秒杀</h3>
        <p>每天零点场&nbsp;好货秒不停</p>
        <p>
          <span>02</span>
          <span>:</span>
          <span>16</span>
          <span>:</span>
          <span>45</span>
          <span>秒杀</span>
        </p>
        <a class="li-pic" href="#"
          ><img :src="img2" />
          <div><span>&yen;</span>14.8</div>
        </a>
      </div>
      <div class="limit-r">
        <div class="limit-new">
          <div class="li-ti">
            <h3>品牌上新<span>折</span></h3>
            <p>每天九点&nbsp;抢大牌</p>
            <a href="#"><img :src="img3" /></a>
          </div>
          <div class="clo">
            <a href="#"><img :src="img4" /></a>
          </div>
        </div>
        <div class="limit-ten">
          <div class="ten-l">
            <h3>每日十件</h3>
            <p>只为你选好货</p>
            <a href="#"><img :src="img5" /></a>
          </div>
          <div class="ten-r">
            <h3>拼啊</h3>
            <p>超级好价拼团</p>
            <a href="#"><img :src="img6" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: require("../../assets/images/timer.jpg"),
      img2: require("../../assets/images/shop_5.jpg"),
      img3: require("../../assets/images/brand.jpg"),
      img4: require("../../assets/images/indexshop.jpg"),
      img5: require("../../assets/images/indexship2.jpg"),
      img6: require("../../assets/images/shop_3.jpg"),
    };
  },
};
</script>

<style lang="" scoped>
.limit {
  height: 3.77rem;
  background-color: #fff;
  margin-top: 0.3rem;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.limit .limit-l {
  width: 3.59rem;
  margin-left: 0.18rem;
  border-right: 1px solid #f0f0f0;
}

.limit .limit-l h3 {
  padding-top: 0.14rem;
  font: 0.3rem/0.37rem "微软雅黑";
  color: #ff0a5d;
  margin-left: 0.03rem;
}

.limit .limit-l h3 img {
  width: 0.33rem;
  height: 0.31rem;
}

.limit .limit-l p:nth-of-type(1) {
  font: 0.22rem/0.28rem "微软雅黑";
  color: #686868;
}

.limit .limit-l p:nth-of-type(2) {
  margin-left: 0.03rem;
  margin-top: 0.05rem;
}

.limit .limit-l p:nth-of-type(2) span {
  display: inline-block;
  margin-right: 0.04rem;
}

.limit .limit-l p:nth-of-type(2) span:nth-child(1),
.limit .limit-l p:nth-of-type(2) span:nth-child(3),
.limit .limit-l p:nth-of-type(2) span:nth-child(5) {
  width: 0.43rem;
  height: 0.43rem;
  background-color: #27272f;
  text-align: center;
  font: 0.22rem/0.43rem Arial;
  color: #fff;
  border-radius: 0.04rem;
}

.limit .limit-l p:nth-of-type(2) span:nth-child(2),
.limit .limit-l p:nth-of-type(2) span:nth-child(4) {
  font: 0.22rem "微软雅黑";
}

.limit .limit-l p:nth-of-type(2) span:nth-child(6) {
  margin-left: 0.19rem;
  width: 0.96rem;
  height: 0.4rem;
  font: bold 0.18rem/0.4rem "微软雅黑";
  color: #472d0c;
  background: url(../../assets/images/bg.jpg) no-repeat center;
  text-align: center;
}

.limit .limit-l .li-pic {
  display: block;
  margin: 0.41rem 0 0 0.3rem;
  position: relative;
}

.limit .limit-l .li-pic img {
  width: 2.36rem;
  height: 2rem;
}

.limit .limit-l .li-pic div {
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 50%;
  background-color: #ff327a;
  text-align: center;
  font: bold 0.24rem/0.84rem Arial;
  color: #fff;
  position: absolute;
  right: 0.45rem;
  bottom: 0.1rem;
}

.limit .limit-l .li-pic div span {
  font: bold 0.18rem/0.84rem Arial;
  color: #fff;
}

.limit .limit-r {
  width: 3.72rem;
}

.limit .limit-r .limit-new {
  display: flex;
  justify-content: space-between;
  height: 1.88rem;
  border-bottom: 1px solid #eeeeee;
}

.limit .limit-r .limit-new .li-ti {
  width: 1.9rem;
}

.limit .limit-r .limit-new .li-ti h3 {
  padding-top: 0.14rem;
  font: 0.3rem/0.37rem "微软雅黑";
  color: #ff0a5d;
  margin-left: 0.19rem;
}

.limit .limit-r .limit-new .li-ti h3 span {
  display: inline-block;
  width: 0.33rem;
  height: 0.22rem;
  background-color: #ff0a5d;
  font: 0.18rem/0.22rem "微软雅黑";
  color: #ffeef3;
  text-align: center;
  margin-left: 0.1rem;
  margin-top: -0.03rem;
  vertical-align: middle;
}

.limit .limit-r .limit-new .li-ti p {
  font: 0.22rem/0.28rem "微软雅黑";
  color: #686868;
  margin-left: 0.2rem;
}

.limit .limit-r .limit-new .li-ti a {
  display: block;
}

.limit .limit-r .limit-new .li-ti a img {
  width: 0.93rem;
  height: 0.32rem;
  margin-top: 0.23rem;
  margin-left: 0.2rem;
}

.limit .limit-r .limit-new .clo {
  padding-right: 20px;
  padding-top: 5px;
}

.limit .limit-r .limit-new .clo img {
  width: 1.28rem;
  height: 1.78rem;
}

.limit .limit-r .limit-ten {
  display: flex;
  justify-content: space-between;
}

.limit .limit-r .limit-ten .ten-l {
  width: 1.85rem;
  border-right: 1px solid #eeeeee;
}

.limit .limit-r .limit-ten .ten-l h3 {
  padding-top: 0.14rem;
  font: 0.3rem/0.37rem "微软雅黑";
  color: #ff0a5d;
  margin-left: 0.19rem;
}

.limit .limit-r .limit-ten .ten-l p {
  font: 0.2rem/0.28rem "微软雅黑";
  color: #686868;
  margin-left: 0.2rem;
}

.limit .limit-r .limit-ten .ten-l a {
  margin-top: 0.07rem;
  display: block;
  text-align: center;
}

.limit .limit-r .limit-ten .ten-l a img {
  width: 0.64rem;
  height: 1.02rem;
}

.limit .limit-r .limit-ten .ten-r {
  width: 1.66rem;
}

.limit .limit-r .limit-ten .ten-r h3 {
  padding-top: 0.14rem;
  font: 0.3rem/0.37rem "微软雅黑";
  color: #ff0a5d;
  margin-left: 0.19rem;
}

.limit .limit-r .limit-ten .ten-r p {
  font: 0.2rem/0.28rem "微软雅黑";
  color: #686868;
  margin-left: 0.2rem;
}

.limit .limit-r .limit-ten .ten-r a {
  margin-top: 0.07rem;
  display: block;
  text-align: center;
}

.limit .limit-r .limit-ten .ten-r a img {
  width: 1.04rem;
  height: 0.88rem;
}
</style>
