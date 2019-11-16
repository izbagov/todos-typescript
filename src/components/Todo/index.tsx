import React from 'react';
import { Container } from './style';
import { ITodo } from '../../types/app';

const Todo: React.FC<ITodo> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Todo;
