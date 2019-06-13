<template>
  <div class="footer">
    <ul>
      <li>
        <a href="http://www.yokagames.com/">
          <img src="../assets/image/youka.png" alt="游卡桌游">
        </a>
      </li>
      <li>
        <span class="lines"></span>
      </li>
      <li>
        <img src="../assets/image/wen.png">
        <img src="../assets/image/jing.png">
        <img src="../assets/image/gong.png">
        <img src="../assets/image/youxidzbq.png">
      </li>
      <li>
        <p>
          抵制不良游戏 | 拒绝盗版游戏 | 注意自我保护 | 谨防受骗上当 | 适度游戏益脑 | 沉迷游戏伤身 | 合理安排时间 | 享受健康生活
          网络文化经营许可证 浙网文[2016]0251-121号 文网游备字[2010]C-CBG009号 游戏批准文号 科技与数字【2010】284号
          出版单位 杭州边锋网络技术有限公司 版号 新广出审【2016】775号 游戏备案号 文网游备字〔2016〕Ｍ-CSG2524号
          增值电信业务经营许可证号码 [浙B2-20160108] 浙公网安备 33010502005081号 杭州游卡网络技术有限公司 版权所有
          杭州市西溪软件园金牛座A座7楼 接待时间：周一至周五 9:00-17:00 适龄提示：6岁以上使用 家长监督
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // name: "HelloWorld",
  // data() {
  //   return {
  //     msg: "Welcome to Your Vue.js App"
  //   };
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 10px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p{
  font-size: .7em;
  text-align: center;
}
ul li:first-child {
  margin-left: 30%;
}
a {
  color: #42b983;
}
.lines {
  width: 1px;
  height: 40px;
  background: #c9c9c9;
  display: inline-block;
}
.footer {
  background: url("../assets/image/footer.jpg") no-repeat;
  padding: 150px 0 120px;
  overflow: hidden;
}
</style>
