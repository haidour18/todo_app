import React from 'react'
import Header from './component/Header'
import {useState} from 'react'
import Task from './component/Tasks'

import Tasks from './component/Tasks'


const App=() => { const [tasks, setTasks] = useState( [
  {
      id: 1,
      text: "Doctors Appointement",
      day: "Feb 5th at 2:30 pm",
      reminder: true,
  },
  {
      id: 2,
      text: "Meeting at school",
      day: "Feb 5th at 1:30 pm",
      reminder: true,
  },
  {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30 pm",
      reminder: false,
  }
])
  const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))}


  return (
    <div className="container">
    <Header title ="Tracker App" />     
    {tasks.length >0 ? <Tasks tasks ={tasks}  onDelete={deleteTask}/>

 :'No Tasks to show' }
    </div>
  );
}

export default App;
