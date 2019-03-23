// @flow

import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/add-todo';

interface Props {
  dispatch: Function;
}

export function AddTodo(props: Props) {
  const { dispatch } = props;
  let input: HTMLInputElement;

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodo(e.target.value));
      input.value = '';
    }
  }

  return (
    <input
      defaultValue="" 
      ref={node => (input = node)}
      onKeyUp={handleKeyUp}
    />
  )
}

export default connect()(AddTodo);