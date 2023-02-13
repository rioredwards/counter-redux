import { legacy_createStore } from 'redux';

// Reducer
const counterReducer = (state = { counter: 0, increaseAmount: 5 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      increaseAmount: state.increaseAmount,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      increaseAmount: state.increaseAmount,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      increaseAmount: state.increaseAmount,
    };
  }

  if (action.type === 'increaseAmount') {
    return {
      counter: state.counter,
      increaseAmount: action.amount,
    };
  }

  return state;
};

// Store
const store = legacy_createStore(counterReducer);

export default store;
