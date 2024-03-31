import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false
}

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
    loadTheme: (state, action) => {
      state.darkTheme = action.payload;
    }
  }
});

export const { switchTheme, loadTheme } = themeSlice.actions;

export default themeSlice.reducer;