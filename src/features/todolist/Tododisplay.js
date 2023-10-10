import React from "react";
import { useGetTodoQuery } from "./todoListSlice";
import { useParams } from "react-router-dom";

const Tododisplay = () => {
    const { id } = useParams();
  const { data, error, isLoading, isSuccess } = useGetTodoQuery(id);
  //   console.log(data);

  const display = data.todos.find((x) => x.id === Number(id));
  return (
    <div>
      <p>{display.id}</p>
      <p>{display.todo}</p>
    </div>
  );
};

export default Tododisplay;
