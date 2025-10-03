//With callback functions
import fs from "fs";
const self_readFile = (path, encoding, fn) => {
    console.log("Reading file...");
  fs.readFile(path, encoding, fn);
};

self_readFile("input.txt", "utf8", (err, data) => {
  console.log("Hi there!");
  console.log(data);
});
