function registerCheck() {

    var nickname = register.nickname;
    if (checkIsEmpty(nickname, '请输入昵称!')) {
        return false;
    }

    var pwdInput = document.getElementById('pwd-input');
    var pwdMd5 = register.password;
    if (checkIsEmpty(password, '请输入昵称!')) {
        return false;
    } else if (password.value.length < 6 || password.value.length > 16) {
        warn('密码长度不能超过16位, 且要大于5位');
        return false;
    } else {
        pwdMd5.value = faultylabs.MD5(pwdInput);
    }

    var sex = register.sex;
    if(checkIsEmpty(sex,'请选择性别!')){
        return false;
    }

    var email = register.email;
    if (checkIsEmpty(email, '请输入邮箱!')) {
        return false;
    } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]+/.test(user.value)) {
        warn('请输入有效的邮箱名!');
        return false;
    }

    var phone = register.phone;
    if (checkIsEmpty(phone, '请输入手机号!')) {
        return false;
    } else if (!/[0-9]{11}/.test(phone.value)) {
        warn('请输入有效的手机号码!');
        return false;
    }

    var major = register.major;
    if(checkIsEmpty(major, '请填写专业!')){
        return false;
    }

    var wechat = register.weixin;
    var qq = register.qq;
    if(!wechat.value && !qq.value){
        warn('请填写微信号或者QQ号!');
        return false;
    }else if(!/[0-9]{5,}/.test(qq.value)){
        warn('请填写有效的QQ号!');
        return false;
    }

    register.submit();
}