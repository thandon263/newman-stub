const NMR = require('./newman/automation-runner')
/**
 * @description - Newman is a command line Collection Runner for Postman. 
 * It allows you to run and test a Postman Collection directly from the command line. 
 * It is built with extensibility in mind so that you can easily integrate it with your continuous integration servers and build systems. 
 * Newman maintains feature parity with Postman and allows you to run collections the way they are executed inside the collection runner in the Postman app.
 * 
 * There is so much information on Newman and the the thing that you can do with this tool 
 * are amazing. This makes automation easy. Basically running collections and test reports are stored 
 * on your application and also you have reports on the commandline.
 * This is very useful if you are planning to run multiple collections at once.
 * 
 * @author Thando Ncube
 * @param {Object} options
 * @return Summary
 */

module.exports = NMR
