import React, { useState } from 'react'

const TodoList = () => {
  const [newTask,setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if(newTask.trim() !== ''){
        setTasks([...tasks,{text:newTask,completed:false}]);
        setNewTask('');
    }
  }

  const  handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index,1);
    setTasks(updatedTasks);
  }

  return (
    <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
      <h1>Todo List</h1>
      {/* Add Task */}
      <div>
        <input type="text" placeholder='Add task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul style={{display:'flex',flexDirection:'column',gap:'8px'}}>
        {tasks.map((task,index) => (
            <l1 style={{display:'flex',flexDirection:'row',gap:'8px',justifyContent:'space-between', border:'1px solid black',padding:'4px 8px',width:'150px'}} key={index}><input type="checkbox" checked={task.completed} onChange={() => handleToggleComplete(index)}/> <span className={task?.completed ? 'completed' : ''}>{task.text}</span><button onClick={() => handleDeleteTask(index)}>Delete</button></l1>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
