//Without callback functions (sequential code or promisified version)
const self_setTimeout = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const s = self_setTimeout(2000)
  .then(() => {
    console.log("First");
    return self_setTimeout(5000);
  })
  .then(() => {
    console.log("Second");
  });

console.log(s);
