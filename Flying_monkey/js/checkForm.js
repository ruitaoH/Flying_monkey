//判断某区域是否为空
function checkIsEmpty(feild, warnText){
    if(feild.value == null || feild.value.replace(/\s*/, '') == ''){
        warn(warnText);
        feild.focus();
        return true;
    }else {
        return false
    }
}
//警告框
function warn(text){
    var warnWrap = document.createElement('div');
    warnWrap.className = 'warn-wrap';
    var warnText = document.createElement('p');
    var textNode = document.createTextNode(text);
    warnText.appendChild(textNode);
    warnWrap.appendChild(warnText);
    var btn = document.createElement('a');
    btn.innerHTML = '好';
    warnWrap.appendChild(btn);
    document.body.appendChild(warnWrap);
    var all = document.body.children;
    for(var i=0;i<all.length;i++){
        all[i].className += ' blur';
    }
    warnWrap.className = warnWrap.className.replace(/\s*blur\s*/, '')
    warnWrap.style.opacity = '1';
    btn.onclick = function(){
        document.body.removeChild(warnWrap);
        for(var i=0;i<all.length;i++) {
            all[i].className = all[i].className.replace(/\s*blur\s*/, '');
        }
    }
}