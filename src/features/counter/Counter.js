import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { Link } from "react-router-dom";


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="p-4">
        <button onClick={() => dispatch(increment())} className="btn btn-info">
          {" "}
          increment
        </button>
        <span className="px-4">{count}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-outline-info"
        >
          {" "}
          decrement
        </button>
        <Link to="/todoList">
          <button className=" btn btn-danger">display </button>
        </Link>
      </div>
    </div>
  );
};

export default Counter;
