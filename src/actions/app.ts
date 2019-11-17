import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER } from '../actions/actionsTypes';
import { AppActionTypes, ITodo } from '../types/app';

export const addTodo = (todo: ITodo): AppActionTypes => ({
  type: ADD_TODO,
  payload: todo
});

export const toggleTodo = (id: number): AppActionTypes => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id: number): AppActionTypes => ({
  type: REMOVE_TODO,
  payload: id
});

export const setFilter = (filter: string): AppActionTypes => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
