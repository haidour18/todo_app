import React from 'react'
import Header from './component/Header'
import {useState} from 'react'

import Tasks from './component/Tasks'
import Task from './component/Task'

const App=() => { const [tasks, setTask] = useState( [
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

  return (
    <div className="container">
    <Header title ="Tracker App" />     
    <Task tasks ={tasks} />


    </div>
  );
}

export default App;
