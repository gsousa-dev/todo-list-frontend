// @flow

import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { editTodo } from '../actions/edit-todo';
import { deleteTodo } from '../actions/delete-todo';
import { fetchTodos } from '../actions/fetch-todos';

class TodosContainer extends React.Component {
  componentDidMount = () => this.props.fetchTodos()

  handleCheckboxChange = (e) => {
    const filter = (e.target.checked) ? 'INCOMPLETE' : 'ALL';

    this.props.fetchTodos(filter)
  }
  
  render = () => (
    <div>
      <TodoList
        todos={this.props.todos}
        isFetching={this.props.isFetching}
        editTodo={this.props.editTodo}
        deleteTodo={this.props.deleteTodo}
      />
  
      <input type="checkbox" onChange={this.handleCheckboxChange} />Hide Completed
    </div>
  )
}


function mapStateToProps(state) {
  return {
    todos: state.todoReducers.fetchTodos.get('todos'),
    isFetching: state.todoReducers.fetchTodos.get('isFetching')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: (filter, orderBy) => dispatch(fetchTodos(filter, orderBy)),
    editTodo: (id, description, state) => dispatch(editTodo(id, description, state)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer)