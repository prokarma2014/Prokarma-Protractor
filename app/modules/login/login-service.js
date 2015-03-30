'use strict';
angular.module('login.service', ['ngStorage','config'])
  .factory('loginService', function ($q, CONFIG, $localStorage, $http, $location) {
    var authenticate = function (username, password) {
      var user = {
        'username': username,
        'password': password

      };
      return $http.post(CONFIG.app[CONFIG.app.mode].webServiceUrl + CONFIG.requests.login, user);
    };

    var mockAuthenticate = function (username, password) {
      var user = {
        'username': username,
        'mobileNumber': '0842785380',
        'email': 'sam@gmail.com'

      };
      var faileduser = {
        'message': 'Username or Password incorrect'
      };
      var deferred = $q.defer();
      if (username === 'sam' && password === '123456') {
        $localStorage.user = user;
        $localStorage.isLoggedIn = true;
        deferred.resolve(user);

      } else {
        deferred.reject(faileduser);

      }
      return deferred.promise;

    };
    var isLoggedIn = function () {
      if ($localStorage.isLoggedIn) {
        return true;
      } else {
        return false;
      }

    };
    var getUser = function () {

      return $localStorage.user;

    };
    var logout = function () {
      $localStorage.isLoggedIn = false;
      $localStorage.user = {};
      $location.path('/login');
    };
    return {
      authenticate: authenticate,
      mockAuthenticate: mockAuthenticate,
      isLoggedIn: isLoggedIn,
      getUser: getUser,
      logout: logout
    };
  });