import { FaRegTrashAlt } from "react-icons/fa";



const Task = ({task,onDelete}) => {
  return (
    <div className=" bg-gray-300 w-1/2 rounded-md shadow-md p-6 font-bold flex justify-between items-center">
        <h1 className='h-full' >{task.text}</h1>
        <div onClick={()=>onDelete(task.id)}  className='h-full w-15 bg-red-500 rounded-full p-4 text-white hover:bg-red-400 cursor-pointer'><FaRegTrashAlt /></div>
    </div>
  )
}

export default Task
