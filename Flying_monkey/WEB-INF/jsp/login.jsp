<%--
  Created by IntelliJ IDEA.
  User: haoruitao
  Date: 16-4-11
  Time: 上午8:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@taglib uri="/struts-tags" prefix="s"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath %>" />
    <meta http-equiv=Content-Type content="text/html;charset=utf-8">
    <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    <meta name="author" content="Bingyan Studio">
    <title>试试--登陆</title>
    <link rel="stylesheet" type="text/css" href="css/styleCommon.css">
    <link rel="stylesheet" type="text/css" href="css/styleLogin.css">
    <script type="text/javascript" src="js/md5.js"></script>
    <script type="text/javascript" src="js/checkForm.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
</head>
<body>
<div class="container">
    <form name="login" action="log/login" method="POST">
        <label class="heading">试试 登陆</label>
        <label><p>User Name:</p><input type="email" name="email" placeholder="Please enter your E-mail"></label>
        <label><p>Passoword:</p><input id="pwd-input" type="password" placeholder="Please enter your password"></label>
        <label style="display: none;"><input id="pwd-md5" name="password" type="password"></label>
        <a class="button" id="login-btn" onclick="loginCheck();">登陆</a>

        <%--这里登陆不了!!!--%>
        <s:debug />
    </form>
</div>
</body>
</html>

