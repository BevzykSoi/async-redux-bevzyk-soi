import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as todosActions from './todos.actions';

const items = createReducer([], {
  [todosActions.createTodoSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [todosActions.deleteTodoSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [todosActions.fetchTodosSuccess]: (action) => {
    return action.payload;
  },
});

const loading = createReducer(false, {
  [todosActions.createTodoRequest]: () => true,
  [todosActions.createTodoSuccess]: () => false,
  [todosActions.createTodoError]: () => false,

  [todosActions.deleteTodoRequest]: () => true,
  [todosActions.deleteTodoSuccess]: () => false,
  [todosActions.deleteTodoError]: () => false,

  [todosActions.fetchTodosRequest]: () => true,
  [todosActions.fetchTodosSuccess]: () => false,
  [todosActions.fetchTodosError]: () => false,
});

const error = createReducer(null, {
  [todosActions.createTodoError]: (_, { payload }) => payload,
  [todosActions.deleteTodoError]: (_, { payload }) => payload,
  [todosActions.fetchTodosError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  error,
});