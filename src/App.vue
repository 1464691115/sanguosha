<template>
  <div class="warp">
    <div class="main">
      <Logo></Logo>
      <div class="contain">
        <div class="con-left">
          <div class="play">
            <a href="#">
              <img src="./assets/image/begin.gif">
            </a>
          </div>
          <div class="con-z-bottom">
            <div class="register">
              <i class="user-icon"></i>
              <a href>账号注册</a>
            </div>
            <em class="content-icon"></em>
            <div class="xinSh">
              <i class="user-icon"></i>
              <a href>新手引导</a>
            </div>
          </div>
        </div>
        <div class="con-mid">
          <div class="lun-boNav">
            <ul class="lb-image">
              <li>
                <a href>
                  <img src="./assets/image/lb-1.png" alt="小桃射箭">
                </a>
              </li>
              <li>
                <a href>
                  <img src="./assets/image/lb-2.jpg" alt="同人征集">
                </a>
              </li>
              <li>
                <a href>
                  <img src="./assets/image/lb-3.jpg" alt="精彩活动">
                </a>
              </li>
              <li>
                <a href>
                  <img src="./assets/image/lb-4.jpg" alt="全民福利">
                </a>
              </li>
              <li>
                <a href>
                  <img src="./assets/image/lb-5.png" alt="程昱上线">
                </a>
              </li>
            </ul>
          </div>
          <div class="lb-page">
            <ul id="lb-list">
              <li class="page-on">小桃射箭</li>
              <li>同人征集</li>
              <li>精彩活动</li>
              <li>全民福利</li>
              <li>程昱上线</li>
            </ul>
          </div>
        </div>
        <div class="con-right">
          <div class="c-r-top">
            <a href="#">
            </a>
          </div>
          <div class="c-r-bottom">
            <a href="#">
            </a>
          </div>
        </div>
      </div>
      <div class="contian">
        <div class="con-left">
          <div class="QRCode">
            <img src="../src/assets/image/QRcode.jpg" alt="">
          </div>
          <div class="download">
            <a href="">
              
            </a>
          </div>
        </div>
        <div class="con-mid"></div>
        <div class="con-rigth"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/bottom";
import Logo from "./components/logo";
import Event from "../src/js/event.js";
export default {
  components: { Footer, Logo },
  data() {
    return {
      list: []
    };
  },
  methods: {}
};
</script>
<style scoped>
@import url("./assets/css/index.css");
@import url("./assets/css/reset.css");
</style>


