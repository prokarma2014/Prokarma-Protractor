'use strict';
var HomePage = function () {
  this.getMobileNo = element(by.model('topUpDetail.mobileNumber'));
  this.getTopUpAmnt = function(no){
   return element(by.css('#topup-amount option:nth-child('+no+')'));
  };
  this.getCardType = function(no){
   return element(by.css('#card-type option:nth-child('+no+')'));
  };
  this.getCardNo = element(by.model('topUpDetail.cardNumber'));
  this.getCardExpiryMonth = function(no){
    return element(by.css('#card-expiry-month option:nth-child('+no+')'));
  };
  this.getCardExpiryYear = function(no){
    return element(by.css('#card-expiry-year option:nth-child('+no+')'));
  };
  this.getCardSecurityKey = element(by.model('topUpDetail.cardSecuritykey'));
  this.getCardFirstName = element(by.model('topUpDetail.cardFirstName'));
  this.getCardLastName = element(by.model('topUpDetail.cardLastname'));
  this.getAddress1 = element(by.model('topUpDetail.address1'));
  this.getAddress2 = element(by.model('topUpDetail.address2'));
  this.getCity = element(by.model('topUpDetail.city'));
  this.getRegion = function(no){
    return element(by.css('#region option:nth-child('+no+')'));
  };
  this.getTopUpPreviewBtn = element(by.css('.topUpPreview'));
  this.topUpPreview =function(){
    this.getTopUpPreviewBtn.click();
  };
};
module.exports = HomePage;