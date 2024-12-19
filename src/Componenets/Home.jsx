import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoComponent from "./ToDoComponent";
import { addToDo } from "../Slices/todoSlice";

function Home() {
    const[task, setTask] = useState("");

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos.tasks);

   function handleToDo(){
    const todoObj = {
        id: nanoid,
        todo : task,
        done : false,
    };
        dispatch(addToDo(todoObj));
   }

  return (
    <>
      <div div className="bg-slate-600">
        <h1 className="text-3xl text-center text-slate-200 font-bold">
          This is the best to do application{" "}
        </h1>
        <div className="flex flex-row justify-center align-middle py-10 gap-8">
          <input
            type="text"
            placeholder="Enter the text"
            className="text-black border-2 border-black px-9 py-4"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="border border-white px-8 py-4 text-white font-bold rounded-md hover:bg-slate-500" onClick={()=> handleToDo()}>
            Add To Do
          </button>
        </div>
            
        <div className="flex justify-between px-40 w-full min-h-[76vh]">
          <div className="flex flex-col gap-4 w-1/2">
           {todos.map((todo) => {
            if(!todo.done){
              return (
                <ToDoComponent
                key = {todo.id}
                title = {todo.todo}
                id= {todo.id}
                done = {todo.done}
                />
            );
            }
         
           })}
          </div>
            
              
          <div className="w-[2px] bg-slate-400"></div>

          <div className=" flex flex-col">
          {todos.map((todo) => {
            if(!todo.done){
              return (
                <ToDoComponent
                key = {todo.id}
                title = {todo.todo}
                id= {todo.id}
                done = {todo.done}
                />
            );
            }
         
           })}
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
