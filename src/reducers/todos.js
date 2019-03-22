// @flow

import { Map, List } from 'immutable';
import { FETCH_TODOS } from '../actions/todos';
import { ITodo } from '../flow/models/todo.model';
import { combineReducers } from "redux";

const initialState = Map({
  todos: List([]),
  isFetching: false,
  error: undefined
});

interface Action {
  type: typeof FETCH_TODOS;
  status: 'start' | 'success' | 'error';
  isFetching?: boolean;
  response?: ITodo[];
  error: any;
}

function fetchTodosReducer(state: Map = initialState, action: Action) {
  switch (action.status) {
    case 'start':
      return state.set('isFetching', true);
    case 'success':
      return state.merge({ 'todos': action.response, isFetching: false });
    case 'error':
      return state.merge({ error: action.error, isFetching: false });
    default:
      return state;
  }
}

export default combineReducers({
  fetchTodosReducer
})
