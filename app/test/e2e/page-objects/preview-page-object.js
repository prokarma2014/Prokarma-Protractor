'use strict';
var PreviewPage = function () {
  this.getAcceptTerms = element(by.css('#terms-conditions'));
  this.getTopupSubmitBtn = element(by.css('.topUpSubmit'));
  this.acceptTerms = function(){
    this.getAcceptTerms.click();
  };
  this.topupSubmit = function(){
    this.getTopupSubmitBtn.click();
  };
};
module.exports = PreviewPage;