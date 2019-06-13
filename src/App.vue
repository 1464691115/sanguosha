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
              <p class="underline"></p>
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
        <div class="con-mid">
          <div class="kapai">
            <div class="bd">
              <div
                class="general-tab gen-first"
                v-for="(item,index) in kBaoClassList"
                :class="{'opacity':kBaoClassIndex!=index+1}"
              >
                <div class="general-info">
                  <h4>
                    <span>{{item.name}}</span>
                  </h4>
                  <p>{{item.text}}</p>
                </div>
                <div class="general-img">
                  <img :src="item.imgUrl" alt>
                </div>
              </div>
            </div>
            <ul class="hd">
              <li
                v-for="item in 5"
                :class="['gen'+item,{'genOn':kBaoClassIndex==item}]"
                @click="kBaoClassIndex=item"
              ></li>
            </ul>
          </div>
        </div>
        <div class="con-right">
          <ul class="games">
            <li v-for="item in 4">
              <a
                @mousemove="gameHover=item"
                @mouseout="gameHover=-1"
                :class="['gameBack',{'gameTran':gameHover==item}]"
              >
                <em :class="'user-icon user-icon_game'+item"></em>
                <i :class="{'gameIXuanz':gameHover==item}"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="contain">
        <div class="con-left">
          <div class="quick">
            <h3 class="topic">
              <em class="user-icon user-icon_quick"></em>
            </h3>
            <ul class="bars">
              <li v-for="item in 8" @mouseover="barHover=item" @mouseout="barHover=-1">
                <a href>
                  <em :class="'user-icon user-icon_bar'+item"></em>
                  <i :class="{'user-icon_bar_hover':barHover==item}"></i>
                </a>
              </li>
            </ul>
            <div class="code">
              <img src="../src/assets/image/code.jpg" alt>
            </div>
          </div>
        </div>
        <div class="con-info">
          <div class="community">
            <div class="sq-top">
              <span class="user-icon user-icon_cnity"></span>
              <p class="underline"></p>
            </div>
            <div class="sq-text">
              <ul class="sqList">
                <li
                  v-for="(item,index) in sqList"
                  @mouseover="sqHover=index"
                  @mouseout="sqHover=-1"
                >
                  <a href>
                    <p :class="{'sqHover':sqHover==index}">{{item}}</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sq-img">
              <a href>
                <img src="../src/assets/image/shequ.jpg" alt="社区下方banner">
              </a>
            </div>
          </div>
          <div class="district">
            <div class="tr-top">
              <span class="user-icon user-icon_tr"></span>
              <p class="underline"></p>
            </div>
            <div class="tr-nav">
              <ul class="tr-nav-z">
                <li v-for="(item,index) in trList" @click="trImageClick(index)">
                  <a href="javascript:">
                    <span :class="{'navActive':trClick==index}">{{item}}</span>
                    <em v-if="index<3"></em>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tr-imgTab">
              <ul class="imgList" v-for="(trimgList,i) in trHHImgList">
                <li v-for="(item,index) in trimgList">
                  <a href>
                    <div class="Img">
                      <img :src="item.imgUrl" alt>
                    </div>
                    <div class="back"></div>
                    <p>{{item.text}}</p>
                    <i class="user-icon user-icon_hh"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="video">
            <div class="video-top">
              <i class="user-icon user-icon_voTop"></i>
              <p class="underline"></p>
            </div>
            <div class="video-nav">
              <ul class="video-nav-z">
                <li v-for="(item,index) in videoList" @click="videImageClick(index)">
                  <a href="javascript:">
                    <span :class="{'navActive':videoClick==index}">{{item}}</span>
                    <em v-if="index<2"></em>
                  </a>
                </li>
              </ul>
            </div>
            <div class="video-imgTab">
              <ul class="imgList" v-for="(videimgList,i) in videImgList">
                <li v-for="(item,index) in videimgList">
                  <a href>
                    <div class="Img">
                      <img :src="item.imgUrl" alt>
                    </div>
                    <div class="back" v-if="index!=0"></div>
                    <p>{{item.text}}</p>
                    <i class="user-icon user-icon_play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="contain">
        <div class="con-info strategy">
          <ul class="syTab">
            <li>
              <a href class="sy-left">
                <em class="gonglue1"></em>
                <i></i>
              </a>
            </li>
            <li>
              <div class="gongLue">
                <div class="sq-top">
                  <span class="user-icon user-icon_gongLue"></span>
                  <p class="underline"></p>
                </div>
                <div class="sq-text">
                  <ul class="sqList">
                    <li v-for="(item,index) in footerList">
                      <a href>
                        <p>{{item}}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li v-for="item in 4">
              <a href class="sy-left">
                <em :class="'gong'+(item+1)"></em>
                <i></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import Footer from "./components/bottom";
import Logo from "./components/logo";
import Event from "../src/js/event.js";
import ident1 from "../src/assets/image/ident1.jpg";
import ident2 from "../src/assets/image/ident2.jpg";
import ident3 from "../src/assets/image/ident3.jpg";
import ident4 from "../src/assets/image/ident4.jpg";

//同人专区的img
import general1 from "../src/assets/image/general1.png";
import general2 from "../src/assets/image/general2.png";
import general3 from "../src/assets/image/general3.png";
import general4 from "../src/assets/image/general4.png";
import general5 from "../src/assets/image/general5.png";
import shouhui1 from "../src/assets/image/shouhui1.png";
import shouhui2 from "../src/assets/image/shouhui2.png";
import shouhui3 from "../src/assets/image/shouhui3.png";
import shouhui4 from "../src/assets/image/shouhui4.png";
import shouhui5 from "../src/assets/image/shouhui5.png";
import shouhui6 from "../src/assets/image/shouhui6.png";
import xiaoshuo1 from "../src/assets/image/xiaoshuo1.png";
import xiaoshuo2 from "../src/assets/image/xiaoshuo2.png";
import xiaoshuo3 from "../src/assets/image/xiaoshuo3.png";
import xiaoshuo4 from "../src/assets/image/xiaoshuo4.png";
import xiaoshuo5 from "../src/assets/image/xiaoshuo5.png";
import xiaoshuo6 from "../src/assets/image/xiaoshuo6.png";
import COS1 from "../src/assets/image/COS1.jpg";
import COS2 from "../src/assets/image/COS2.jpg";
import COS3 from "../src/assets/image/COS3.jpg";
import COS4 from "../src/assets/image/COS4.jpg";
import COS5 from "../src/assets/image/COS5.jpg";
import COS6 from "../src/assets/image/COS6.jpg";
import wanjia1 from "../src/assets/image/wanjia1.png";
import wanjia2 from "../src/assets/image/wanjia2.png";
import wanjia3 from "../src/assets/image/wanjia3.png";
import wanjia4 from "../src/assets/image/wanjia4.png";
import wanjia5 from "../src/assets/image/wanjia5.png";
import wanjia6 from "../src/assets/image/wanjia6.png";

//视频中心的img
import gonglue1 from "../src/assets/image/gonglue1.jpg";
import gonglue2 from "../src/assets/image/gonglue2.jpg";
import gonglue3 from "../src/assets/image/gonglue3.jpg";
import gonglue4 from "../src/assets/image/gonglue4.jpg";
import gonglue5 from "../src/assets/image/gonglue5.jpg";
import gonglue6 from "../src/assets/image/gonglue6.jpg";
import gonglue7 from "../src/assets/image/gonglue7.jpg";
import videotr1 from "../src/assets/image/videotr1.jpg";
import videotr2 from "../src/assets/image/videotr2.png";
import videotr3 from "../src/assets/image/videotr3.jpg";
import videotr4 from "../src/assets/image/videotr4.jpg";
import videotr5 from "../src/assets/image/videotr5.jpg";
import videotr6 from "../src/assets/image/videotr6.jpg";
import videotr7 from "../src/assets/image/videotr7.jpg";
import saishi1 from "../src/assets/image/saishi1.jpg";
import saishi2 from "../src/assets/image/saishi2.jpg";
import saishi3 from "../src/assets/image/saishi3.jpg";
import saishi4 from "../src/assets/image/saishi4.jpg";
import saishi5 from "../src/assets/image/saishi5.jpg";
import saishi6 from "../src/assets/image/saishi6.jpg";
import saishi7 from "../src/assets/image/saishi7.jpg";

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
      // 新手礼包Hover图标上移
      LinkIconTop: 0,
      // 卡包分类
      kBaoClassIndex: 1,
      kBaoClassList: [
        {
          name: "标准版武将",
          text:
            "三国杀经典武将包，包含魏、蜀、吴、群四方势力，共26名武将。更多武将攻略请点击右上角更多按钮查看武将资料站，或登陆游戏内查看武将详情。",
          imgUrl: general1
        },
        {
          name: "神话再临",
          text:
            "神话再临系列是三国杀的一个武将扩展包，取《孙子兵法·军争》中的“故其疾如风，其徐如林，侵掠如火，不动如山，难知如阴，动如雷震。”分为六个扩展包。",
          imgUrl: general2
        },
        {
          name: "一将成名",
          text:
            "三国杀武将设计大赛，由广大热爱桌游、热爱三国文化、热爱三国杀的动漫画手、设计人员一起设计的武将。包括一将成名2011、2012、2013、2014、2015五个扩展包。",
          imgUrl: general3
        },
        {
          name: "星火燎原",
          text:
            "三国杀十周年全新扩展包，取《三国演义》第六十九回“北斗主死，南斗主生。”其中南斗六星分别为天府星、天梁星、天机星、天同星、天相星、七杀星六个扩展包",
          imgUrl: general4
        },
        {
          name: "国战",
          text:
            "魏蜀吴群，双将配合，为国而战。分为标准包、阵包、势包共计76名武将",
          imgUrl: general5
        }
      ],
      gameHover: -1,
      //快捷导航
      barHover: -1,
      //社区专栏
      sqList: [
        "【获奖名单】三国杀知识竞答小剧场（第89期）",
        "【获奖名单】三国杀知识竞答小剧场（第88期）",
        "【预告】如果三国杀做一套扑克，你觉得老K都是谁？Q呢？",
        "【社区活动】四方龙舟抢粽子大赛——游戏日（二）",
        "【日排名公布】四方龙舟抢粽子大赛游戏日（一）",
        "小桃来爆料啦，下一期的祈福武将是谁呢！"
      ],
      sqHover: -1,
      //同人专区
      trList: ["手绘漫画", "同人小说", "同人COS", "玩家风采"],
      trClick: 0,
      //同人专区下面的img
      trHHImgList: [
        //手绘漫画
        [
          { imgUrl: shouhui1, text: "【小杀摔倒啦】推倒土豪金，分元宝" },
          { imgUrl: shouhui2, text: "【绘画】又一只鲍三娘" },
          { imgUrl: shouhui3, text: "【绘图】矜持之花*大乔" },
          { imgUrl: shouhui4, text: "【条漫传记】周瑜，真正的东吴大都督" },
          { imgUrl: shouhui5, text: "【董白摔倒了】我们一起学猫叫" },
          { imgUrl: shouhui6, text: "【手绘】Q版24节气 霜降张飞" }
        ],
        //同人小说
        [
          { imgUrl: xiaoshuo1, text: "司马徽:半山风雨看逍遥" },
          { imgUrl: xiaoshuo2, text: "诸葛瞻:梦回季汉江湖里" },
          { imgUrl: xiaoshuo3, text: "一代雄主的爱恨两难" },
          { imgUrl: xiaoshuo4, text: "从广陵绝响看魏晋风度" },
          { imgUrl: xiaoshuo5, text: "曹魏五谋臣之算无遗策智贾诩" },
          { imgUrl: xiaoshuo6, text: "万紫千红总是春" }
        ],
        //同人Cos
        [
          { imgUrl: COS1, text: "郭嘉 · 天生郭奉孝，豪杰冠群英" },
          { imgUrl: COS2, text: "陆逊 · 三分自是多英俊，又显江南陆逊高" },
          { imgUrl: COS3, text: "小乔 · 东吴名将推公瑾，南国佳人说小乔" },
          { imgUrl: COS4, text: "孙尚香·谁知一女轻天下， 欲易刘郎鼎峙心" },
          { imgUrl: COS5, text: "孙策·却将江左业，分付紫髯郎 " },
          { imgUrl: COS6, text: "曹丕 · 一双眼光射寒星，两弯眉浑如刷漆" }
        ],
        //
        [
          { imgUrl: wanjia1, text: "司马徽:半山风雨看逍遥" },
          { imgUrl: wanjia2, text: "诸葛瞻:梦回季汉江湖里" },
          { imgUrl: wanjia3, text: "一代雄主的爱恨两难" },
          { imgUrl: wanjia4, text: "从广陵绝响看魏晋风度" },
          { imgUrl: wanjia5, text: "曹魏五谋臣之算无遗策智贾诩" },
          { imgUrl: wanjia6, text: "万紫千红总是春" }
        ]
      ],
      //视频中心
      videoList: ["攻略集锦", "同人创作", "赛事视频"],
      videoClick: 0,
      videImgList: [
        //攻略集锦
        [
          { imgUrl: gonglue1, text: "花式吊打 好施者们的默契" },
          { imgUrl: gonglue2, text: "循序渐进 一连到终" },
          { imgUrl: gonglue3, text: "一张牌引发的血案" },
          { imgUrl: gonglue4, text: "自书己见 大刷特刷" },
          { imgUrl: gonglue5, text: "没有忠臣的四月" },
          { imgUrl: gonglue6, text: "第五反贼" },
          { imgUrl: gonglue7, text: "智慧岂能少得了装身份？" }
        ],
        //同人创作
        [
          { imgUrl: videotr1, text: "手书：三国杀XDRRR!!" },
          {
            imgUrl: videotr2,
            text: "【司马嘉-玄亮-策瑜-丕植】建安烟云录(同人剧情歌)"
          },
          { imgUrl: videotr3, text: "《建安烟云录》(同人剧情歌)" },
          { imgUrl: videotr4, text: "左慈的神秘讲座" },
          { imgUrl: videotr5, text: "【鬼畜三国杀】水手——那个男人" },
          { imgUrl: videotr6, text: "第五反贼三国杀诗朗诵——短歌行" },
          { imgUrl: videotr7, text: "【“温馨”鬼畜】一首 三国杀 生日歌献给你" }
        ],
        //赛事视频
        [
          { imgUrl: saishi1, text: "2018SCL春季赛TOP5【第六期】" },
          { imgUrl: saishi2, text: "2018SCL春季赛TOP5【第七期】" },
          { imgUrl: saishi3, text: "三国杀百万奖金千人大赛冠军诞生" },
          { imgUrl: saishi4, text: "三国杀十周年嘉年华颜值玩家一览" },
          { imgUrl: saishi5, text: "三国杀百万奖金千人大赛选手入场" },
          { imgUrl: saishi6, text: "三国杀十周年嘉年华现场" },
          { imgUrl: saishi7, text: "三国杀十周年千人面杀全程回顾" }
        ]
      ],
      //攻略List
      footerList: [
        "[十周年][模式玩法]【国战对局思路之一】群雄逐鹿，须得刚柔并进",
        "[十周年][武将攻略]【司马徽攻略】荐杰二才明大义，称好三乡尚高德",
        "[十周年][模式玩法]【新标国战第一弹】只是嘴哥的指纹被猫女偷了而已",
        "[十周年][武将攻略]【武娘】武娘还是三娘，傻傻分不清—鲍三娘攻略",
        "[OL][模式玩法]【神之试炼】秋冬组通关技术指南",
        "[十周年][武将攻略]【鲍三娘攻略】镇南の武娘姬丶鲍三娘参上"
      ]
    };
  },
  methods: {
    // 游戏模式图片切换
    playImageSwitching: function(i) {
      let playDom = document.getElementById("play").children;
      for (let i = 0; i < playDom.length; i++) {
        const element = playDom[i];
        element.className = "opacity";
      }
      playDom[i].className = "";
    },
    //同人专区的切换
    trImageClick: function(i) {
      let trDom = $(".tr-imgTab .imgList");
      trDom.hide();
      trDom.eq(i).fadeIn(700);
      this.trClick = i;
    },
    // 视频导航切换
    videImageClick: function(i) {
      let videDom = $(".video-imgTab .imgList");
      videDom.hide();
      videDom.eq(i).fadeIn(700);
      this.videoClick = i;
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      var index = this.kBaoClassIndex;
      if (index > 4) {
        this.kBaoClassIndex = 0;
      }
      this.kBaoClassIndex++;
    }, 2000);
  }
};
</script>
<style scoped>
@import url("./assets/css/index.css");
@import url("./assets/css/reset.css");
</style>


