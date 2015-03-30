'use strict';
angular.module('login', ['login.service']).controller('LoginCtrl', function ($scope, $rootScope, $location, loginService) {
  $scope.showLoginError = false;
  $scope.showError = '';
  $scope.login = {
    username: '',
    password: ''

  };
  if (loginService.isLoggedIn()) {
    $location.path('/home');
  }
  $scope.login = function () {
    if ($scope.loginForm.$invalid) {
      $scope.showError = 'show-custom-error';
      return;
    } else {
      loginService.mockAuthenticate($scope.login.username, $scope.login.password).then(function (user) {
        $rootScope.user = user;
        $rootScope.user.isLoggedIn = true;
        $location.path('/home');
      }, function (error) {
        $scope.showLoginError = true;

      });

    }
  };
});