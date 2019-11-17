import React from 'react';
import { ITodo } from '../../types/app';
import { Container } from './styles';

interface Props {
  todos: ITodo[];
}

const Footer: React.FC<Props> = ({ todos }) => {
  return (
    <Container>
      {todos.length} {todos.length <= 1 ? 'Item' : 'Items'} left
    </Container>
  );
};

export default Footer;
