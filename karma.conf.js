'use strict';
module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/*.js',
      'app/modules/**/*.js'
    ],
    autoWatch: true,
    frameworks: ['jasmine'],
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome', 'Firefox', 'IE', 'Safari','IE9'],
    customLaunchers: {
      IE9: {
        base: 'IE',
        'x-ua-compatible': 'IE=EmulateIE9'
      },
      IE8: {
        base: 'IE',
        'x-ua-compatible': 'IE=EmulateIE8'
      }
    },
    plugins: [
      'karma-jasmine',
      'karma-htmlfile-reporter',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-safari-launcher'
    ],
    preprocessors: {
      'app/modules/**/!(*_test.js)+(*.js)': ['coverage']
    },
    reporters: ['progress', 'html', 'coverage'],

    htmlReporter: {
      outputFile: 'test_reports/unit_tests/test_results/report.html'
    },
    coverageReporter: {
      type: 'html',
      dir: 'test_reports/unit_tests/test_coverage'
    },
    singleRun: false
  });
};