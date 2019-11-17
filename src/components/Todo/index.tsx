import React from 'react';
import { connect } from 'react-redux';
import { Container, Status, Text, Delete } from './style';
import { toggleTodo, removeTodo } from '../../actions/app';
import { ITodo, AppActionTypes } from '../../types/app';
import { Dispatch } from 'redux';

interface Props extends ITodo {
  toggle: (id: number) => void;
  removeTodo: (id: number) => void;
}

const Todo: React.FC<Props> = ({ id, text, completed, toggle, removeTodo }) => {
  const handleDeleteTodo = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    event.stopPropagation();
    removeTodo(id);
  };

  return (
    <Container onClick={() => toggle(id)}>
      <Text>{text}</Text>
      <Delete onClick={event => handleDeleteTodo(event, id)}>🗑️</Delete>
      {completed && <Status role="img">✅</Status>}
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>) => {
  return {
    toggle: (id: number) => dispatch(toggleTodo(id)),
    removeTodo: (id: number) => dispatch(removeTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(Todo);
