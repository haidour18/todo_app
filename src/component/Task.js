import React from 'react'
const tasks = [
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
]
export const Task = () => {
    return (
        <>
            {tasks.map((task) => (
            <h3>
                {task.text}
            </h3>))}
        </>
    )
}
export default Task
