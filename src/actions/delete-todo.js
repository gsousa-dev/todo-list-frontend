// @flow

import { ITodo } from '../flow/models/todo.model';
import { fetchTodos } from './fetch-todos';

export const DELETE_TODO_START   = 'DELETE_TODO_START';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_ERROR   = 'DELETE_TODO_ERROR';
export const DELETE_TODO_FINISH  = 'DELETE_TODO_FINISH';

export function startDeletingTodo() {
  return {
    type: DELETE_TODO_START,
    isDeleting: true
  }
}

export function successDeletingTodo(deletedTodo: ITodo) {
  return {
    type: DELETE_TODO_SUCCESS,
    deletedTodo
  }
}

export function errorDeletingTodo(error: any) {
  return {
    type: DELETE_TODO_ERROR,
    error
  }
}

export function finishedDeletingTodo() {
  return {
    type: DELETE_TODO_FINISH,
    isDeleting: false
  }
}

export function deleteTodo(todo: ITodo) {
  return async (dispatch: Function) => {
    dispatch(startDeletingTodo());

    try {
      const res = await fetch(`http://localhost:3001/todo/${todo.id}`, {
        method: 'DELETE'
      });

      if (res.status === 200) {
        dispatch(successDeletingTodo(todo));
        dispatch(fetchTodos());
      } else if (res.status === 404) {
        dispatch(errorDeletingTodo());
      }
    } catch (error) {
      dispatch(errorDeletingTodo(error));
    } finally {
      dispatch(finishedDeletingTodo());
    }
  }
}
