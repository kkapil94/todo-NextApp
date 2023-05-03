import { Suspense } from "react"
import Form from "./AddToForm"
import { Todos } from "./todos"




export default async  function Home() {
  
  return (
    <>
      <div className="px-64">
        <div>
          <Form/>
          <Suspense fallback={<div>Loading...</div>}>
          <Todos/>
          </Suspense>
        </div>
      </div>
    </>
    
  )
}
