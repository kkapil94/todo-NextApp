export  const TodoItem = ({title,task}) => {
    return (
        <>
            <div className="p-5 border-2">
                <h6 className="text-lg font-bold">{title}</h6>
                <p className="text-md font-medium">{task}</p>
            </div>
        </>
    )
}