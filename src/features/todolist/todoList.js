import React, { useState } from "react";
import {
  useGetTodoQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} from "./todoListSlice";
import { Link, useParams } from "react-router-dom";

const TodoList = () => {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess } = useGetTodoQuery();

  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [createTodo] = useCreateTodoMutation();
  console.log(data);
  const [val, setVal] = useState();
  const [hope, setHope] = useState("");
  let value;
  if (isSuccess) {
    value = data.data;
    console.log(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(hope);
    createTodo({ todoName: hope, isComplete: false });
  };
  // const handleClick = () => {

  //   useDeleteTodoMutation(id);
  // };

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setHope(e.target.value)} />
          <button className="btn btn-primary ms-3">create</button>
        </form>
      </div>
      {isSuccess ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">status</th>
              <th scope="col">data</th>
              <th scope="col">todo</th>
            </tr>
          </thead>
          {isSuccess ? (
            value.slice(270, 282).map((e) => (
              <tbody>
                <tr>
                  <th scope="row">{e._id}</th>
                  <td>{e.todoName}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={e.isComplete}
                      value={val}
                      id={e._id}
                      onChange={() =>
                        updateTodo({ id: e._id, isComplete: !e.isComplete })
                      }
                    />
                  </td>
                  <td>{e.isComplete ? "yes" : "no"}</td>
                  <td>{e.todo}</td>
                  <td>
                    {/* <Link to={`/todoList/${e._id}`}> */}
                    <button
                      onClick={() => deleteTodo({ id: e._id })}
                      className=" btn btn-danger btn-lg"
                    >
                      delete
                    </button>
                    {/* </Link> */}
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <></>
          )}
        </table>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default TodoList;
