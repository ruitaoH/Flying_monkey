<%--
  Created by IntelliJ IDEA.
  User: haoruitao
  Date: 16-4-13
  Time: 下午11:33
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
    <title>试试--发布</title>
    <link rel="stylesheet" type="text/css" href="css/styleCommon.css">
    <link rel="stylesheet" type="text/css" href="css/styleIssue.css">
    <script type="text/javascript" src="js/checkForm.js"></script>
    <script type="text/javascript" src="js/issue.js"></script>
</head>
<body>
<header>
    <h1 class="heading">发布</h1>
    <a class="btn" id="cancel">取消</a>
    <a class="btn" id="continue" onclick="checkIssue();">继续</a>
</header>
<div class="container">
    <form name="issue" action="publish/publish" method="POST" enctype="multipart/form-data">
        <label><div class="addImg"><span class="icon-plus-sign"></span><p>点击添加物品信息</p></div><input name="image" type="file"></label>
        <label>使用心得:<textarea name="tip" placeholder="不超过140字..."></textarea></label>
        <label>物品名称:<input name="name" type="text" placeholder="请输入物品名称"></label>
        <label>物品类别:<input name="type" type="text" placeholder="请输入物品类别"></label>
        <label>物品价值:<input name="value" type="number" placeholder="请输入物品价值"></label>
        <label>购买地点:<input name="buy_place" type="text" placeholder="请输入物品购买地点"></label>
        <label>试用费用:<input name="price" type="number" placeholder="请输入物品试用费用, 比如:20">元/次</label>
        <label>试用内容:<textarea name="content" placeholder="请简要填写, 比如:完整体验此播放器的完整功能"></textarea></label>
        <label>试用地点:<input name="try_place" type="text" placeholder="在哪儿试用, 比如:集贸麦当劳"></label>
    </form>
</div>
</body>
</html>