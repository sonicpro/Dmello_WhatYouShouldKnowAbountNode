/*global describe, it, require */
var chai = require("chai"),
    expect = chai.expect,
    request = require("request"),
    config = require("config"),
    domain = "http://" + config.host + ":" + config.port;

describe("---Testing the task list api---", function (){
    it("POST: Task in list", function (done) {
        /**
         * Follow the request module documentation.
         * go to https://github.com/request/request */
        var options = {
            url: domain + "/task",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                task: "Hello world"
            }
        };
        request.post(options, function(error, response, body) {
            console.log("We got response: ", body);
            done();
        });
    });
});
