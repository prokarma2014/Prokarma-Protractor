'use strict';

describe('Controller :recharge.home', function () {
  beforeEach(module('recharge.home'));
  var scope,
    httpBackend,
    webService,
    dataSharingService,
    location,
    CONFIG,
    mockController;


  function createController() {
    return mockController('HomeCtrl', {
      $scope: scope 
    });
  }

  // Initialize the controller
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, _dataSharingService_, _webService_, $location,_CONFIG_) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    mockController = $controller;
    webService = _webService_;
    dataSharingService = _dataSharingService_;
    location = $location;
    CONFIG = _CONFIG_;

  }));

  it('should fetch countrylist and topupamount', function () {
    httpBackend.expectGET(CONFIG.app[CONFIG.app.mode].webServiceUrl + CONFIG.requests.getCountryList).respond(200, {
      'countryList': [
        {
          'label': 'UNITED STATES',
          'value': 'US'
        }, {
          'label': 'INDIA',
          'value': 'IND'
        }, {
          'label': 'AUSTRALIA',
          'value': 'DZ'
        }, {
          'label': 'BRAZIL',
          'value': 'BR'
        }
      ]
    });

    httpBackend.expectGET(CONFIG.app[CONFIG.app.mode].webServiceUrl + CONFIG.requests.getTopUpAmounts).respond(200, {
      topUpList: [{
        'label': '€€10',
        'value': '10.0'
      }, {
        'label': '€€20',
        'value': '20.0'
      }]
    });

    createController();
    httpBackend.flush();
    expect(scope.countryList.length).toBeGreaterThan(0);
    expect(scope.topUpAmount.length).toBeGreaterThan(0);

  });
  it('should set error class on submit with invalid form entry', function () {

    createController();
    scope['formTopupDetail'] = {};
    scope['formTopupDetail'].$invalid = true;
    scope.topUpPreview();
    expect(scope.showError).toBe('show-custom-error'); 

  });
  it('should store form detail and redirect to /preview on submitting valid input', function () {
    spyOn(dataSharingService, 'setDetail');
    spyOn(location, 'path');
    createController();
    scope['formTopupDetail'] = {};
    scope['formTopupDetail'].$invalid = false;
    scope.topUpPreview();
    expect(dataSharingService.setDetail).toHaveBeenCalled();
    expect(location.path).toHaveBeenCalledWith('/preview');

  });
});