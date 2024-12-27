import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';
import './App.css';

const App = () => {
  // State to hold the initial todo list, loaded from localStorage or set to an empty array
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  // State for user input
  const [input, setInput] = useState("");
  // State for todo list
  const [todos, setTodos] = useState(initialState);
  // State for edited todo
  const [editTodo, setEditTodo] = useState(null);
  // Persist todos in localStorage on changes with useEffect hook
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <h1>Owen is Gay</h1>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
