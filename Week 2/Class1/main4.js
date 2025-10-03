//Without callback functions (promisified function) (incorrect)
import fs from "fs";
const self_readFile = (path, encoding) => {
  let p = new Promise((resolve) => {
    console.log("Reading file...");
    fs.readFile(path, encoding, resolve); //undefined is printed in the console because the resolve function does not know how to handle the err and data arguments provided by fs.readFile. Instead, it treats the first argument (err) as the resolved value of the Promise
  });
  console.log(p);
  return p;
};

const s = self_readFile("input.txt", "utf8").then((err, data) => {
  console.log("Hi there!");
  console.log(data);
});

console.log(s);
