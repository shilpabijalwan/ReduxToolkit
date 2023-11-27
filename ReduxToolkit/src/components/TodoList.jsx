import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Feature/todo/todoSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((data) => {
    return data.todos;
  });
  //   console.log(todos);

  return (
    <div className="border">
      {todos.map((ele) => {
        return (
          <div
            className="border bg-red-300 text-gray-700 mb-3 flex justify-between px-5 py-2"
            key={ele.id}>
            <h1>{ele.name}</h1>
            <button
              className="text-sm rounded-xl p-2 border border-black px-4 text-zinc-100"
              onClick={() => dispatch(removeTodo(ele.id))}>
              ❌
            </button>
          </div>
        );
      })}
    </div>
  );
}
