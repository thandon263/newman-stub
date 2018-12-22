const NMR = require("../newman/automation-runner")

let collection = require("./collection.json"),
    reporters = ["cli", "html"],
    timeoutRequest = 3000

// This is a test using 
// GET /pokeapi.co/api/v2/pokemon/
NMR.runner({ collection, timeoutRequest })