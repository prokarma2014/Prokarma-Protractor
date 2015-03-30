'use strict';
angular.module('recharge.service', ['config'])
  .factory('dataSharingService', function () {
    var topUpDetail = {};
    var topUpSubmitResponse = {};
    var setDetail = function (detail) {
      topUpDetail = detail;
    };
    var getDetail = function () {
      return topUpDetail;
    };
    var setTopUpSubmitResponse = function (response) {
      topUpSubmitResponse = response;
    };
    var getTopUpSubmitResponse = function () {
      return topUpSubmitResponse;
    };
    return {
      setDetail: setDetail,
      getDetail: getDetail,
      setTopUpSubmitResponse: setTopUpSubmitResponse,
      getTopUpSubmitResponse: getTopUpSubmitResponse
    };

  })
  .factory('webService', function ($http, CONFIG) {

    var getCountryList = function () {
      return $http.get(CONFIG.app[CONFIG.app.mode].webServiceUrl + CONFIG.requests.getCountryList);

    };
    var getTopUpAmount = function () {
      return $http.get(CONFIG.app[CONFIG.app.mode].webServiceUrl + CONFIG.requests.getTopUpAmounts);
    };
    var submitForTopup = function(topUpDetail){
      return $http.post(CONFIG.app[CONFIG.app.mode].webServiceUrl + CONFIG.requests.submitForTopup,topUpDetail);
      
    };
    return {
      getCountryList: getCountryList,
      getTopUpAmount: getTopUpAmount,
      submitForTopup:submitForTopup
    };
  })
  .factory('utilityService', function () {
    var digitToshow = 4;
    var maskCreditCard = function (cNumber) {
      var temp;
      if (cNumber) {
        temp = new Array(cNumber.length - digitToshow + 1).join('x') + cNumber.slice(-digitToshow);

      }
      return temp;
    };
    return {
      maskCreditCard: maskCreditCard
    };

  });