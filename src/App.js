import React, { useState } from "react";
import Header from "./componenets/header";
import Tasks from "./componenets/Tasks";
import AddTask from "./componenets/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([
    {id:1,
      text:'Go to your work',
      date: '2024/12/08'
  },        {id:2,
      text:'Complete your code',
      date: '2024/07/08'
  },        {id:3,
      text:'Go to Gym',
      date: '2024/07/10'
  },  ]
);

// add task

const addTask =(task) => {
  const id = Math.floor(Math.random()*1000) + 1
  const newTask = {id,...task}
  setTasks([...tasks, newTask])
  
}
// delete Task

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}



  return (
    <div className="App">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd= {addTask}/>}
      {
        tasks.length > 0 
          ? <Tasks tasks={tasks} onDelete={deleteTask} />
          : <div className="flex flex-row w-1/2 mx-auto min-h-[100px] items-center justify-center bg-black text-white text-xl font-bold rounded-md shadow-md">
              Nothing to show
            </div>
      }
    </div>
  );
}

export default App;
