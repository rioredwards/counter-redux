import { legacy_createStore } from 'redux';

const initialState = { counter: 0, increaseAmount: 5, showCounter: true };

// Reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      increaseAmount: state.increaseAmount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      increaseAmount: state.increaseAmount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      increaseAmount: state.increaseAmount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increaseAmount') {
    return {
      counter: state.counter,
      increaseAmount: action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      increaseAmount: state.increaseAmount,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

// Store
const store = legacy_createStore(counterReducer);

export default store;
