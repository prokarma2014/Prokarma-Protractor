'use strict';

describe('Controller :login', function () {
  beforeEach(module('login'));
  var scope,
    httpBackend,
    location,
    loginService,
    mockController;


  function createController() {
    return mockController('LoginCtrl', {
      $scope: scope
    });
  }

  // Initialize the controller
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $location, _loginService_) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    mockController = $controller;
    location = $location;
    loginService = _loginService_;

  }));

  it('should redirect to home if user is logged in', function () {
    spyOn(loginService, 'isLoggedIn').and.returnValue(true);
    spyOn(location, 'path');
    createController();
    expect(location.path).toHaveBeenCalledWith('/home');
  });
  it('should show error invalid form fields', function () {
    createController();
    scope.loginForm = {};
    scope.loginForm.$invalid = true;
    scope.login();
    expect(scope.showError).toBe('show-custom-error');
  });
  it('should call login service on valid form fields and navigate to home', function () {
    spyOn(location, 'path');
    createController();
    scope.login.username = 'sam';
    scope.login.password = '123456';
    scope.loginForm = {};
    scope.loginForm.$invalid = false;
    scope.login();
    scope.$digest();
    expect(location.path).toHaveBeenCalledWith('/home');
  });

});