function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function displayResult(num1, num2, func) {
  console.log("result of the sum is: ", func(num1, num2));
}

// You are only allowed to call one function after this
// How will you display Result of a sum?

displayResult(2, 43, sum);

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a,b,c){
    return a*b*c;
}

function displayResult2(a, b, func) {
  return func(a, b);
}
console.log(displayResult2(2, 3, sum));
console.log(displayResult2(2, 3, sub));
console.log(displayResult2(2, 3, mul));

//setTimeout(function to call, number of milliseconds you need to wait before calling the function)

setTimeout(function () {
  console.log("Hello World");
}, 2000 );