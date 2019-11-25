import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index, completeTask, deleteTask }) => {
  return (
    <div className='todo-item'>
      <li onClick={() => completeTask(index)}
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}</li>
      <button id='delete' onClick={() => deleteTask(index)}>DELETE</button>
    </div>
  )
}

function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn React Hooks', isCompleted: false },
    { text: 'Master JavaScript', isCompleted: false },
    { text: 'Learn Ruby', isCompleted: false }
  ]);

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
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

  const deleteTask = index => {
    const todoList = [...todos];
    todoList.splice(index, 1);
    setTodos(todoList);
  }

  return (
    <div className="App">
      <div className='wrapper'>
      <div>
        <h1>TODO List</h1>
      </div>
      <div className='todo-list'>
        <ul>{todos.map((todo, index) => {
          return <Todo
            key={index}
            index={index}
            todo={todo}
            completeTask={completeTask}
            deleteTask={deleteTask} />
        })}
        </ul>
      </div>
      <div className='add-todo-section'>
        <form className='form-group' onSubmit={handleSubmit}>
          <input
            id='todo-input'
            type='text'
            placeholder='Add new task...'
            onChange={e => setValue(e.target.value)}
            value={value} />
          <button onClick={handleSubmit}>ADD</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default App;
