const main = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Data received: ", data);
    });
};

main();
