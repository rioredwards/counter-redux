import classes from './Counter.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // Get the dispatch function from the Redux store
  // This is the function we'll use to dispatch actions
  const dispatch = useDispatch();
  // Return the state slice that we need
  // This automatically subscribes to the store
  const counter = useSelector((state) => state.counter);
  const increaseAmount = useSelector((state) => state.increaseAmount);
  const [inputValue, setInputValue] = useState(increaseAmount);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: increaseAmount });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const increaseAmountHandler = () => {
    console.log('inputValue', inputValue);
    dispatch({ type: 'increaseAmount', amount: inputValue });
  };

  const handleInputChange = (enteredValue) => {
    if (isNaN(enteredValue)) return;
    const number = Number(enteredValue);
    setInputValue(number);
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter || 0}</div>
      <div className={classes.value}>{increaseAmount}</div>
      <form
        className={classes.inputForm}
        onSubmit={(e) => {
          e.preventDefault();
          increaseAmountHandler();
        }}
      >
        <label htmlFor="amount">Increase Amount</label>
        <input
          id="amount"
          type="text"
          placeholder="Ex: 5"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        ></input>
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
