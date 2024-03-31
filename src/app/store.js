import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '../features/theme/themeSlice';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
  }
});