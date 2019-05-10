import _ from 'lodash';
import '../../src/css/index.css';
import '../../src/css/reset.css';
import Back from '../image/back-home.jpg';
import Icon from '../image/favicon.ico';
import Logo from '../image/logo.png';
/**
 * 图标a标签 logo
 * 点击返回首页事件
 */
function setAHtml(aHtml) {
    this._aHtml = aHtml;
    this._aHtml.href = 'http://localhost:8080/index.html';
    this._appChildImg = new Image();


}
setAHtml.prototype = {
    constructor: setAHtml,
    setStyle: function () {
        this._appChildImg.src = Logo;
        this._aHtml.appendChild(this._appChildImg);
    }
}
var set_a_html = new setAHtml(document.getElementsByClassName('logo-home')[0]);
set_a_html.setStyle();