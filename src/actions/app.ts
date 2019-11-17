import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/actionsTypes';
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
