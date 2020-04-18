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

const { JUnitReportBuilder } = require("./junit-report-builder");
const fs = require("fs");

/**
 * Creates a new instance of JUnitReporter.
 *
 * @param config the reporter configuration.
 *
 * @constructor
 */
const JUnitReporter = function(config) {
   config = config || {};
   this.builder = new JUnitReportBuilder(config.outDir, config.prefix, config.package, true);
};

JUnitReporter.prototype.jasmineStarted = function(suiteInfo) {
};

JUnitReporter.prototype.jasmineDone = function() {
   try {
      this.builder.endSuite();
   }
   catch(error) {
      console.error("Failed to write suite results: ", error);
   }

   this.builder.close();
};

JUnitReporter.prototype.suiteStarted = function(result) {
   this.builder.startSuite(result.description);
};

JUnitReporter.prototype.suiteDone = function(result) {
   try {
      this.builder.endSuite();
   }
   catch(error) {
      console.error("Failed to write suite results: ", error);
   }
};

JUnitReporter.prototype.specStarted = function(result) {
   this.builder.startSpec(result.description);

   if(!browser.params) {
      browser.params = {};
   }

   browser.params.screenshotPath = this.builder.getFilePath(result.description, ".png");
};

JUnitReporter.prototype.specDone = function(result) {
   try {
      const failed = result.status === "failed";
      const skipped = result.status === "pending" || result.status === "disabled";
      let message = null;

      if(failed) {
         message = result.failedExpectations.map((e) => e.message).join("\n");

         if(browser.params.specScreenshot) {
            const file = this.builder.getFilePath(result.description, ".png");
            const stream = fs.createWriteStream(file);
            stream.write(new Buffer(img, "base64"));
            stream.end();
         }
      }

      this.builder.endSpec(failed, skipped, message);
   }
   catch(error) {
      console.error("Failed to write spec results: ", error);
   }
};

module.exports.JUnitReporter = JUnitReporter;
