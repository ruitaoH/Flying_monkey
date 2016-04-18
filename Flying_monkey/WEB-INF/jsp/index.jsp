<%--
  Created by IntelliJ IDEA.
  User: haoruitao
  Date: 16-4-16
  Time: 下午4:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
    <title>试试</title>
    <link rel="stylesheet" type="text/css" href="css/styleCommon.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/main.js"></script>
</head>
<body>
<header>
    <h1 class="heading">试试</h1>

    <%--这里的路径是干什么的???--%>
    <a class="button" id="denglu" href="log/login">注册/登陆</a>

    <div id="user">
        <span id="user-logo"></span>
        <p id="user-name">user name</p>
    </div>
</header>
<div class="container">
    <!--
     <div class="box-wrap" onclick="toDetails();">
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
    -->


    <%--这里的路径???--%>
    <%--<div class="box-wrap" onclick="window.location.href('../html/details.html?image=image')">--%>
        <%--<figure class="box">--%>
            <%--<div class="main-img">--%>
                <%--<img height="150px" src="../../images/1.jpg">--%>
                <%--<div class="img-desc"><p>value</p></div>--%>
            <%--</div>--%>
            <%--<figcaption class="info">--%>
                <%--<div class="brief-desc">--%>
                    <%--<h2 class="name"><span class="category">type</span>name</h2>--%>
                    <%--<div class="caption">tip</div>--%>
                <%--</div>--%>
                <%--<div class="host">--%>
                    <%--<p class="host-name"><span></span>nickname</p>--%>
                    <%--<p class="price">price元/次</p>--%>
                    <%--<p class="host-info">major</p>--%>
                    <%--<span class="wantNum"><span></span>trys</span>--%>
                <%--</div>--%>
            <%--</figcaption>--%>
        <%--</figure>--%>
    <%--</div>--%>
</div>
<nav>
    <ul>
        <li><span class="try-icon"></span><a class="button" href="#">试试</a></li>
        <li><span class="issue-icon"  onclick="window.location.href='checklogin/checkPublish'"></span><a class="button" onclick="window.location.href='checklogin/checkPublish'">发布</a></li>
        <li><span class="center-icon"></span><a class="button" onclick="window.location.href='checklogin/checkPersonal'">个人中心</a></li>
    </ul>
</nav>
</body>
</html>