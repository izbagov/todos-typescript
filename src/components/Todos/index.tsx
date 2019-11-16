import React from 'react';
import Todo from '../Todo';
import { ITodo } from '../../types/app';

interface Props {
  todos: ITodo[];
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default Todos;
