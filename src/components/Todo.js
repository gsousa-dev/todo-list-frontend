// @flow

import React from 'react';
import '../scss/Todo.scss';

interface ITodo {
  id: string;
  description: string;
}

interface Props {
  todo: ITodo;
}

function Todo(props: Props) {
  const { todo } = props;
  const isEditing = false;

  const handleClick = () => {

  }

  return (
    <li className="Todo" onClick={handleClick}>
      {
        (!isEditing)
          ? todo.description
          : <input type="text" defaultValue={todo.description} />
      }
    </li>
  )
}

export default Todo;
