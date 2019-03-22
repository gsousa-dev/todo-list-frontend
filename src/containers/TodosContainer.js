// @flow

import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

function mapStateToProps(state) {
  return {
    todos: state.todosReducers.fetchTodosReducer.get('todos'),
    isFetching: state.todosReducers.fetchTodosReducer.get('isFetching')
  }
}

export default connect(
  mapStateToProps
)(TodoList)