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

const fs = require("fs");
const path = require("path");
const builder = require("xmlbuilder");

function captureStream(stream, callback) {
   const oldWrite = stream.write;

   stream.write = (function(write) {
      return function(string, encoding, fd) {
         write.apply(stream, arguments);
         callback(string, encoding, fd);
      }
   })(stream.write);

   return function() {
      stream.write = oldWrite;
   }
}


const JUnitReportBuilder = function(outDir, prefix, pkg, captureOutput) {
   this._outDir = outDir || ".";
   this._prefix = prefix || "TEST-";
   this._package = pkg || "";
   this._currentSuite = null;
   this._currentSpec = null;
   const _stdout = this._stdout = [];
   const _stderr = this._stderr = [];
   this._stdoutHook = null;
   this._stderrHook = null;

   if(captureOutput) {
      this._stdoutHook = captureStream(process.stdout, function(string) {
         _stdout.push(string);
      });
      this._stderrHook = captureStream(process.stderr, function(string) {
         _stderr.push(string);
      });
   }
};

JUnitReportBuilder.prototype.close = function() {
   if(this._stdoutHook) {
      this._stdoutHook();
   }

   if(this._stderrHook) {
      this._stderrHook();
   }
};

JUnitReportBuilder.prototype.startSuite = function(name, startTime) {
   this._writeSuite();
   this._createSuite(name, startTime);
};

JUnitReportBuilder.prototype.endSuite = function() {
   this._writeSuite();
};

JUnitReportBuilder.prototype.startSpec = function(name, startTime) {
   if(!this._currentSuite) {
      this._createSuite("Featured specs", startTime);
   }

   this._createSpec(name, startTime);
};

JUnitReportBuilder.prototype.endSpec = function(failed, skipped, message) {
   this._updateTime(this._currentSpec, new Date());
   this._currentSpec.failed = failed;
   this._currentSpec.skipped = skipped;
   this._currentSpec.message = message;
   this._currentSuite.tests++;

   if(this._currentSpec.failed) {
      this._currentSuite.failures++;
   }

   if(this._currentSpec.skipped) {
      this._currentSuite.skipped++;
   }

   this._currentSuite.specs.push(this._currentSpec);
   this._currentSpec = null;
};

JUnitReportBuilder.prototype.getFilePath = function(name, suffix) {
   const fqn = this._getFullyQualifiedName(name);
   suffix = suffix || ".xml";
   return path.join(this._outDir, this._prefix + fqn + suffix);
};

/**
 * @private
 */
JUnitReportBuilder.prototype._getFullyQualifiedName = function(name) {
   return (this._package && this._package.length ? this._package + "." : "") + name;
};

/**
 * @private
 */
JUnitReportBuilder.prototype._createSuite = function(name, startDate) {
   this._currentSuite = {
      name: this._getFullyQualifiedName(name),
      file: this.getFilePath(name),
      hostname: "localhost",
      tests: 0,
      errors: 0,
      failures: 0,
      skipped: 0,
      startTime: startDate || new Date(),
      timestamp: null,
      time: 0,
      specs: []
   };
};

/**
 * @private
 */
JUnitReportBuilder.prototype._createSpec = function(name, startDate) {
   this._currentSpec = {
      classname: this._currentSuite.name,
      name: name,
      startTime: startDate || new Date(),
      timestamp: null,
      time: 0,
      skipped: false,
      failed: false,
      message: null
   };
};

/**
 * @private
 */
JUnitReportBuilder.prototype._updateTime = function(obj, endTime) {
   const pad = function(n) { return n < 10 ? '0'+n : n; };

   obj.time = (endTime.getTime() - obj.startTime.getTime()) / 1000.0;
   obj.timestamp = obj.startTime.getFullYear() + '-' +
      pad(obj.startTime.getMonth()+1) + '-' +
      pad(obj.startTime.getDate()) + 'T' +
      pad(obj.startTime.getHours()) + ':' +
      pad(obj.startTime.getMinutes()) + ':' +
      pad(obj.startTime.getSeconds());
};

/**
 * @private
 */
JUnitReportBuilder.prototype._writeSuite = function() {
   if(this._currentSuite) {
      this._updateTime(this._currentSuite, new Date());
      const root = builder.create("testsuite");
      root.att("name", this._currentSuite.name);
      root.att("hostname", this._currentSuite.hostname);
      root.att("tests", this._currentSuite.tests);
      root.att("errors", this._currentSuite.errors);
      root.att("failures", this._currentSuite.failures);
      root.att("skipped", this._currentSuite.skipped);
      root.att("timestamp", this._currentSuite.timestamp);
      root.att("time", this._currentSuite.time);

      this._currentSuite.specs.forEach((spec) => {
         const elem = root.ele("testcase");
         elem.att("classname", spec.classname);
         elem.att("name", spec.name);
         elem.att("time", spec.time);

         if(spec.skipped) {
            elem.ele("skipped");
         }

         if(spec.failed) {
            elem.ele("failure").dat(spec.message);
         }
      });

      root.ele("system-out").dat(this._stdout.join(""));
      root.ele("system-err").dat(this._stderr.join(""));

      const xml = root.end({pretty: true});
      fs.writeFileSync(this._currentSuite.file, xml);
      this._currentSuite = null;
   }

   this._stdout.splice(0, this._stdout.length);
   this._stderr.splice(0, this._stderr.length);
};

module.exports.JUnitReportBuilder = JUnitReportBuilder;