'use strict';

describe('Controller :recharge.preview', function () {
  beforeEach(module('recharge.preview'));
  var scope,
    httpBackend,
    dataSharingService,
    location,
    mockController;

 
  function createController() {
    return mockController('PreviewCtrl', {
      $scope: scope
    });
  }

  // Initialize the controller
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _dataSharingService_, $location) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    mockController = $controller;
    dataSharingService = _dataSharingService_;
    location = $location;

  }));

  it('should redirect to home if no mobile number is present', function () {
    spyOn(location, 'path');
    createController();
    expect(location.path).toHaveBeenCalledWith('/');

  });
  
  it('should redirect to confirmation if terms and conditions are accepted', function () {
    spyOn(location, 'path');
    dataSharingService.setDetail({mobileNumber:'904761290'})
    createController();
    scope.termsConditions =true;
    scope.topUpSubmit();
    expect(location.path).toHaveBeenCalledWith('/confirmation');

  });
  it('should alert error message if terms and conditions is not accepted', function () {
    spyOn(window, 'alert');
    dataSharingService.setDetail({mobileNumber:'904761290'})
    createController();
    scope.topUpSubmit();
    expect(window.alert).toHaveBeenCalled();

  });
 
});