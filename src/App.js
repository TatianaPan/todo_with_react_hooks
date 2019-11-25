import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo }) => {
  return (
    <>
      <li>{todo.text}</li>
      <button>Delete</button>
    </>
  )
}

function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn React Hooks', isComplteted: false }, { text: 'Master JavaScript' }
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

  return (
    <div className="App">
      <h1>TODO List</h1>
      <ul>{todos.map((todo, index) => {
        return <Todo
          key={index}
          index={index}
          todo={todo} />
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
