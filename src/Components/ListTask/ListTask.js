import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

function ListTask() {
    const tasks = useSelector(state => state.tasks)
    const filter = useSelector(state => state.filter)
    var filteredTasks=tasks
    if (filter ==="done"){
        filteredTasks = tasks.filter((task) => task.isDone) 
    }else if(filter ==="notDone"){
        filteredTasks = tasks.filter((task) => !task.isDone)
    }
    return (
        <div>
            {filteredTasks.map((task,index) => <Task key={index} pos={index} task={task} />)}
        </div>
    )
}

export default ListTask
