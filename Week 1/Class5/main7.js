function asyncWaitPromiseFunction() {
  //asyncWaitPromiseFunction is a pseudo async function, not a raw one. It will not be handled by the Web APIs but only setTimeout() will be.
  //"await" until the thread of this particular function is executed. Rest of the code in this function will be executed synchronously.
  let p = new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Inside setTimeout");
    }, 5000);
    console.log("Before resolving");
    resolve("hi there"); //Even though it looks like it should be executed between "Before resolveing" and "After resolving", it is actually executed after the promise has been returned.
    //If .then() syntax is used then Promise object is returned (with the resolved value) but if async-await syntax is used then the resolved value is returned.
    console.log("After resolving");
  });
  return p;
}
async function main() {
  console.log("Before calling asyncWaitPromiseFunction");
  //Only the part inside the the async function that is after the await call is awaited (sent to the callback queue) until the promise is resolved. The rest of the code is executed synchronously.
  let value = await asyncWaitPromiseFunction();
  console.log("Promise resolved");
  console.log(value);
}
main();
function temp() {
  console.log("Helloooooooooooo");
}
setTimeout(temp, 2000);
let a = 0;
for (let i = 0; i < 1000000000; i++) {
  a++;
}
console.log(a);
