import React, { createContext, useState, useEffect } from 'react'
import uuid from 'react-uuid';

export const TaskListContext = createContext()



const TaskListContextProvider = (props) => {
    
    const [tasks, setTasks] = useState([
        {title: "Read the book", id:1},
        {title: "Wash the car", id:2},
        {title: "play my game", id:3},
        {title: "stay with my own family", id:4}
    ])
    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, {title, id:uuid()}])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))

    }

    const clearTasks = () => {
        setTasks([]);
    }

    const findItem = (id) => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id
        === id ? { title, id} : task));

        setTasks(newTasks);
        setEditItem(null);
    }

    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearTasks, findItem, editTask, editItem}}>
                {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;