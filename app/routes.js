'use strict';
angular.module('mainApp').config(function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'modules/login/login.html',
    controller: 'LoginCtrl'
  })
    .when('/home', {
      templateUrl: 'modules/recharge/home/top-up-enter.html',
      controller: 'HomeCtrl'

    })
    .when('/preview', {
      templateUrl: 'modules/recharge/preview/top-up-preview.html',
      controller: 'PreviewCtrl'
    }).when('/confirmation', {
      templateUrl: 'modules/recharge/confirm/top-up-confirmation.html',
      controller: 'ConfirmationCtrl'
    }).otherwise({
      redirectTo: '/home'
    });
}).run(function ($rootScope) { //To show loader till dependency services are resolved
  $rootScope.$on('$routeChangeStart', function (e, curr, prev) {
    if (curr.$$route && curr.$$route.resolve) {
      // Show a loading message until promises are not resolved
      $rootScope.loadingView = true;
    }
  });
  $rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
    // Hide loading message
    $rootScope.loadingView = false;
  });
});