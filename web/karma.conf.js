// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

var fs = require('fs');
var path = require('path');

module.exports = function (config) {
   var addJunitReporter =
     (config.singleRun && !(config.angularCli && config.angularCli.codeCoverage));

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
        environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    browserNoActivityTimeout: 120000
  });

   if(addJunitReporter) {
      var dist = "./dist";
      var testDir = dist + "/test";
      var distDir = testDir + "/test-dist";
      var junitDir = testDir + '/test-results';

      if(!fs.existsSync(path.join(__dirname, dist))) {
         fs.mkdirSync(path.join(__dirname, dist));
      }

      if(!fs.existsSync(path.join(__dirname, testDir))) {
         fs.mkdirSync(path.join(__dirname, testDir));
      }

      if(!fs.existsSync(path.join(__dirname, junitDir))) {
         junitDir = distDir + '/_test-output';

         if(!fs.existsSync(path.join(__dirname, distDir))) {
            fs.mkdirSync(path.join(__dirname, distDir));
         }

         if(!fs.existsSync(path.join(__dirname, junitDir))) {
            fs.mkdirSync(path.join(__dirname, junitDir));
         }
      }

      config.plugins.push(require("./karma-junit-reporter"));
      config.reporters.push("junit");
      config.junitReporter = {
         outDir: junitDir,
         package: 'angboot.web.client.unit'
      };
   }
};