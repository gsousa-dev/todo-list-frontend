// @flow

import { ITodo } from '../flow/models/todo.model';

import { Map, List } from 'immutable';

export const FETCH_TODOS_START   = 'FETCH_TODOS_START';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_ERROR   = 'FETCH_TODOS_ERROR';
export const FETCH_TODOS_FINISH  = 'FETCH_TODOS_FINISH';

export function startFetchingTodos() {
  return {
    type: FETCH_TODOS_START,
    isFetching: true
  }
}

export function successFetchingTodos(todos: ITodo[]) {
  return {
    type: FETCH_TODOS_SUCCESS,
    response: todos
  }
}

export function errorFetchingTodos(error: any) {
  return {
    type: FETCH_TODOS_ERROR,
    error
  }
}

export function finishedFetchingTodos() {
  return {
    type: FETCH_TODOS_FINISH,
    isFetching: false
  }
}

export function fetchTodos(filter = 'ALL', orderBy = 'DATE_ADDED') {
  return async (dispatch: Function) => {
    dispatch(startFetchingTodos());

    try {
      const res = await fetch(`http://localhost:3001/todos?filter=${filter}&orderBy=${orderBy}`);

      dispatch(successFetchingTodos(await res.json()));
    } catch (error) {
      dispatch(errorFetchingTodos(error));
    } finally {
      dispatch(finishedFetchingTodos());
    }
  }
}
