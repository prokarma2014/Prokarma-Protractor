'use strict';
angular.module('recharge.confirm',['recharge.service'])
.controller('ConfirmationCtrl', function($scope, dataSharingService,utilityService) {
	$scope.topUpDetail = dataSharingService.getDetail();
    $scope.topUpSubmitResponse = dataSharingService.getTopUpSubmitResponse();
    $scope.topUpDetail.maskCreditCard = utilityService.maskCreditCard($scope.topUpDetail.cardNumber);
});
