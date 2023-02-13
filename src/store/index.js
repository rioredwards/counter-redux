import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, increaseAmount: 5, showCounter: true };

// Reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    increaseAmount(state, action) {
      state.increaseAmount = action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Store
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
export const counterActions = counterSlice.actions;
