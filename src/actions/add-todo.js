// @flow

import { ITodo } from '../flow/models/todo.model';
import { fetchTodos } from './fetch-todos';

export const ADD_TODO_START   = 'ADD_TODO_START';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR   = 'ADD_TODO_ERROR';
export const ADD_TODO_FINISH  = 'ADD_TODO_FINISH';

export function startAddingTodo() {
  return {
    type: ADD_TODO_START,
    isAdding: true
  }
}

export function successAddingTodo(addedTodo: ITodo) {
  return {
    type: ADD_TODO_SUCCESS,
    response: addedTodo
  }
}

export function errorAddingTodo(error: any) {
  return {
    type: ADD_TODO_ERROR,
    error
  }
}

export function finishedAddingTodo() {
  return {
    type: ADD_TODO_FINISH,
    isAdding: false
  }
}

export function addTodo(description: string) {
  return async (dispatch: Function) => {
    dispatch(startAddingTodo());

    try {
      const res = await fetch('http://localhost:3001/todos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description })
      });

      if (res.status === 201) {
        dispatch(successAddingTodo(await res.json()));
        dispatch(fetchTodos());
      } else {
        dispatch(errorAddingTodo());
      }
    } catch (error) {
      dispatch(errorAddingTodo(error));
    } finally {
      dispatch(finishedAddingTodo());
    }
  }
}
