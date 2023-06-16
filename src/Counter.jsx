import { useDispatch, useSelector } from "react-redux";
import { decrement, increment /* incrementAsync */ } from "./reducer";
// import { put } from "redux-saga/effects";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementAsync = () => {
    dispatch({ type: "counter/incrementAsync" });
  };

  // const handleIncrementAsync = () => {
  //   put(incrementAsync());
  // };

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementAsync}>Increment after 1 second</button>
    </>
  );
};

export default Counter;
