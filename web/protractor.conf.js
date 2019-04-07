// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const { JUnitReporter } = require('./jasmine-junit-reporter');
const fs = require('fs');
const path = require('path');
let junitDir = '../bin/test-results';

if(!fs.existsSync(path.join(__dirname, junitDir))) {
   junitDir = './_test-output';
   fs.mkdirSync(path.join(__dirname, junitDir));
}

exports.config = {
   allScriptsTimeout: 11000,
   specs: [
      './e2e/**/*.e2e-spec.ts'
   ],
   capabilities: {
      'browserName': 'chrome'
   },
   directConnect: true,
   baseUrl: 'http://localhost:18080/',
   framework: 'jasmine',
   jasmineNodeOpts: {
      showColors: false,
      defaultTimeoutInterval: 600000,
      print: function() {
      }
   },
   params: {
      specScreenshot: ""
   },
   beforeLaunch: function() {
      require('ts-node').register({
         project: 'e2e/tsconfig.e2e.json'
      });
   },
   onPrepare() {
      jasmine.getEnv().addReporter(new SpecReporter({
         spec: { displayStacktrace: true },
         colors: { enabled: false },
         prefixes: {
            successful: "pass ",
            failed: "fail ",
            pending: "skip "
         }
      }));
      jasmine.getEnv().addReporter(new JUnitReporter({
         outDir: junitDir,
         package: 'angboot.web.client.e2e'
      }));
   }
};
