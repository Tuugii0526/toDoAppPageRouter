import { useState } from "react"
const fruits=['apple','banana','grape','watermelon','orange']

export const  FilterableInput=()=>{
    const [searchItem,setSearchItem]=useState('')
        return <div>
        <input className="block ring-1" placeholder="Search a fruit" value={searchItem} type="text" onChange={(e)=>{
            setSearchItem(e.target.value)

        }}/>
        {/* {
            fruits.filter(fruit=>{
                if(fruit.toLowerCase().indexOf(searchItem.toLowerCase())!==-1)
                {
                    return fruit
                }
            }).map(fruit=>{
                return <p>{fruit}</p>
            })
        } */}
        {
            fruits.filter(fruit=>fruit===searchItem.toLowerCase()).map(
                fruit=><p>{fruit}</p>
            )
        }
        
    </div>
}