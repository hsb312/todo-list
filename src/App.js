import './App.css';
import List from './List';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const initailTodos = [
  {
    id: uuid(),
    todo: 'Todo-list 시작하기',
    completed: false
  }
]

function App() {
  const [todos, setTodo] = useState(initailTodos);

  const handleSubmit = (newTodo) => {
    const todo = {
      id: uuid(),
      todo: newTodo,
      completed: false
    }
    setTodo( (prevState) => [...prevState, todo] );
  }

  const deleteTodo = (id) => {
    setTodo( (prevState) => prevState.filter(todo => todo.id !== id) )
  }

  return (
    <div className='App'>
      <h1 id='heading'>To-Do List</h1>
      <List
        todos={todos}
        handleSubmit={handleSubmit}
        handleClickTodo={setTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
