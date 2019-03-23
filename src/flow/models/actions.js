// @flow

import { FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR, FETCH_TODOS_FINISH } from '../../actions/fetch-todos';
import { ADD_TODO_START, ADD_TODO_SUCCESS, ADD_TODO_ERROR, ADD_TODO_FINISH } from '../../actions/add-todo';
import { EDIT_TODO_START, EDIT_TODO_SUCCESS, EDIT_TODO_ERROR, EDIT_TODO_FINISH } from '../../actions/edit-todo';
import { DELETE_TODO_START, DELETE_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_FINISH } from '../../actions/delete-todo';

import { ITodo } from './todo.model';

export interface IFetchTodosAction {
  type: typeof FETCH_TODOS_START | typeof FETCH_TODOS_SUCCESS | typeof FETCH_TODOS_ERROR | typeof FETCH_TODOS_FINISH;
  isFetching: boolean;
  response: ITodo[];
  error: { message: string, stack: TypeError };
}

export interface IAddTodoAction {
  type: typeof ADD_TODO_START | typeof ADD_TODO_SUCCESS | typeof ADD_TODO_ERROR | typeof ADD_TODO_FINISH;
  response: ITodo;
  isAdding: boolean;
  error: { message: string, stack: TypeError };
}

export interface IEditTodoAction {
  type: typeof EDIT_TODO_START | typeof EDIT_TODO_SUCCESS | typeof EDIT_TODO_ERROR | typeof EDIT_TODO_FINISH;
  response: ITodo | Error;
  isEditing: boolean;
  error: { message: string, stack: TypeError };
}

export interface IDeleteTodoAction {
  type: typeof DELETE_TODO_START | typeof DELETE_TODO_SUCCESS | typeof DELETE_TODO_ERROR | typeof DELETE_TODO_FINISH,
  deletedTodo: ITodo;
  isDeleting: boolean;
  error: { message: string, stack: TypeError };
}