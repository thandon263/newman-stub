#!/usr/bin/env node

"use strict"

const newman = require("newman");
const fs = require("fs");
const path = require("path");
const { START, DONE } = require("./constants");

module.exports = {
  /**
     * NMRunner accepts an argument of options and it will pass into the Newman runner.
     * The options are not optional, they are required in-order to run the test. 
     * Options should contain 
     *      `reporters`, `environment`, `collection`, `timeoutRequest` etc.
     * @param {Object} options  
     * @return {void} `reports` 
     * @author dev36T
     * @description Responses directory is created to store API responses.
     * @example
     *      options = {
     *          collection: "/path/to/collection.json",
     *          globals: "/path/to/globals.json",
     *          reporters: ["cli", "html", "junit"],
     *          ...
     *      }
     */

  runner: options => {
    newman
      .run(options)
      .on(START, function() {
        process.stdout.write("The runner has started\n");
      })
      .on(DONE, function(err, summary) {
        try {
          // more work to do
          fs.mkdirSync(path.join("responses"));
          // Extract data stream from API
          let summaryObj = summary.run.executions[0].response.stream.toString();
        
          let filepath = `responses/json-response-${new Date()}.json`;  
          
          fs.writeFile(filepath, summaryObj, { encoding: 'utf8' }, function(err, data) {
            if (err) throw err
            process.stdout.write(
              "Created Response file.",
              "\nPath to Latest Response: ",
              filepath
            );
            return data;
          });
        } catch (err) {
          return err;
        }
      });
  }

  // TODO: Compare schema to response
};
