// import _ from 'lodash';
// import '../../src/css/index.css';
// import '../../src/css/reset.css';
// import '../image/back-home.jpg';
// import '../image/favicon.ico';
// import '../image/begin.gif';
// import Logo from '../image/logo.png';
// import printMe from './print.js';
// /**
//  * 图标a标签 logo
//  * 点击返回首页事件
//  */
// function setAHtml(aHtml) {
//     this._aHtml = aHtml;
//     this._aHtml.href = 'http://localhost:8080/index.html';
//     this._appChildImg = new Image();


// }
// setAHtml.prototype = {
//     constructor: setAHtml,
//     setStyle: function () {
//         this._appChildImg.src = Logo;
//         this._aHtml.appendChild(this._appChildImg);
//     }
// }
// var set_a_html = new setAHtml(document.getElementsByClassName('logo-home')[0]);
// set_a_html.setStyle();
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }

var data = { a: 1 };
var vm = new Vue({
    data: data
});
console.log(vm.a == data.a);