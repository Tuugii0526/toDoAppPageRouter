import { Task } from "./Task";

export const TaskList = ({toDos,editTask,deleteTask}) => {
  console.log('todos is',toDos)
  return ( <ul className="flex flex-col gap-5">
      {toDos.map(toDo=> <Task key={toDo.id} task={toDo} editTask={editTask} deleteTask={deleteTask}/>)}
    </ul>
  )
};
