'use strict';

describe('Directive :common.directive', function () {
  //reference here
  //http://stackoverflow.com/questions/15219717/to-test-a-custom-validation-angular-directive
  beforeEach(module('common.directive'));
  var scope,
    compile;

  function compileDirective(tpl) {
    var element = angular.element(tpl);
    return compile(element)(scope);

  }
  // Initialize the controller
  beforeEach(inject(function (_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    compile = _$compile_;
  }));

  it('should remove the albhabets from the input', function () {
    scope.mobileNumber = null;
    // then produce our directive using it
    var el = compileDirective('<form name="form"><input type="text" name = "mNo" numbers-only ng-model="mobileNumber"></form>');
    scope.form.mNo.$setViewValue('45abc');
    scope.$digest();
    expect(scope.mobileNumber).toBe('45');
  });

});