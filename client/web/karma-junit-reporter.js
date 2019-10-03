/*
 * Copyright (c) 2017, InetSoft Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to InetSoft Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */

"use strict";

const path = require("path");
const { JUnitReportBuilder }  = require("./junit-report-builder");

const JUnitReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
   const junitConfig = config.junitReporter || {};
   const builder = new JUnitReportBuilder(
      helper.normalizeWinPath(path.resolve(config.basePath, junitConfig.outDir || ".")),
      junitConfig.prefix, junitConfig.package, true);
   let currentSuite = null;

   baseReporterDecorator(this);

   this.onSpecComplete = function(browser, result) {
      const startTime = new Date(Date.now() - result.time);

      if(result.suite[0] !== currentSuite) {
         builder.endSuite();
         builder.startSuite(currentSuite = result.suite[0], startTime);
      }

      builder.startSpec(result.description, startTime);
      builder.endSpec(
         !result.success,
         result.skipped || result.disabled || result.pending,
         result.success ? null : result.log.join("\n"));
   };

   this.onExit = function(done) {
      builder.endSuite();
      builder.close();
      done();
   };
};

JUnitReporter.$inject = ["baseReporterDecorator", "config", "logger", "helper", "formatError"];

module.exports = {
   "reporter:junit": ["type", JUnitReporter]
};
