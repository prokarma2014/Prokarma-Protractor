'use strict';
angular.module('recharge.preview', ['recharge.service']).controller('PreviewCtrl', function ($scope, dataSharingService, $location,utilityService) {

  $scope.topUpDetail = dataSharingService.getDetail();
  $scope.topUpDetail.maskCreditCard = utilityService.maskCreditCard($scope.topUpDetail.cardNumber);
  if (!angular.isDefined($scope.topUpDetail.mobileNumber)) {
    $location.path('/');
  }

  $scope.topUpSubmit = function () {
   
    if ($scope.termsConditions) {
      
      $location.path('/confirmation');
    } else {
      alert('please accept terms and conditions');
    }

  };
});