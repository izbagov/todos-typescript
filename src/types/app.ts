export interface IAppState {
  filter: string;
  todos: ITodo[];
}

export interface ITodo {
  text: string;
  completed: boolean;
}

export const ADD_TODO = 'ADD_TODO';

interface AddTodo {
  type: typeof ADD_TODO;
  payload: ITodo;
}

export type AppActionTypes = AddTodo;
