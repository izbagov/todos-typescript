import React from 'react';
import { connect } from 'react-redux';
import TextField from '../TextField';
import Todos from '../Todos';
import Footer from '../Footer';
import { Container } from './style';
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

const mapStateToProps = (state: AppState) => ({
  todos: state.app.todos
});

export default connect(mapStateToProps)(App);
