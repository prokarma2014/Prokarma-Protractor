'use strict';

describe('Controller :recharge.confirm', function () {
  beforeEach(module('recharge.confirm'));
  var scope,
    httpBackend,
    dataSharingService,
    mockController;

 
  function createController() {
    return mockController('ConfirmationCtrl', {
      $scope: scope
    });
  }

  // Initialize the controller
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _dataSharingService_) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    mockController = $controller;
    dataSharingService = _dataSharingService_;


  }));

  it('should get topup details set', function () {
    dataSharingService.setDetail({mobileNumber:'904761290'})
    createController();
    expect(scope.topUpDetail.mobileNumber).toBe('904761290');

  });
  
 
});