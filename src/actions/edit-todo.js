// @flow

import { ITodo } from '../flow/models/todo.model';
import { fetchTodos } from './fetch-todos';

export const EDIT_TODO_START   = 'EDIT_TODO_START';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const EDIT_TODO_ERROR   = 'EDIT_TODO_ERROR';
export const EDIT_TODO_FINISH  = 'EDIT_TODO_FINISH';

export function startEditingTodo() {
  return {
    type: EDIT_TODO_START,
    isEditing: true
  }
}

export function successEditingTodo(editedTodo: ITodo) {
  return {
    type: EDIT_TODO_SUCCESS,
    response: editedTodo
  }
}

export function errorEditingTodo(error: any) {
  return {
    type: EDIT_TODO_ERROR,
    error
  }
}

export function finishedEditingTodo() {
  return {
    type: EDIT_TODO_FINISH,
    isEditing: false
  }
}

export function editTodo(
  id: string,
  description?: string,
  state?: 'COMPLETE' | 'INCOMPLETE' = 'INCOMPLETE'
) {
  return async (dispatch: Function) => {
    dispatch(startEditingTodo());

    try {
      const res = await fetch(`http://localhost:3001/todo/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...(description && {description}),
          ...(state && {state})
        })
      });

      if (res.status === 200) {
        dispatch(successEditingTodo(await res.json()));
        dispatch(fetchTodos());
      } else if (res.status === 400) {
        dispatch(errorEditingTodo());
      } else if (res.status === 404) {
        dispatch(errorEditingTodo());
      }
    } catch (error) {
      dispatch(errorEditingTodo(error));
    } finally {
      dispatch(finishedEditingTodo());
    }
  }
}
