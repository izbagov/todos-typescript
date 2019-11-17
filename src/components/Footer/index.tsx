import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ITodo } from '../../types/app';
import { AppState } from '../../reducers';
import { setFilter, VisibilityFilters } from '../../actions/app';
import { Container, Count, Filters, Link } from './styles';

interface Props {
  todos: ITodo[];
  filter: string;
  setFilter: (filter: string) => void;
}

const Footer: React.FC<Props> = ({ todos, filter, setFilter }) => {
  return (
    <Container>
      <Count>
        {todos.length} {todos.length <= 1 ? 'Item' : 'Items'} left
      </Count>
      <Filters>
        <Link
          active={VisibilityFilters.SHOW_ALL === filter}
          onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}
        >
          All
        </Link>
        <Link
          active={VisibilityFilters.SHOW_ACTIVE === filter}
          onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}
        >
          Active
        </Link>
        <Link
          active={VisibilityFilters.SHOW_COMPLETED === filter}
          onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}
        >
          Completed
        </Link>
      </Filters>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setFilter: (filter: string) => dispatch(setFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
