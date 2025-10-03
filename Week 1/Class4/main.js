function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, callback) {
  console.log(callback);
  console.log(a, "and", b);
  return callback(a) + callback(b);
}

console.log(sumOfSomething(2, 3, square));
console.log(sumOfSomething(2, 3, cube));
console.log(
  sumOfSomething(2, 3, function(n) {
    return n * n * n * n;
  })
);
