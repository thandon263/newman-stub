# Newman Stub 

Newman is a command line Collection Runner for Postman. 
It allows you to run and test a Postman Collection directly from the command line. 
It is built with extensibility in mind so that you can easily integrate it with your continuous integration servers and build systems. 

![](https://img.shields.io/node/v/newman.svg?style=for-the-badge) ![](https://img.shields.io/npm/l/m.svg?style=for-the-badge) ![](https://img.shields.io/npm/collaborators/newman.svg?style=for-the-badge)




Newman maintains feature parity with Postman and allows you to run collections the way they are executed inside the collection runner in the Postman app.

There is so much information on Newman and the the thing that you can do with this tool 
are amazing. This makes automation easy. Basically running collections and test reports are stored 
on your application and also you have reports on the commandline.
This is very useful if you are planning to run multiple collections at once.

## Usage 

Install the module using `npm install newman-stub` andd then import the module into any folder on your computer and implement the `newman-stub` module to help with your automation for api-level unit tests. Spend at least a few minutes
Looking at the code and just add your `options`

```JavaScript

    const NMR = require('newman-stub') // for Node_js

    // or

    import NMR from "newman-stub" // ES6

```
## Getting Started 

When you are working with newman runner, I guess you should have atleast written some tests in your collection.
So before you import your collection write some tests inside postman. When you are done writing test import the collection and add other options to your object and then run the project.

```JavaScript

    const options = {
        collection: require('example/collection.json'),
        globals: {
            "value": "1"
        },
        reporters: ["cli", "html"],
        timeoutRequest: 3000,
        bail: true
    }

    NMR.runner(options)

```
## License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. [License](./LICENSE)

Permissions: √ Commercial use √ Modification √ Distribution √ Private use

