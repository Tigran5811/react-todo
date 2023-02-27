import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './reducers/todo';

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
