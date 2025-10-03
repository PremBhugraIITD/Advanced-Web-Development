let count = 0;

const increment = () => {
  console.log("Count:", count);
  count++;
  setTimeout(() => {
    increment();
  }, 1000);
};

setTimeout(()=>{
    increment();
}, 1000);
