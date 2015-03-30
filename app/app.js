'use strict';
// Define your "main" module and inject all other modules as dependencies
angular.module('mainApp', [
    'login',
    'recharge',
    'common',
    'ngRoute'
  ])
  .run(function ($rootScope, $location, loginService) {
    $rootScope.user = {};
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      console.log('user', loginService.isLoggedIn());
      $rootScope.user = loginService.getUser();
      $rootScope.user.isLoggedIn = loginService.isLoggedIn();
      $rootScope.logout = loginService.logout;
    });

  });