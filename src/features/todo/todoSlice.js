import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo);
    },
    doneTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      })
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => 
        todo.id !== action.payload
      );
    },
    removeAll: (state) => {
      state.todos = [];
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      })
    },
    loadTodo: (state, action) => {
      state.todos = action.payload;
    },
  } 
});

export const { addTodo, doneTodo, removeTodo, removeAll, updateTodo, loadTodo } = todoSlice.actions;

export default todoSlice.reducer;