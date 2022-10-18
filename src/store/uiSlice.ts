import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isDarkMode: boolean;
}

const initialState: UiState = {
  isDarkMode: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    enableDarkMode: (state) => {
      state.isDarkMode = true;
    },
    disabeDarkMode: (state) => {
      state.isDarkMode = false;
    },
  },
});

export const { toggleDarkMode, enableDarkMode, disabeDarkMode } = uiSlice.actions;
export default uiSlice.reducer;
