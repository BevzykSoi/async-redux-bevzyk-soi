import { createAction } from '@reduxjs/toolkit';
 
export const createTodoRequest = createAction('todos/createTodoRequest');
export const createTodoSuccess = createAction('todos/createTodoSuccess');
export const createTodoError = createAction('todos/createTodoError');
 
export const deleteTodoRequest = createAction('todos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todos/deleteTodoError');
 
export const fetchTodosRequest = createAction('todos/fetchTodosRequest');
export const fetchTodosSuccess = createAction('todos/fetchTodosSuccess');
export const fetchTodosError = createAction('todos/fetchTodosError');