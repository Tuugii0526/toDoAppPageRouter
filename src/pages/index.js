import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
const initialStates = [
  {
    id: 0,
    title: "Be aware of yourself",
    done: false,
  },
];
let nextId = 0;
const [toDos, setToDos] = useState(initialStates);
const handleAddToDo = (title) => {
  setToDos([
    ...toDos,
    {
      id: nextId++,
      title: title,
      k,
    },
  ]);
};
export default function Home() {}
