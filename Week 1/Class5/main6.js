var d = new Promise((resolve) => {
  setTimeout(() => {
    resolve("foo");
  },2000);
});

function callback(){
    console.log("Callback executed")
};

console.log(d);
console.log(d.then(callback));
console.log(d.then(callback).then(callback));