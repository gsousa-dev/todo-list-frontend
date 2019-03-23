// @flow

import React from 'react';
import Todo from './Todo';
import { ITodo } from '../flow/models/todo.model';
import { List } from 'immutable';

interface Props {
  todos: ITodo[];
  isFetching: boolean;
  editTodo: Function;
  deleteTodo: Function;
  fetchTodos: Function;
}

function TodoList(props: Props) {
  const { todos, isFetching, editTodo, deleteTodo, fetchTodos } = props;

  if (isFetching) {
    return 'Loading..';
  } else if (!isFetching && !todos.length) {
    return 'No results';
  }

  return (
    <div>
      <label>Todos</label>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
