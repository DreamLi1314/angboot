// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const fs = require('fs');
const path = require('path');

module.exports = function (config) {
  const addJunitReporter =
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
      const distDir = "./dist";
      let junitDir = '../target/test-results';

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