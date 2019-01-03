module.exports = {
    CreateFile: function(fs, filepath, data) {
        fs.writeFileSync(filepath, data, "utf-8")
        process.stdout.write("\nFinished Writing File to: ", filepath)
    },
    ImportFile: function(globalObject, schema) {
        // Always have your expected data as the first object in your Array
        /** { Postman_Globals } */
        if (globalObject) globalObject.values[0].value = JSON.stringify(schema);

        return globalObject;
    },
    ReadDirectory: function(fs, path) {
        var files = fs.readdirSync(path);
        return path + files.last();
    },
    GetSummary: function(fs, summary, Service, constant) {
        if (summary.globals) {
        let response = summary.globals.values.reference.expectedResponse.value
        let filepath = constant;
    
        Service.CreateFile(fs, filepath, response)
        }
    }
}