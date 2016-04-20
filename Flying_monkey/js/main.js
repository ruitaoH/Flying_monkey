//var arrHeight = [];
//var COLS = 2;
//var COUNT = 0;
//var DATA_LENGHT = 8;
//window.onload = function () {
//    getData();
//}
//window.onscroll = function () {
//    if (checkIsBottom()) {
//        getData();
//    }
//}
//function waterfall() {
//    var minKey;
//    var box = document.getElementsByClassName('box-wrap');
//    var boxWidth = box[0].clientWidth;
//    //for (var i = COUNT; i < COUNT + DATA_LENGHT; i++) {
//    for(var i = 0;i < box.length;i++){
//        if (i < COLS) {
//            arrHeight.push(box[i].clientHeight);
//        } else {
//            minKey = getIndexOfMin(arrHeight);
//            box[i].style.position = 'absolute';
//            box[i].style.top = arrHeight[minKey] + 'px';
//            box[i].style.left = (i + 1) % 2 * boxWidth + 'px';
//            arrHeight[minKey] += box[i].clientHeight;
//        }
//    }
//    COUNT += DATA_LENGHT;
//}
//
//function getData() {
//    var xmlHttp = getXmlHttp();
//    try {
//        xmlHttp.open('GET', "indexData", true);
//        xmlHttp.send();
//        xmlHttp.onreadystatechange = function () {
//            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//                var json = JSON.parse(xmlHttp.responseText);//将返回的字符串转换为JSON对象
//                console.log(json);
//                addContent(json.responseJson, waterfall);
//            }
//        }
//    } catch (error) {
//        warn(error.message);
//    }
//
//}
////往页面加内容
///*
// {
// "responseJson":[
// {
// "image":"", //这个是图片的链接
// "value":123, //这个是价值
// "type":"",  //这个是商品类别
// "name":"", //这个是商品名称
// "tip":"", //这个是使用心得
// "trys":123, //这个是想试人数
// "price":123, //这个是价钱
// "nickname":"", //这个是人物昵称
// "major":"" //专业
// },
// ...
// ]
// }
// */
///*
// <div class="box-wrap" onclick="window.location.href('../html/details.html?image=image')">
// <figure class="box">
// <div class="main-img">
// <img height="150px" src="image">
// <div class="img-desc"><p>value</p></div>
// </div>
// <figcaption class="info">
// <div class="brief-desc">
// <h2 class="name"><span class="category">type</span>name</h2>
// <div class="caption">tip</div>
// </div>
// <div class="host">
// <p class="host-name"><span></span>nickname</p>
// <p class="price">price元/次</p>
// <p class="host-info">major</p>
// <span class="wantNum"><span></span>trys</span>
// </div>
// </figcaption>
// </figure>
// </div>
// */
//function addContent(data, callback) {
//    var container = document.getElementsByClassName('container')[0];
//    var frag = document.createDocumentFragment();
//    //for (var i = COUNT; i < COUNT + DATA_LENGHT; i++) {
//    for (var i = 0; i < data.length; i++) {
//        var box = document.createElement('div');
//        box.className = 'box-wrap';
//        box.onclick = function(){
//            window.location.href('commodity/commodity?image=' + data[i].image);
//        };
//        box.innerHTML = '<figure class="box">\
//            <div class="main-img">\
//            <img height="150px" src="' + data[i].image + '">\
//            <div class="img-desc"><p>' + data[i].value + '</p></div>\
//            </div>\
//            <figcaption class="info">\
//            <div class="brief-desc">\
//            <h2 class="name"><span class="category">' + data[i].type + '</span>' + data[i].name + '</h2>\
//            <div class="caption">' + data[i].tip + '</div>\
//            </div>\
//            <div class="host">\
//            <p class="host-name"><span></span>' + data[i].nickname + '</p>\
//            <p class="price">' + data[i].price + '元/次</p>\
//            <p class="host-info">' + data[i].major + '</p>\
//            <span class="wantNum"><span></span>' + data[i].trys + '</span>\
//            </div>\
//            </figcaption>\
//            </figure>';
//        frag.appendChild(box);
//    }
//    container.appendChild(frag);
//    callback();
//}
//function addInfo(data) {
//    var container = document.getElementsByClassName('container')[0];
//
//}
//
////判断是否已经到了底部
//function checkIsBottom() {
//    var winHeight = window.innerHeight;
//    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//    var box = document.getElementsByClassName('box-wrap');
//    var lastBoxOffsetHeight = box[box.length - 1].offsetTop + box[box.length - 1].clientHeight;
//    if (lastBoxOffsetHeight < winHeight + scrollTop) {
//        return true;
//    } else {
//        return false;
//    }
//}
////获得数组中最小值的key
//function getIndexOfMin(arr) {
//    var index = 0;
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] < arr[index]) {
//            index = i;
//        }
//    }
//    return index;
//}
////返回一个XMLHTTPRequest
//function getXmlHttp() {
//    var xmlHttp = null;
//    if (window.XMLHttpRequest) {
//        xmlHttp = new XMLHttpRequest();
//    } else {
//        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//    }
//    return xmlHttp;
//}


var arrHeight = [];
const COLS = 2;//改动过
var COUNT = 0;
const UPDATE_LENGHT = 8;//改动过
window.onload = function () {
    getData();
}
window.onscroll = function () {
    if (checkIsBottom()) {
        getData();
    }
}
function waterfall() {
    var minKey;
    var box = document.getElementsByClassName('box-wrap');
    var boxWidth = box[0].clientWidth;
    for (var i = COUNT; i < COUNT + DATA_LENGHT; i++) {
        if (i < COLS) {
            arrHeight.push(box[i].clientHeight);
        } else {
            minKey = getIndexOfMin(arrHeight);
            box[i].style.position = 'absolute';
            box[i].style.top = arrHeight[minKey] + 'px';
            box[i].style.left = (i + 1) % 2 * boxWidth + 'px';
            arrHeight[minKey] += box[i].clientHeight;
        }
    }
    COUNT += DATA_LENGHT;
}

function getData() {
    var xmlHttp = getXmlHttp();
    try {
        xmlHttp.open('GET', 'data.php?q=' + Math.random(), true);//要改动
        xmlHttp.send();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var json = JSON.parse(xmlHttp.responseText);
                addContent(json.responseJson, waterfall);//要改动
            }
        }
    } catch (error) {
        warn(error.message);
    }

}
//往页面加内容
/*
 {
 "responseJson":[
 {
 "image":"", //这个是图片的链接
 "value":123, //这个是价值
 "type":"",  //这个是商品类别
 "name":"", //这个是商品名称
 "tip":"", //这个是使用心得
 "trys":123, //这个是想试人数
 "price":123, //这个是价钱
 "nickname":"", //这个是人物昵称
 "major":"" //专业
 },
 ...
 ]
 }
 */
/*
 <div class="box-wrap" onclick="window.location.href('../html/details.html?image=image')">
 <figure class="box">
 <div class="main-img">
 <img height="150px" src="image">
 <div class="img-desc"><p>value</p></div>
 </div>
 <figcaption class="info">
 <div class="brief-desc">
 <h2 class="name"><span class="category">type</span>name</h2>
 <div class="caption">tip</div>
 </div>
 <div class="host">
 <p class="host-name"><span></span>nickname</p>
 <p class="price">price元/次</p>
 <p class="host-info">major</p>
 <span class="wantNum"><span></span>trys</span>
 </div>
 </figcaption>
 </figure>
 </div>
 */


function addContent(data, callback) {
    var container = document.getElementsByClassName('container')[0];
    var frag = document.createDocumentFragment();
    for (var i = COUNT; i < COUNT + UPDATE_LENGHT; i++) {
        if (i<data.length){//改动过
            var box = document.createElement('div');
            box.className = 'box-wrap';
            box.onclick = window.location.href('../html/details.html?image=' + data[i].image);//要改动
            box.innerHTML = '<figure class="box">\
            <div class="main-img">\
            <img height="150px" src="' + data[i].image + '">\
            <div class="img-desc"><p>' + data[i].value + '</p></div>\
            </div>\
            <figcaption class="info">\
            <div class="brief-desc">\
            <h2 class="name"><span class="category">' + data[i].type + '</span>' + data[i].name + '</h2>\
            <div class="caption">' + data[i].tip + '</div>\
            <p class="price">' + data[i].price + '元/次</p>\
            </div>\
            <div class="host">\
            <p class="host-name"><span></span>' + data[i].nickname + '</p>\
            <p class="host-info">' + data[i].major + '</p>\
            <span class="wantNum">' + data[i].trys + '</span>\
            </div>\
            </figcaption>\
            </figure>';//改动过
            frag.appendChild(box);
        }else {//改动过
            container.appendChild(frag);
            var p = document.createElement('p');
            p.style.lineHeight = '20px';
            p.style.height = '100%';
            p.style.color = 'rgb(170,170,170)';
            p.style.textAlign = 'center';
            p.innerHTML = '已经到底了...';
            container.appendChild(p);
            return;
        }
    }
    container.appendChild(frag);
    callback();
}
//判断是否已经到了底部
function checkIsBottom() {
    var winHeight = window.innerHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var box = document.getElementsByClassName('box-wrap');
    var lastBoxOffsetHeight = box[box.length - 1].offsetTop + box[box.length - 1].clientHeight;
    if (lastBoxOffsetHeight < winHeight + scrollTop) {
        return true;
    } else {
        return false;
    }
}
//获得数组中最小值的key
function getIndexOfMin(arr) {
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[index]) {
            index = i;
        }
    }
    return index;
}
//返回一个XMLHTTPRequest
function getXmlHttp() {
    var xmlHttp = null;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xmlHttp;
}