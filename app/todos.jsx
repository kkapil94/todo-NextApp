import {TodoItem} from "../components/serverComponents"
import {cookies} from "next/headers"
import { redirect } from "next/navigation"

export const Todos =async ()=>{
    const todo = async ()=>{
        const cookie = cookies()
        const token = cookie.get("token")
        if(token){
          const req = await fetch("http://localhost:3000/api/task/mytask",{cache:"no-cache",headers:{cookie:`token=${token.value}`}})
          const {tasks} =await req.json()
          return tasks
        }else{
          redirect("/login")
        }
      }
      const tasks = await todo()
    return(
        <>
            {tasks&&tasks.map((item)=>(
            <TodoItem key={item._id} title={item.title} task={item.task} id={item._id}/>
          ))
          }
        </>
    )
} 