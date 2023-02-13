import { legacy_createStore } from 'redux';

// Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return state.counter + 1;
  }

  if (action.type === 'DECREMENT') {
    return state.counter - 1;
  }

  return state;
};

// Store
const store = legacy_createStore(counterReducer);

export default store;
