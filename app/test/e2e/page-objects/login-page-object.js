'use strict';
var loginPage = function () {
  this.getUsername = element(by.css('#username'));
  this.getPassword = element(by.css('#password'));
  this.getLoginBtn = element(by.css('.login-btn'));
  this.getLogout = element(by.css('.logout-text'))
  this.login = function(){
    this.getLoginBtn.click();
  };
  this.logout = function(){
    this.getLogout.click();
    
  };
};
module.exports = loginPage;