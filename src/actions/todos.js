// @flow

import { ITodo } from '../flow/models/todo.model';

export const FETCH_TODOS = 'FETCH_TODOS';

export function startFetchingTodos() {
  return {
    type: FETCH_TODOS,
    status: 'start'
  }
}

export function successFetchingTodos(todos: ITodo[]) {
  return {
    type: FETCH_TODOS,
    status: 'success',
    response: todos
  }
}

export function errorFetchingTodos(error: any) {
  return {
    type: FETCH_TODOS,
    status: 'error',
    error
  }
}

export function fetchTodos() {
  return (dispatch: Function) => {
    dispatch(startFetchingTodos());

    return fetch('http://localhost:3000')
      .then(
        (res) => res.json(),
        (err) => dispatch(errorFetchingTodos(err))
      )
      .then(
        (todos) => dispatch(successFetchingTodos(todos))
      );
  }
}
