// @flow

import React from 'react';
import Todo from './Todo';
import { ITodo } from '../flow/models/todo.model';
import { fetchTodos } from '../actions/todos';

interface Props {
  todos: ITodo[];
  isFetching: boolean;
  dispatch: Function;
}

function TodoList(props: Props) {
  const { todos, isFetching } = props;

  if (isFetching) {
    return 'Loading..';
  } else if (!isFetching && !todos.length) {
    return 'No results';
  }

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList;
