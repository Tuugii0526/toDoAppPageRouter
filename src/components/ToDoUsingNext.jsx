import { useState } from "react";
import { AddToDo } from "@/components/AddToDo";
import { TaskList } from "./TaskList";
const initialStates = [
  {
    id: 0,
    title: "Be aware of yourself",
    done: true,
  },
];
let nextId = 1;

export default function ToDoUsingNext() {
  const [toDos, setToDos] = useState(initialStates);
  const handleAddToDo = (title) => {
    setToDos([
      ...toDos,
      {
        id: nextId++,
        title: title,
        done:false,
      },
    ]);
  };
  const editTask =()=>{

  }
  const deleteTask=()=>{
    
  }
  return <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
  <AddToDo addTask={handleAddToDo}/>
  <TaskList toDos={toDos}/>
  </div>
}
