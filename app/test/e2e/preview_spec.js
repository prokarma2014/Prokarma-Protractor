'use strict';
var HomePage = require('./page-objects/home-page-object.js');
var PreviewPage = require('./page-objects/preview-page-object.js');
describe('Recharge app preview', function () {
  var previewPage,
      homePage;
  homePage = new HomePage();
  previewPage = new PreviewPage();
  it('redirect to  /confirmation on accepting term and conditions and clicking top up', function () {
    browser.get('#/home');
    homePage.getMobileNo.sendKeys('0866666666');
    homePage.getTopUpAmnt(2).click();
    homePage.getCardType(2).click();
    homePage.getCardNo.sendKeys('411111111111111');
    homePage.getCardExpiryMonth(4).click();
    homePage.getCardExpiryYear(8).click();
    homePage.getCardSecurityKey.sendKeys('123');
    homePage.getCardFirstName.sendKeys('Sam');
    homePage.getCardLastName.sendKeys('daniel');
    homePage.getAddress1.sendKeys('123,North west street');
    homePage.getAddress2.sendKeys('michelle towers');
    homePage.getCity.sendKeys('kansas');
    homePage.getRegion(4).click();
    homePage.topUpPreview();
    previewPage.acceptTerms();
    previewPage.topupSubmit();
    expect(browser.getLocationAbsUrl()).toEqual(browser.baseUrl + '#/confirmation');
  });

});