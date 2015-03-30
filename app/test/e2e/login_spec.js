'use strict';
var LoginPage = require('./page-objects/login-page-object.js');
describe('Recharge app preview', function () {
  var page;
  page = new LoginPage();
  it('should show error message for invalid login credentials', function () {
    browser.get('#/login');
    page.getUsername.sendKeys('sam');
    page.getPassword.sendKeys('xyz');
    page.login();
    element(by.css('.invalid-login')).isPresent().then(function (isPresent) {
      expect(isPresent).toBe(true);
    });

  });
  it('should redirect to home page on successfull login', function () {
    browser.get('#/login');
    page.getUsername.sendKeys('sam');
    page.getPassword.sendKeys('123456');
    page.login();
    expect(browser.getLocationAbsUrl()).toEqual(browser.baseUrl + '#/home');
    page.logout();
  });
  it('should not show address and country forms for logged in user', function () {
    browser.get('#/login');
    page.getUsername.sendKeys('sam');
    page.getPassword.sendKeys('123456');
    page.login();
     element(by.css('.logged-in-content')).isPresent().then(function (isPresent) {
      expect(isPresent).toBe(false);
    });
    page.logout();
  });
});