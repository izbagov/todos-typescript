import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER } from '../actions/actionsTypes';

export interface IAppState {
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

interface RemoveTodo {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface SetFilter {
  type: typeof SET_VISIBILITY_FILTER;
  filter: string;
}

export type AppActionTypes = AddTodo | ToggleTodo | RemoveTodo | SetFilter;
