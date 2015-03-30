'use strict';
var HomePage = require('./page-objects/home-page-object.js');
describe('Recharge app home', function () {
  var page;
  page = new HomePage();

  it('should automatically redirect to /home when location hash/fragment is empty', function () {
    browser.get('#/');
    expect(browser.getLocationAbsUrl()).toEqual(browser.baseUrl + '#/home');
  });

  it('should redirect to /preview on valid inputs', function () {
    browser.get('#/home');
    page.getMobileNo.sendKeys('0866666666');
    page.getTopUpAmnt(2).click();
    page.getCardType(2).click();
    page.getCardNo.sendKeys('411111111111111');
    page.getCardExpiryMonth(4).click();
    page.getCardExpiryYear(8).click();
    page.getCardSecurityKey.sendKeys('123');
    page.getCardFirstName.sendKeys('Sam');
    page.getCardLastName.sendKeys('daniel');
    page.getAddress1.sendKeys('123,North west street');
    page.getAddress2.sendKeys('michelle towers');
    page.getCity.sendKeys('kansas');
    page.getRegion(4).click();
    page.topUpPreview();
    expect(browser.getLocationAbsUrl()).toEqual(browser.baseUrl + '#/preview');
  });
});