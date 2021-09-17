import { ADDTASK, DELETETASK, EDITTASK, FILTERTASKS, TOGGLEDONE } from "../const";


export const addTask = (object) => ({
    type: ADDTASK,
    payload: object
})

export const deleteTask = (index) => ({
    type: DELETETASK,
    payload: index
})

export const toggleDone = (index) => ({
    type: TOGGLEDONE,
    payload: index
})

export const filterTasks = (filterName) => ({
    type: FILTERTASKS,
    payload : filterName
})

export const editTask = (index,newTask) => ({
    type: EDITTASK,
    position:index,
    newTask
})




