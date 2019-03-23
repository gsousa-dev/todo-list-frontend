// @flow

import React from 'react';
import TodosContainer from '../containers/TodosContainer';
import AddTodo from '../containers/AddTodo';
import '../scss/App.scss';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodosContainer />
    </div>
  )
}

export default App;
