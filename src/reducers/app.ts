import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/actionsTypes';
import { IAppState, AppActionTypes } from '../types/app';

const initialState: IAppState = {
  todos: [
    {
      id: 0,
      text: 'Learn typescript using on practice',
      completed: true
    },
    {
      id: 1,
      text: 'Publish this to-do project on github',
      completed: false
    },
    {
      id: 2,
      text: 'Find job on React.js',
      completed: false
    }
  ]
};

const todoApp = (state = initialState, action: AppActionTypes): IAppState => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }

          return todo;
        })
      });
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      });
    default:
      return state;
  }
};

export default todoApp;
