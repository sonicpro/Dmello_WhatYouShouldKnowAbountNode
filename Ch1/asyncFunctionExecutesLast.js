/*global setTimeout require */

var getTotal = require("getTotal");
console.log("log first");
function getData() {
    console.log("Output: ", getTotal([2, 2, 3]));
}
setTimeout(getData, 6000);
console.log("log last (supposedly).");
