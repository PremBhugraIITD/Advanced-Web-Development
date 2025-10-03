//Without callback functions (promisified function) (correct)
import fs from "fs";
const self_readFile = (path, encoding) => {
  let p = new Promise((resolve) => {
    console.log("Reading file...");
    fs.readFile(path, encoding, (err, data) => {
      resolve(data);
      console.log("Hi!"); 
    });
  });
  console.log("First: ",p);
  return p;
};

const s = self_readFile("input.txt", "utf8").then((text) => { //This .then() part is sent to the callback queue.
  console.log("Hi there!");
  console.log(text);
});

console.log("Second: ",s);
