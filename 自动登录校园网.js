// ==UserScript==
// @name        自动登录校园网
// @namespace   Violentmonkey Scripts
// @match       *://172.16.255.11/*
// @match       *://sso.cqcet.edu.cn/login*
// @match       *://10.150.11.27/login*
// @match       *://10.150.11.27/login*
// @grant       none
// @version     1.0
// @author      -
// @description 2021/3/3 下午11:12:47`
// ==/UserScript==


// 账号
var account = "";

// 密码
var password = "";


window.onload = function () {

  xpath='//*[@id="div_sel"]/div[1]';

  if (document.evaluate('//*[@id="username"]', document).iterateNext()) {
    //填入账号
    document.evaluate('//*[@id="username"]', document).iterateNext().value = account;

    //填入密码
    document.evaluate('//*[@id="password"]', document).iterateNext().value = password;

    //点击登录
    document.evaluate('//*[@id="btn_login_1"]', document).iterateNext().click()
  }

  //点击教育网
  else if(document.evaluate(xpath, document).iterateNext()) {
    document.evaluate(xpath, document).iterateNext().click();
  }

  else if(document.evaluate('//*[@id="message"]', document).iterateNext()) {
    setTimeout(function(){
      location.replace("http://172.16.255.11");
    },2000);
  }
}