import { IAppState, AppActionTypes, ADD_TODO } from '../types/app';

const initialState: IAppState = {
  filter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
};

const todoApp = (state = initialState, action: AppActionTypes): IAppState => {
  switch (action.type) {
    case ADD_TODO:
      return state;
    default:
      return state;
  }
};

export default todoApp;
