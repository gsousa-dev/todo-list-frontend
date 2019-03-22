// @flow

import React from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodosContainer />
    </div>
  )
}

export default App;
