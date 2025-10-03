const fs = require("fs");
function readFileCb() {  //This is not a raw async function. It is just a wrapper function around a pre-built async function. So, readFileCb() will not mess with the OS but only fs.readFile() will.
  return new Promise(function (resolve) {
    fs.readFile("input.txt", "utf-8", function (err, data) {
      //The data has already been retrived. But this is resolve will still work asynchronously.
      console.log("Obtained");
      resolve(data);
      console.log("After Obtained");
    });
  });
}
function onDone(data) {
  console.log(data);
}
console.log("Output 1:");
const a = readFileCb();
console.log(a); //Promise is synchronously returned even though data is not returned yet. So, the state of the promise is <pending>.
a.then(); //This is asynchronous. It will now retrive the data however we haven not told it yet what to do with the data.
a.then(onDone); //This will print the data.

console.log("Output 2:");
readFileCb().then(onDone);
