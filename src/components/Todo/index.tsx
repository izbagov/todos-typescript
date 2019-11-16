import React from 'react';
import { connect } from 'react-redux';
import { Container, Status, Text } from './style';
import { toggleTodo } from '../../actions/app';
import { ITodo, AppActionTypes } from '../../types/app';
import { Dispatch } from 'redux';

interface Props extends ITodo {
  toggle: (id: number) => void;
}

const Todo: React.FC<Props> = ({ id, text, completed, toggle }) => {
  return (
    <Container onClick={() => toggle(id)}>
      <Text>{text}</Text>
      {completed && <Status role="img">✅</Status>}
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>) => {
  return {
    toggle: (id: number) => dispatch(toggleTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(Todo);
