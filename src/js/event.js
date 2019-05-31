window.onload = function () {
    //轮播图导航效果
    var listDomDiv = document.getElementById("lb-list").children;
    var lb = new onCLickAction(listDomDiv, "page-on");
    lb.sayEvent();

    //轮播图 图片动画
    var lbImgDom = document.getElementsByClassName("lun-boNav")[0];
    var pageIndex = 1;
    var lbEvents = new lbEvent(lbImgDom, 740);

}

/**
 *
 * 给li添加点击事件
 * @param {*} dom  
 * @param {*} addClassName   
 */
function onCLickAction(dom, addClassName) {
    this.dom = dom;
    this.class = addClassName;
    setInterval(() => {
        if (pageIndex > 4) {
            pageIndex = 0;
        }
        //自动下一个滚动
        for (let i = 0; i < listDomDiv.length; i++) {
            listDomDiv[i].className = "";
        }
        listDomDiv[pageIndex].className = "page-on";
        lbEvents.setOn(pageIndex);
        pageIndex++;
    }, 3000);
}
onCLickAction.prototype = {
    sayEvent: function () {
        for (let i = 0; i < this.dom.length; i++) {
            this.dom[i].onclick = () => {
                // clearInterval(this.call(window).lbTime);
                console.log(this);
                for (var j = 0; j < this.dom.length; j++) {
                    this.dom[j].className = '';
                }
                this.dom[i].className = this.class;
            };

        }
    }
};

/**
 *轮播图滚动事件
 * @param {*} dom
 * @param {*} YDPx
 */
function lbEvent(dom, YDPx) {
    this.dom = dom;
    this.leftPx = YDPx;
}
lbEvent.prototype = {
    setOn: function (i) {
        this.dom.style.left = "-" + this.leftPx * i + "px";
    }
}