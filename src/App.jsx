import { useState } from "react";
import TodoRow from "./components/TodoRow";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  /*let todosList = [
    {
      id: 45,
      name: "sahil",
      mobile: "6263408689",
      email: "sahilkhan468786@gmail.com",
    },
    {
      id: 48,
      name: "sahil1",
      mobile: "6263408689",
      email: "sahilkhan468786@gmail.com",
    },
    {
      id: 59,
      name: "sahil2",
      mobile: "6263408689",
      email: "sahilkhan468786@gmail.com",
    },
  ];*/

  const [todoItem, setTodo] = useState([]);

  const insertTodo = (newTodo) => {
    // Using uuidv4() from the uuid library to generate a unique identifier
    newTodo.id = uuidv4();
    setTodo((prevTodo) => [...prevTodo, newTodo]);
    setCurrentTodo(() => initialTodo);
  };
  const initialTodo = {
    id: 0,
    name: "",
    mobile: "",
    email: "",
  };
  const [currentTodo, setCurrentTodo] = useState(initialTodo);

  const updateCurrentTodo = (key, value) => {
    setCurrentTodo((prevTodo) => {
      return {
        ...prevTodo, // Copy the previous state
        [key]: value, // Update the specified property with the new value
      };
    });
  };
  const deleteTodo = (delid) => {
    setTodo((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== delid);
      //const { [delid]: _, ...updatedTodos } = prevTodoList;
      //return updatedTodos;
    });
  };

  //console.log(todosList);

  //console.log(insertTodo);

  return (
    <center id="main">
      <h1>Contact APP</h1>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <TodoInput
                inputName="name"
                inputValue={currentTodo.name}
                updateCurrentTodo={updateCurrentTodo}
              />
            </th>
            <th scope="col">
              <TodoInput
                inputName="mobile"
                inputValue={currentTodo.mobile}
                updateCurrentTodo={updateCurrentTodo}
              />
            </th>
            <th scope="col">
              <TodoInput
                inputName="email"
                inputValue={currentTodo.email}
                updateCurrentTodo={updateCurrentTodo}
              />
            </th>
            <th scope="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => insertTodo(currentTodo)}
              >
                Add
              </button>
            </th>
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {todoItem.map((todo, i) => (
            <TodoRow
              key={todo.id}
              index={i + 1}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </tbody>
      </table>
    </center>
  );
}

export default App;
