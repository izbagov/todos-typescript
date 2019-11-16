import { ADD_TODO, TOGGLE_TODO, AppActionTypes, ITodo } from '../types/app';

export function addTodo(todo: ITodo): AppActionTypes {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function toggleTodo(id: number): AppActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}
