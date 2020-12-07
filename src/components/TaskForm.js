import React, {useContext, useState, useEffect } from 'react';
import {TaskListContext} from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearTasks, editTask, editItem} = useContext(TaskListContext);

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value);
        console.log("The title : " , title);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(!editItem) {
            addTask(title);
            setTitle('');
        } else {
            editTask(title, editItem.id);
        }
    }

    useEffect(() => {
        if(editItem) {
            setTitle(editItem.title)
        } else {
            setTitle("");
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit}className = "form">
            <input type="text"
            onChange={handleChange}
            value={title}
            className="task-input"
            placeholder="add task here"
            required
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button type="submit" className="btn clear-btn"
                onClick={clearTasks}
                >
                    Remove
                </button>
            </div>
        </form>
    );
};

export default TaskForm;