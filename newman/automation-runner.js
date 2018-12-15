const newman = require("newman")
const { START, DONE } = require("./constants")

module.exports = {

    /**
     * NMRunner accepts an argument of options and it will pass into the Newman runner.
     * The options are not optional, they are required in-order to run the test. 
     * Options should contain 
     *      `reporters`, `environment`, `collection`, `timeoutRequest` etc.
     * @param {Object} options  
     * @return {void} `reports` 
     * @author Thando Ncube
     * @example
     *      options = {
     *          collection: "/path/to/collection.json",
     *          globals: "/path/to/globals.json",
     *          reporters: ["cli", "html", "junit"],
     *          ...
     *      }
     */
    
    runner: (options) => {
        newman.run(options)
        .on(START, function() {
            process.stdout.write("The runner has started\n")
        })
        .on(DONE, function(err, summary) {
            try {
                console.log(summary)
            } catch (err) {
                console.error(err)
            }
        })
    }

    // TODO: Compare schema to response
}
