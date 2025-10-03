//With callback functions (nesting)
const self_setTimeout = (fn, duration) => {
  setTimeout(fn, duration);
};

self_setTimeout(() => {
  console.log("First");
  self_setTimeout(() => {
    console.log("Second");
  }, 5000);
}, 2000);