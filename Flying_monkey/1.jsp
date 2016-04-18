<%@ page import="com.hrt.domain.User" %><%--
  Created by IntelliJ IDEA.
  User: haoruitao
  Date: 16-4-11
  Time: 上午8:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="/struts-tags" prefix="s"%>
<html>
<%
  String path = request.getContextPath();
  String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<head>
  <title>$Title$</title>
  <base href="<%=basePath %>" />
</head>
<body>
  <%--<form action="upload.action" method="post" enctype="multipart/form-data">--%>
    <%--<s:file name="file" label="文件1" />--%>
    <%--<br />--%>
    <%--<s:file name="file" label="文件2" />--%>
    <%--<br />--%>
    <%--<s:file name="file" label="文件3" />--%>
    <%--<br />--%>
    <%--<s:file name="file" label="文件4" />--%>
    <%--<br />--%>
    <%--<s:submit label="上传" />--%>
  <%--</form>--%>

  <%--<form name="f" action="" method="post">--%>
    <%--用户名:<input type="text" name="name" />--%>
    <%--密码:<input type="password" name="password" />--%>
    <%--<input type="button" value="submit1" onclick="javascript:document.f.action='login/login1';document.f.submit()">--%>
    <%--<input type="button" value="submit2" onclick="javascript:document.f.action='login/login2';document.f.submit()">--%>
    <%--<input type="button" value="submit3" onclick="javascript:document.f.action='login/login3';document.f.submit()">--%>
    <%--<input type="button" value="submit4" onclick="javascript:document.f.action='login/login4';document.f.submit()">--%>
  <%--</form>--%>

  <script>
    function send(){
//      var name = document.getElementById("people_name_input");
      var xmlhttprequest = new XMLHttpRequest();
      xmlhttprequest.open("POST","indexData",true);
      xmlhttprequest.onreadystatechange = function(){
        if (xmlhttprequest.readyState == 4 && xmlhttprequest.status == 200) {
          document.getElementById("main").innerHTML = "提交成功" + xmlhttprequest.response;
        }
      };
      xmlhttprequest.send();
    }
  </script>

  <%--<button onclick="send()">提交</button>--%>
  <div id="main">
  </div>
  <s:debug />

  <form action="checklogin/checkPublish" method="post">
    <input type="submit" value="发送" />
  </form>

  <%--<button onclick="send()">得到json</button>--%>

  <form action="publish/publish" method="post" enctype="multipart/form-data">
    图片:<input type="file" name="image" /><br />
    名称:<input type="text" name="name" /><br />
    类别:<input type="text" name="type"/><br />
    价值:<input type="number" name="value"><br />
    购买地点:<input type="text" name="buy_place" /><br />
    使用心得:<input type="text" name="tip" /><br />
    使用费用:<input type="number" name="price" /><br />
    试用内容:<input type="text" name="content" /><br />
    试用地点:<input type="text" name="try_place" /><br />
    <input type="submit" value="发布表单" />
  </form>

  <button onclick="send()">发送</button>

  <%--<form action="test/test" method="post" enctype="multipart/form-data">--%>
  <%--<input type="file" name="image" />--%>
  <%--<br />--%>
  <%--<input type="submit" value="上传" />--%>
  <%--</form>--%>

  <%--<%--%>
    <%--User user = (User) session.getAttribute("user");--%>
  <%--%>--%>
  <%--<%=user.getNickname() %>--%>

  <button onclick="var image = '/home/haoruitao/IdeaProjects/Flying_monkey/web/images/2.jpg';window.location.href='commodity/commodity?image=' + image;">跳转到物品页面</button>
  <button onclick="window.location.href='checklogin/checkTry'">检测尝试登陆</button>
</body>
</html>
<img height="150px" src="' + data[i].image + '">\