import classes from './Counter.module.css';
import { useSelector } from 'react-redux';

const Counter = () => {
  // Return the state slice that we need
  // This automatically subscribes to the store
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
