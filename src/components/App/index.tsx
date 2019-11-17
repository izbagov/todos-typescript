import React from 'react';
import { connect } from 'react-redux';
import TextField from '../TextField';
import Todos from '../Todos';
import Footer from '../Footer';
import { Container } from './style';
import { VisibilityFilters } from '../../actions/app';
import { AppState } from '../../reducers';
import { ITodo } from '../../types/app';

interface Props {
  todos: ITodo[];
}

const App: React.FC<Props> = ({ todos }) => {
  return (
    <Container>
      <h2>Добавить задачу</h2>
      <TextField todos={todos} />
      <Todos todos={todos} />
      <Footer todos={todos} />
    </Container>
  );
};

const getVisibleTodos = (todos: ITodo[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state: AppState) => ({
  todos: getVisibleTodos(state.app.todos, state.filter)
});

export default connect(mapStateToProps)(App);
