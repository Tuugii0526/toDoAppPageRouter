import {useState} from 'react'
import { Container } from './Container';
export const AddToDo = ({addTask}) => {
  const [title,setTitle]=useState('')
  return <Container>
    <input className='bg-white shadow-sm p-1 ring-1 ring-gray-200  ring-inset focus:ring-2 focus:ring-indigo-600 focus:ring-inset  border-0 border-transparent' type="text"  placeholder="Add todo" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <button className='w-20 h-5 leading-4 rounded-sm align-middle border-[2px] border-gray-400  shadow-sm file:' onClick={()=>{addTask(title)}}>Add</button>
  </Container>
}