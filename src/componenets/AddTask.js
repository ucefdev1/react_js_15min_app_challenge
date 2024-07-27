import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [text,setText] = useState('');
    const [day,setDay] = useState('');

   const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('please add text');
            return
        }
        else
        {
            onAdd({text,day})
            setText(text);
            setDay(day);
        }
    }

  return (
    <div className="mx-6">
        <form action="" className='mb-6 max-w-[80%] text-white add-form container flex flex-col mx-auto justify-y-6 p-6 bg-gray-500 rounded-md shadow-md ' onSubmit={onSubmit}>
        <label className="mb-3">Task</label>
        <input placeholder='add Task' type="text" className='min-h-[50px] text-center border-black rounded-md text-black' value={text} onChange={(e)=> setText(e.target.value)}/>
        <label className="my-3">Day</label>
        <input placeholder='add Day' type="text" className='min-h-[50px] text-center border-black rounded-md text-black'  value={day} onChange={(e)=> setDay(e.target.value)}/>
        <input type="submit" className="m-4 bg-blue-500 hover:bg-blue-300 min-h-[50px] rounded-md"  value='Add Task'/> 
    </form>
    </div>
  )
}

export default AddTask
