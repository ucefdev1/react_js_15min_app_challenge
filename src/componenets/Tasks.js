import Task from "./Task"
const Tasks = ({tasks, onDelete}) => {
  return (
    <div className="flex flex-col space-y-4 p-6 items-center  mx-auto">
      { tasks.map((task)=>
    ( <Task key={task.id} task={task} onDelete={onDelete}></Task> )
    ) } 
    </div>
  )
}

export default Tasks



