import axios from "axios";

const main = () => {
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
    console.log("Data received: ", response.data);
  });
};

main();
