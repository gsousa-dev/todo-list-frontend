// @flow

import { Map, List } from 'immutable';

import { FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR, FETCH_TODOS_FINISH } from '../actions/fetch-todos';
import { ADD_TODO_START, ADD_TODO_SUCCESS, ADD_TODO_ERROR, ADD_TODO_FINISH } from '../actions/add-todo';
import { EDIT_TODO_START, EDIT_TODO_SUCCESS, EDIT_TODO_ERROR, EDIT_TODO_FINISH } from '../actions/edit-todo';
import { DELETE_TODO_START, DELETE_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_FINISH } from '../actions/delete-todo';

import { IFetchTodosAction, IAddTodoAction, IEditTodoAction, IDeleteTodoAction } from '../flow/models/actions';
import { combineReducers } from "redux";

function fetchTodos(
  state = Map({ todos: List(), isFetching: false, error: null }),
  action: IFetchTodosAction
) {
  switch (action.type) {
    case FETCH_TODOS_START:
      return state.set('isFetching', action.isFetching);
    case FETCH_TODOS_SUCCESS:
      return state.set('todos', action.response);
    case FETCH_TODOS_ERROR:
      return state.set('error', action.error.message);
    case FETCH_TODOS_FINISH:
      return state.set('isFetching', action.isFetching)
    default:
      return state;
  }
}

function addTodo(
  state = Map({ isAdding: false, error: null }),
  action: IAddTodoAction
) {
  switch (action.type) {
    case ADD_TODO_START:
      return state.set('isAdding', action.isAdding);
    case ADD_TODO_SUCCESS:
      return state.set('addedTodo', action.response);
    case ADD_TODO_ERROR:
      return state.set('error', action.error.message);
    case ADD_TODO_FINISH:
      return state.set('isAdding', action.isAdding);
    default:
      return state;
  }
}

function editTodo(
  state = Map({ isEditing: false, error: null}),
  action: IEditTodoAction
) {
  switch (action.type) {
    case EDIT_TODO_START:
      return state.set('isEditing', action.isEditing);
    case EDIT_TODO_SUCCESS:
      return state.set('editedTodo', action.response);
    case EDIT_TODO_ERROR:
      return state.set('error', action.error.message);
    case EDIT_TODO_FINISH:
      return state.set('isEditing', action.isEditing);
    default:
      return state;
  }
}

function deleteTodo(
  state = Map({ isDeleting: false, error: null }),
  action: IDeleteTodoAction
) {
  switch (action.type) {
    case DELETE_TODO_START:
      return state.set('isDeleting', action.isDeleting);
    case DELETE_TODO_SUCCESS:
      return state.set('deletedTodo', action.deletedTodo);
    case DELETE_TODO_ERROR:
      return state.set('error', action.error.message);
    case DELETE_TODO_FINISH:
      return state.set('isDeleting', action.isDeleting);
    default:
      return state;
  }
}

export default combineReducers({
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo
})
