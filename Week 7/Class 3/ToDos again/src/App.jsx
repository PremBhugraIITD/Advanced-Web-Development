import {
  atomFamily,
  selectorFamily,
  useRecoilValue,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import { todos } from "./todos.js";

const App = () => {
  const setTitleToDo1 = useSetRecoilState(todoAtomFamily(1));
  return (
    <>
      <h1>ToDo List</h1>
      <ToDo id={1} />
      <ToDo id={1} />
      <ToDo id={3} />
      <button
        onClick={() => {
          setTitleToDo1((todo) => {
            return {
              ...todo,
              title: "Updated Title",
            };
          });
        }}
      >
        Click To change ToDo 1 title
      </button>
    </>
  );
};

const ToDo = ({ id }) => {
  const currentToDo = useRecoilValueLoadable(todoAtomFamily(id));
  return currentToDo.state === "loading" ? (
    <>
      <p>Loading...</p>
    </>
  ) : (
    <>
      <h2>{currentToDo.contents.title}</h2>
      <p>{currentToDo.contents.body}</p>
    </>
  );
};

const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  //   default: (id) => {
  //     return todos.find((todo) => {
  //       return todo.id === id;
  //     });
  //   },
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => {
      return async () => {
        await new Promise((resolve) => {
          //Intentional delay to the response to render "loading..."
          setTimeout(resolve, 2000);
        });
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/" + id
        );
        const data = await response.json();
        return data;
      };
    },
  }),
});

export default App;
