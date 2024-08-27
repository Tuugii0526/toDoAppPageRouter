import { Container } from "./Container"
import {useState} from 'react'
export const Task=({task,editTask,deleteTask})=>{
    const [checked ,setChecked]=useState(task.done)
    const [isEditing,setIsEditing]=useState(false)
    const [titleOfTheTask,setTitleOfTheTask]=useState(task.title)
return <Container>
    <input type="checkbox" checked={checked} onChange={(e)=>{
        setChecked(!checked)}}/>
    {
        (!isEditing) ? 
        <>
        <span className='bg-white shadow-sm p-1 ring-1 ring-gray-200  ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset  border-0 border-transparent'>{titleOfTheTask}</span>
        <button className='w-20 h-5 leading-4 rounded-sm align-middle border-[2px] border-gray-400  shadow-sm ' onClick={()=>{
            setIsEditing(!isEditing)
        }} >Edit</button>
        </>
        :
        <>
        <input className='bg-white h-fit overflow-scroll shadow-sm p-1 ring-1 ring-gray-200  ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset  border-0 border-transparent' type="text" onChange={(e)=>{
setTitleOfTheTask(e.target.value)
        }} value={titleOfTheTask}/>
        <button className='w-20  h-5  leading-4 rounded-sm align-middle border-[2px] border-gray-400  shadow-sm ' onClick={()=>{
            setIsEditing(!isEditing)
            editTask(task.id,titleOfTheTask)

        }} >Save</button>
        </>
    }
    <button className='w-20 h-5 leading-4 rounded-sm align-middle border-[2px] border-gray-400  shadow-sm ' onClick={()=>{
        deleteTask(task.id)
    }}>Delete</button>
</Container>
}