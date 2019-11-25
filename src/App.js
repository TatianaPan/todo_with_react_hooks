import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index, completeTask }) => {
  return (
    <>
      <li onClick={() => completeTask(index)} 
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}</li>
      <button>Delete</button>
    </>
  )
}

function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn React Hooks', isCompleted: false }, 
    { text: 'Master JavaScript', isCompleted: false }, 
    {text: 'Learn Ruby', isCompleted: false}
  ]);

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    console.log(value)
    addTodo(value);
    setValue('');
  }

  const addTodo = (text) => {
    setTodos([...todos, { text, isCompleted: false }])
  }

  const completeTask = index => {
     const newTodos = [...todos];
     newTodos[index].isCompleted = !newTodos[index].isCompleted;
     setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>TODO List</h1>
      <ul>{todos.map((todo, index) => {
        return <Todo
          key={index}
          index={index}
          todo={todo}
          completeTask={completeTask} />
      })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={e => setValue(e.target.value)}
          value={value} />
      </form>
    </div>
  );
}

export default App;
