const fs = require("fs");
console.log("Before reading..................");
fs.readFile("input.txt", "utf-8", (err, data) => {
  //Async
  if (err) {
    console.log(err);
  }
  console.log(data);
});
console.log("After reading..................");
function delay() {
  let a = 0;
  for (let i = 0; i < 10000000000; i++) {
    a = a + 1;
  }
  console.log("done");
  return a;
}

delay(); //Sync
