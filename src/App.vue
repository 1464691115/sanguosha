<template>
  <div class="warp">
    <div class="main">
      <div class="contain">
        <div class="con-left">
          <div class="play">
            <a href="#">
              <img src="./assets/image/begin.gif">
            </a>
          </div>
          <div class="con-z-bottom">
            <div class="register v-hov-top" v-on:hover="{}">
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
            <a href="#"></a>
          </div>
          <div class="c-r-bottom">
            <a href="#"></a>
          </div>
        </div>
      </div>
      <div class="contain">
        <div class="con-left">
          <div class="QRCode">
            <img src="../src/assets/image/QRcode.jpg" alt>
          </div>
          <div class="download">
            <i class="user-icon user-icon_xz"></i>
            <em class="user-icon icon-icon_do"></em>
          </div>
        </div>
        <div class="con-mid">
          <div class="cm-z-left">
            <div class="zx-top">
              <span class="user-icon user-icon_news"></span>
              <p></p>
            </div>
            <div class="zx-bottom">
              <ul class="hd">
                <li v-for="(item,index) in news" :key="index" @click="zxtitleClick=index">
                  <a :class="{'fontActive':index == zxtitleClick}">{{item}}</a>
                  <em v-if="index < 3"></em>
                </li>
              </ul>
              <p class="zx-title">
                <a target="_blank" href>[OL]6.6-6.20 龙舟赛事争霸 粽情端午一夏</a>
              </p>
              <div class="bd">
                <div>
                  <dl v-for="(item,index) in zxList" :key="index">
                    <dd @mouseover="zxListHover = index" @mouseout="zxListHover = -1">
                      <a href>
                        <p
                          class="bd-name"
                          :class="{'fontActive': index == zxListHover}"
                        >{{item.text}}</p>
                        <p class="bd-time">{{item.time}}</p>
                      </a>
                    </dd>
                  </dl>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="cm-z-right"></div>
        </div>
        <div class="con-right">
          <div class="bd" id="play">
            <p v-for="(item,index) in playImage" :class="{'opacity':index!=0}">
              <img :src="item" alt>
            </p>
          </div>
          <ul class="hd">
            <li
              v-for="index in 4"
              :key="index"
              :class="['play'+index,{'playOn':playHover==index}]"
              @mousemove="playHover = index;playImageSwitching(index-1)"
            ></li>
          </ul>
        </div>
      </div>
      <div class="contain">
        <div class="con-left">
          <ul class="link">
            <li v-for="item in 6">
              <a href @mousemove="LinkIconTop=item" @mouseout="LinkIconTop=0">
                <i :class="['user-icon user-icon_link'+item,{'AmTop':LinkIconTop==item}]"></i>
                <em :class="'user-icon user-icon_text'+item"></em>
              </a>
            </li>
          </ul>
        </div>
        <div class="con-mid"></div>
        <div class="con-right"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/bottom";
import Logo from "./components/logo";
import Event from "../src/js/event.js";
import ident1 from "../src/assets/image/ident1.jpg";
import ident2 from "../src/assets/image/ident2.jpg";
import ident3 from "../src/assets/image/ident3.jpg";
import ident4 from "../src/assets/image/ident4.jpg";
export default {
  components: { Footer, Logo },
  data() {
    return {
      //游戏资讯导航标签
      news: ["综合", "资讯", "活动", "公告"],
      //游戏资讯内容
      zxList: [
        {
          text: "[OL][资讯]高校联赛上半年收官战  太原站烽烟即刻点燃",
          time: "6月5号"
        },
        {
          text: "[十周年][公告]6月6日5:00-9:00《三国杀十周年》停服维护公告",
          time: "6月5号"
        },
        {
          text: "[OL][活动] 6.6-6.20 龙舟赛事争霸 粽情端午一夏",
          time: "6月5号"
        },
        { text: "[OL][活动] 6.6-6.13 夺宝行动之粽情端午", time: "6月5号" },
        {
          text: "[十周年][活动] 6.6-6.13 百宝锦匣、转盘更新 端午1元秒杀",
          time: "6月5号"
        },
        { text: "[十周年][活动]活动道具相关概率公示", time: "6月5号" }
      ],
      // 游戏资讯标签栏的当前第几个li
      zxtitleClick: 0,
      // 游戏资讯列表的当前第几个li
      zxListHover: -1,
      // 游戏模式小图标
      playHover: 1,
      // 游戏模式图片
      playImage: [ident1, ident3, ident2, ident4],
      // 游戏模式图片切换
      playImageSwitching: function(i) {
        let playDom = document.getElementById("play").children;
        for (let i = 0; i < playDom.length; i++) {
          const element = playDom[i];
          element.className = "opacity";
        }
        playDom[i].className = "";
      },
      // 新手礼包Hover图标上移
      LinkIconTop: 0
    };
  },
  methods: {}
};
</script>
<style scoped>
@import url("./assets/css/index.css");
@import url("./assets/css/reset.css");
</style>


