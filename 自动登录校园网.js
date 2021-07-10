// ==UserScript==
// @name        自动登录校园网
// @namespace   Violentmonkey Scripts
// @match       *://172.16.255.11/*
// @match       *://sso.cqcet.edu.cn/login*
// @match       *://10.150.11.27/login*
// @match       *://10.150.11.27/login*
// @match       *://*/jsxsd/framework/xsMain.jsp
// @match       *://oaa.cqcet.edu.cn/xxfw/jwxt.htm
// @require     https://libs.baidu.com/jquery/2.1.4/jquery.min.js
// @grant       none
// @version     1.0
// @author      -
// @description 2021/3/3 下午11:12:47`
// ==/UserScript==


// 账号
var account = "";

// 密码
var password = "";


$(function(){
  
  //修改教务系统头像
  //$("#Frame0").contents().find("div.circle.zp").css("background-image","url(https://gitee.com/qaq-mdzz/picture/raw/master/head/qaq_lite.jpg)");
  
  
  xpath='//*[@id="div_sel"]/div[1]';
  
  if (document.getElementById('username')) {
    //填入账号
    document.getElementById('username').value = account;

    //填入密码
    document.getElementById('password').value = password;

    //点击登录
    document.getElementById('btn_login_1').click()
  }

    //点击教育网
  else if(document.evaluate(xpath, document).iterateNext()) {
    document.evaluate(xpath, document).iterateNext().click();
  }

  //网络繁忙
  else if(document.evaluate('//*[@id="message"]', document).iterateNext()) {
    setTimeout(function(){
      location.replace("http://172.16.255.11");
    },2000);
  }
  
  //点击外网
  else if(document.evaluate('//*[@id="m_教务系统"]/area[1]', document).iterateNext()) {
    document.evaluate('//*[@id="m_教务系统"]/area[1]', document).iterateNext().click();
  }
})
