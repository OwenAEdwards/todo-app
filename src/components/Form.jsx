import React, { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

// Functional component
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  // This function updates a todo item in the todos list
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      // Check if the current todo's id matches the id we want to update
      todo.id === id ? {title, id, completed} : todo
    );
    // Update the todos state with the new list
    setTodos(newTodo);
    // Clear the editTodo state to indicate editing is done
    setEditTodo("");
  }
  // This useEffect hook sets the input value based on the editTodo state
  useEffect(() => {
    if (editTodo) {
      // If editing a todo, set the input value to the todo's title
      setInput(editTodo.title);
    }
    else {
      // If not editing, clear the input value
      setInput("");
    }
  }, [setInput, editTodo]); // This dependency array ensures the effect runs when setInput or editTodo changes
  const onInputChange = (event) => {
    // Update the input state with the value entered in the input field
    setInput(event.target.value);
  }
  const onFormSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    if (!editTodo) {
      // If not editing a todo (adding a new one)
      setTodos([
        // Spread the existing todos list
        ...todos,
        // Add a new todo object with a unique id, the input value, and completed set to false
        {id: uuidv4(), title: input, completed: false}]);
      // Clear the input value after adding a new todo
      setInput("");
    }
    else {
      // If editing a todo, call the updateTodo function with the current input value and editTodo details
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type="text"
        placeholder="Enter a TODO item here..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {/* Conditionally render button text based on editTodo state */}
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
}

export default Form;