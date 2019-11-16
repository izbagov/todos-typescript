import { ADD_TODO, AppActionTypes, ITodo } from '../types/app';

export function addTodo(todo: ITodo): AppActionTypes {
  return {
    type: ADD_TODO,
    payload: todo
  };
}
