import { useDispatch } from "react-redux";
import { deleteToDo, markAsDone } from "../Slices/todoSlice";

function ToDoComponent({ title, id, done }){

  const dispatch = useDispatch();

  function handleDeleteTodo(id) {
    dispatch(deleteToDo
    (id));
  }

  function handleDone(id){
    dispatch(markAsDone(id));
  }
   
    return(
        <div className="flex gap-8 items-center">
        <p className="text-white w-1/2">{title}</p>
        <button className="border border-green-400 px-8 py-4 text-green-400 font-bold rounded-md hover:bg-slate-500" onClick={()=> handleDone(id)}>
          Done
        </button>
        <button className="border border-red-400 px-8 py-4 text-red-400 font-bold rounded-md hover:bg-slate-500" onClick={handleDeleteTodo(id)}>
          Delete
        </button>
      </div>
    );
}

export default ToDoComponent;