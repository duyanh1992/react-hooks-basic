import React, { useState } from 'react';
import './App.css';
import ColorBox from './components/BoxColor';
import TodoList from './components/TodoList';

function App() {
  const [totoList, setTodoList] = useState([
    { id: 1, name: 'Reading books' },
    { id: 2, name: 'Coding React Js' },
    { id: 3, name: 'Going for a walk' }
  ]);

  function handleTodoClick(todoId) {
    const index = totoList.findIndex(todo => todo.id === todoId);

    const newState = [...totoList];
    newState.splice(index, 1);
    setTodoList(newState);
  }

  return (
    <div className="app">
      <h1>React hooks basic</h1>

      {/* <ColorBox />*/}

      <TodoList todos={totoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
