window.onload = function () {
    var lbFN = new lbApp();
}

/**
 *轮播图组件
 *
 */
function lbApp() {
    //轮播图导航效果
    this.listDomDiv = document.getElementById("lb-list").children;
    this.lb = new onCLickAction();
    this.lb.sayEvent.call(this, this.listDomDiv, "page-on");

    //轮播图 图片动画
    this.lbEvents = new lbEvent();
    this.lbDomDiv = document.getElementsByClassName("lun-boNav")[0];
    this.pageIndex = 1;
    this.lbTime = setInterval(() => {
        this.lbEvents.setOn.call(this, this.lbDomDiv, 740, this.pageIndex)
    }, 3000);
}

/**
 *
 * 给li添加点击事件
 * @param {*} dom  
 * @param {*} addClassName  
 *  
 */
function onCLickAction() { }
onCLickAction.prototype = {
    //导航栏自动切换特效
    automatic: function (dom, pageIndex) {
        //自动下一个滚动
        for (let i = 0; i < dom.length; i++) {
            dom[i].className = "";
        }
        dom[pageIndex].className = "page-on";
    },
    //底部导航栏的点击事件
    sayEvent: function (dom, className) {
        for (let i = 0; i < dom.length; i++) {
            dom[i].onclick = () => {
                clearInterval(this.lbTime);
                console.log(this);
                for (var j = 0; j < dom.length; j++) {
                    dom[j].className = '';
                }
                dom[i].className = className;

                //轮播图定位
                this.pageIndex = i;
                this.lbDomDiv.style.left = "-" + 740 * this.pageIndex + "px";
                this.lbTime = setInterval(() => {
                    this.lbEvents.setOn.call(this, this.lbDomDiv, 740, this.pageIndex + 1)
                }, 3000);
            };

        }
    }
};

/**
 *轮播图滚动事件
 * @param {*} YDPx
 * @param {*} pageIndex
 */
function lbEvent() { }
lbEvent.prototype = {
    setOn: function (dom, YDPx, pageIndex) {
        if (pageIndex > 4) {
            this.pageIndex = 0;
            return;
        }
        dom.style.left = "-" + YDPx * pageIndex + "px";
        this.pageIndex++;
        this.lb.automatic.call(lbApp, this.listDomDiv, pageIndex);
        // setInterval(() => {
        //     this.setOn();
        // }, 3000);
    }
}