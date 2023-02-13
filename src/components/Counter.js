import classes from './Counter.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index.js';

const Counter = () => {
  // Get the dispatch function from the Redux store
  // This is the function we'll use to dispatch actions
  const dispatch = useDispatch();
  // Return the state slice that we need
  // This automatically subscribes to the store
  const counter = useSelector((state) => state.counter);
  const increaseAmount = useSelector((state) => state.increaseAmount);
  const showCounter = useSelector((state) => state.showCounter);
  const [inputValue, setInputValue] = useState(increaseAmount);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(increaseAmount));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseAmountHandler = () => {
    dispatch(counterActions.increaseAmount(inputValue));
  };

  const handleInputChange = (enteredValue) => {
    if (isNaN(enteredValue)) return;
    const number = Number(enteredValue);
    setInputValue(number);
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter || 0}</div>
        </>
      )}
      <form
        className={classes.inputForm}
        onSubmit={(e) => {
          e.preventDefault();
          increaseAmountHandler();
        }}
      >
        <div className={classes.inputAndLabel}>
          <label htmlFor="amount">Increase Amount</label>
          <input
            id="amount"
            type="text"
            placeholder="Ex: 5"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          ></input>
        </div>
        <span className={classes.increaseAmount}>{increaseAmount}</span>
        <button>Submit</button>
      </form>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
