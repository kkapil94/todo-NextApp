import Form from "./addToForm"
import {TodoItem} from "../components/serverComponents"

export default function Home() {
  return (
    <>
      <div className="px-64">
        <div>
          <Form/>
          <TodoItem title={"sample tite"} task={"samaple text"}/>
        </div>
      </div>
    </>
    
  )
}
