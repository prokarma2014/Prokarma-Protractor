'use strict';
var HtmlReporter = require('protractor-html-screenshot-reporter');
//var path = require('path');
exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'app/test/e2e/*.js'
  ],

  /*capabilities: {
    'browserName': 'safari'
  },*/
  multiCapabilities: [/*{
      'browserName': 'chrome'
      'chromeOptions': {
        args: ['--test-type']
      }
  },*/ {
      'browserName': 'firefox'
  }, 
   {
      'browserName': 'phantomjs',
      'phantomjs.binary.path': './node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs',
  }],


  baseUrl: 'http://localhost:9000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  },
  onPrepare: function () {
    // Add a screenshot reporter:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'test_reports/e2e'
      //takeScreenShotsOnlyForFailedSpecs: true,
      //      pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
      //
      //        var monthMap = {
      //          "1": "Jan",
      //          "2": "Feb",
      //          "3": "Mar",
      //          "4": "Apr",
      //          "5": "May",
      //          "6": "Jun",
      //          "7": "Jul",
      //          "8": "Aug",
      //          "9": "Sep",
      //          "10": "Oct",
      //          "11": "Nov",
      //          "12": "Dec"
      //        };
      //
      //        var currentDate = new Date(),
      //          currentHoursIn24Hour = currentDate.getHours(),
      //          currentTimeInHours = currentHoursIn24Hour > 12 ? currentHoursIn24Hour - 12 : currentHoursIn24Hour,
      //          totalDateString = currentDate.getDate() + '-' + monthMap[currentDate.getMonth() + 1] + '-' + (currentDate.getYear() + 1900) +
      //          '-' + currentTimeInHours + 'h-' + currentDate.getMinutes() + 'm';
      //
      //        return path.join(totalDateString, capabilities.caps_.browserName, descriptions.join('-'));
      //      }
    }));
  }
};
