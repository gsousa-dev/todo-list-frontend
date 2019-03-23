// @flow

import React from 'react';
import { ITodo } from '../flow/models/todo.model';
import { Map } from 'immutable';
import '../scss/Todo.scss';

interface Props {
  todo: ITodo;
  editTodo: Function;
  deleteTodo: Function;
}

interface State {
  data: Map;
}

export default class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: Map({
        isEditing: false,
        isChecked: (props.todo.state === 'COMPLETE') ? true : false 
      })
    };
  }

  get isEditing() { return this.state.data.get('isEditing') }
  get isChecked() { return this.state.data.get('isChecked') }

  toggleEditMode = (e) => {
    this.setState(({data}: Map) => ({
      data: data.update('isEditing', previousState => !previousState)
    }));
  }

  deleteTodo = (e) => this.props.deleteTodo(this.props.todo)

  handleCheckboxChange = (e) => this.props.editTodo(this.props.todo.id, null, 'COMPLETE')

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.editTodo(this.props.todo.id, e.target.value);
    }
  }

  render = () => (
    <li className="Todo" onClick={this.props.toggleEditMode} >
      <input
        type="checkbox"
        defaultChecked={this.isChecked}
        onChange={this.handleCheckboxChange}
        disabled={this.isChecked}
      />
    {
      (this.isEditing)
      ? <input
          autoFocus
          defaultValue={this.props.todo.description}
          onBlur={this.toggleEditMode}
          onKeyUp={this.handleKeyUp}
        />

      : <label onClick={this.toggleEditMode}>
          {this.props.todo.description}
        </label>
    }

      <button onClick={this.deleteTodo}>delete</button>
    </li>
  )
}