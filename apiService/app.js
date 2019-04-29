/*global require */

var express = require("express"),
    app = express(),
    taskList = [],
    bodyParser = require("body-parser"),
    validationMiddleware = require("validationMiddleware"),
    config = require("config");

app.listen(config.port);
app.get("/list", function (req, res) {
    res.send(taskList);
});
app.use(bodyParser.urlencoded({
    type: "application/x-www-form-urlencoded",
    extended: false
}));

// For the post method the app parses the post data for "task" property and pushes it to the response JSON.
app.post("/task", [validationMiddleware, function (req, res) {
    var task = req.body.task;
    taskList.push(req.body.task);
    res.send(taskList);
}]);

// Adding an endpoint for updating the task list.
// PUT "task/<id>"
app.put("/task/:task_index", [validationMiddleware, function (req, res) {
    var index = req.params.task_index;
    taskList[index] = req.body.task;
    res.send(taskList);
}]);

// An endpoint for deleting the task.
// DELETE "task/<id>"
app.delete("/task/:task_index", function (req, res) {
    var index = req.params.task_index;
    taskList.splice(index, 1);
    res.send(taskList);
});
