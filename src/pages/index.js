import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { AddToDo } from "@/components/AddToDo";
const inter = Inter({ subsets: ["latin"] });
const initialToDos = [
  {
    id: 0,
    title: "Be aware of yourself",
    done: true,
  },
];

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
const editTask=(title,id)=>{
setToDos(toDos.map(toDo=>{
  if(toDo.id===id)
  {
    return {...toDo,title:title}
  }
  else 
  {
    return toDo
  }
}))
}
const deleteTask=(id)=>{
setToDos(toDos.filter(toDo=>toDo.id!==id))
}
export default function Home() {
  let nextId = 0;
 const [toDos, setToDos] = useState(initialToDos);
  return (
    <AddToDo addTask={handleAddToDo}/>
  )
}
