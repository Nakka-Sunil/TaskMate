import { useState } from "react";
import "./AddTask.css";
export const AddTask = ({tasks,setTasks}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress,setProgress] = useState(false);
    const handleChange =(event) =>{
        
        setTaskValue(event.target.value);
    }

    const handleReset= () =>{
        setTaskValue("");
        setProgress(false);
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const task = {
            id : Math.floor(Math.random()*1000),
            name : taskValue,
            completed: Boolean(progress)
        }
        setTasks([...tasks,task]);
        handleReset();
    }
  return (
   <section className="addtask">
    <form className="formelements" onSubmit={handleSubmit}>
        <label htmlFor="text">Task Name</label>
        <input onChange = {handleChange} type="text" name = "task" id = "task" placeholder="Task Name" autoComplete="off" value={taskValue}/>
        <section onChange={(event) => setProgress(event.target.value)}value = {progress}>
            <select>
            <option value="false">Pending</option>
            <option value="true">Completed</option>
            </select>
        </section>
        <button className = "Submit" type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">Reset</span>
    </form>
   </section>
  )
}
