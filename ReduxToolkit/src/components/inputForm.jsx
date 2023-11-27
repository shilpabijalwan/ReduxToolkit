import React, { useState } from "react";
import { addTodo } from "../Feature/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function InputForm() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <div className="p-3 m-auto w-fit">
      <form action="" onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="add Todo"
          className="rounded-md px-2 py-1 bg-slate-100 text-slate-950 mr-3"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="border border-white px-3 py-1 rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
}
