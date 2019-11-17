import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input } from './styles';
import { addTodo } from '../../actions/app';
import { ITodo } from '../../types/app';
import { Dispatch } from 'redux';

interface Props {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
}

const TextField: React.FC<Props> = ({ addTodo, todos }) => {
  const [text, setText] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      if (text.length) {
        const todo = {
          id: todos[todos.length - 1].id + 1,
          text,
          completed: false
        };

        addTodo(todo);

        setText('');
      }
    }
  };

  return (
    <Input
      type="text"
      onKeyDown={handleKeyDown}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
      value={text}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addTodo: (todo: ITodo) => dispatch(addTodo(todo))
  };
};

export default connect(null, mapDispatchToProps)(TextField);
