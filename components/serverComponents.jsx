export  const TodoItem = ({title,task}) => {
    return (
        <>
            <div className="p-5 border-2 flex justify-between items-center">
                <div>
                <h6 className="text-lg font-bold">{title}</h6>
                <p className="text-md font-medium">{task}</p>
                </div>
                <div>
                    <input type="checkbox" name="" id="" className="mr-6 cursor-pointer"  />
                    <button className="text-md p-2 rounded-md font-semibold text-[#ffcc66] bg-[#1d1d1d]">Delete</button>
                </div>
            </div>
        </>
    )
}