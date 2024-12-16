import React,{useState} from "react";
import './ToDolist.css'

function ToDolist(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");
     function handleInputchange(event){
setNewTask(event.target.value);
     }
     function addTask(){
        if(newTask.trim() !=="")
        setTasks(t =>[...tasks,newTask]);
        setNewTask("");
     }
     function deleteTask(index){
const updateTasks = tasks.filter((_,i) => i!== index);
setTasks(updateTasks);     
}
     function moveTaskUp(index){
        if(index > 0){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

     }
     function moveTaskDown(index){
        if(index <tasks.length-1 ){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
     }
    
    
    return(



    <div className="to-do-list">
        
            <h1>TO DO LIST</h1>
        <div>
            <input type="text" 
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputchange}/>
            <button className="add-button"
            onClick={addTask}>
                Add</button>
        </div>
        <ol>
          {tasks.map((task,index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button"
            onClick={() => deleteTask(index)}>delteTask</button>
           <button className="moveUp-button"
            onClick={() =>   moveTaskUp(index)}>moveUp</button>
                <button className="movedown-button"
            onClick={() =>    moveTaskDown(index)}>moveDown</button>
          </li>
          
          )}  
        </ol>
    </div>

 );
}
export default ToDolist;