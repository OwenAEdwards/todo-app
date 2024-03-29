import React from 'react';

// Define a functional component named TodosList that renders a list of todos
const TodosList = ({ todos, setTodos, setEditTodo }) => {
  // Function to handle toggling a todo's completion status
  const handleComplete = (todo) => {
    // Update the todos state using a map function to find and update the completion property
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          // Toggle the 'completed' property using the spread operator
          return {... item, completed: !item.completed}
        }
        return item;
      })
    );
  }
  // Function to handle initiating the editing of a todo
  const handleEdit = ({ id }) => {
    // Find the todo in the 'todos' array with the matching ID
    const findTodo = todos.find((todo) => todo.id === id);
    // Trigger editing by setting the 'editTodo' state with the found todo
    setEditTodo(findTodo);
  }
  // Function to handle deleting a todo
  const handleDelete = ({ id }) => {
    // Remove the todo from the 'todos' state using the filter method
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
              <i className="fa fa-check-circle"></i>
            </button>
          </div>
          <div>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <i className="fa fa-edit"></i>
            </button>
          </div>
          <div>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

// Export the TodosList component
export default TodosList;