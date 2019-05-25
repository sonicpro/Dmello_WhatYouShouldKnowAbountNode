/*global describe, it, require */
var chai = require("chai"),
    expect = chai.expect,
    should = chai.should(),
    request = require("request"),
    config = require("config"),
    domain = "http://" + config.host + ":" + config.port,
    taskPayload = "Hello world";

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
                task: taskPayload
            }
        };
        request.post(options, function(error, response, body) {
            // "Schould be" conditions.
            response.statusCode.should.equal(200);

            // Expected conditions.
            expect(body).to.be.a("string");
            expect(body).to.include(taskPayload);
            console.log("We got response: ", body);
            done();
        });
    });
});
