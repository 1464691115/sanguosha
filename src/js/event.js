window.onload = function () {
  // 轮播图组件
  lbApp()
}

/**
 *轮播图组件
 *
 */
function lbApp () {
  // 轮播图导航效果
  this.listDomDiv = document.getElementById('lb-list').children
  this.lb = new OnCLickAction()
  this.lb.sayEvent.call(this, this.listDomDiv, 'page-on')

  // 轮播图 图片动画
  this.LbEvents = new LbEvent()
  this.lbDomDiv = document.getElementsByClassName('lun-boNav')[0]
  this.pageIndex = 1
  this.lbTime = setInterval(() => {
    this.LbEvents.setOn.call(this, this.lbDomDiv, 740, this.pageIndex)
  }, 3000)
}

/**
 *
 * 给li添加点击事件
 */
function OnCLickAction () { }
OnCLickAction.prototype = {
  // 导航栏自动切换特效
  automatic: function (dom, pageIndex) {
    // 自动下一个滚动
    for (let i = 0; i < dom.length; i++) {
      dom[i].className = ''
    }
    dom[pageIndex].className = 'page-on'
  },
  // 底部导航栏的点击事件
  sayEvent: function (dom, className) {
    for (let i = 0; i < dom.length; i++) {
      dom[i].onclick = () => {
        clearInterval(this.lbTime)
        for (var j = 0; j < dom.length; j++) {
          dom[j].className = ''
        }
        dom[i].className = className

        // 轮播图定位
        this.pageIndex = i
        this.lbDomDiv.style.left = '-' + 740 * this.pageIndex + 'px'
        this.lbTime = setInterval(() => {
          this.LbEvents.setOn.call(this, this.lbDomDiv, 740, this.pageIndex + 1)
        }, 3000)
      }
    }
  }
}

/**
 *轮播图滚动事件
 * @param {*} YDPx
 * @param {*} pageIndex
 */
function LbEvent () { }
LbEvent.prototype = {
  setOn: function (dom, YDPx, pageIndex) {
    if (pageIndex > 4) {
      this.pageIndex = 0
      dom.style.left = '0px'
      return this.lb.automatic.call(lbApp, this.listDomDiv, 0)
    }
    this.pageIndex++
    this.lb.automatic.call(lbApp, this.listDomDiv, pageIndex)
    dom.style.left = '-' + YDPx * pageIndex + 'px'
  }
}

/**
 *图标上移
 *
 * @param {*} dom
 * @param {*} topPx
 */
// function IconActionTop(dom, topPx) {
//     this._dom = dom
//     this._topPx = topPx
// }
