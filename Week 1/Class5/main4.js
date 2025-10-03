const fs = require("fs");
function readFileCb(cb) {
  fs.readFile("input.txt", "utf-8", function (err, data) {
    console.log("Obtained");
    cb(data);
    console.log("After Obtained");
  });
}
function onDone(data) {
  console.log(data);
}
readFileCb(onDone);
