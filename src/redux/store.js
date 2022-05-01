import { configureStore } from '@reduxjs/toolkit';

import todos from './todos/todos.reducer';

export const store = configureStore({
  reducer: {
    todos,
  },
});