
import { DelBtn } from "./clients"

export  const TodoItem = ({title,task,id}) => {
    return (
        <>
            <div className="p-5 border-2 flex justify-between items-center">
                <div>
                <h6 className="text-lg font-bold">{title}</h6>
                <p className="text-md font-medium">{task}</p>
                </div>
                <div>
                    <DelBtn id={id}/>
                </div>
            </div>
        </>
    )
}