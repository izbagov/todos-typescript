export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export interface IAppState {
  filter: string;
  todos: ITodo[];
}

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface AddTodo {
  type: typeof ADD_TODO;
  payload: ITodo;
}

interface ToggleTodo {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type AppActionTypes = AddTodo | ToggleTodo;
