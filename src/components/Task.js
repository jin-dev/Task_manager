import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext';

const Task = ({task}) => {
    const { removeTask, findItem } = useContext(TaskListContext);

    return (
       <li className="list-item">
           <span>Task title </span>
           <div>
                <button className="btn-delete task-btn">
                        <i className="fas fa-trash-alt">
                            
                        </i>
                </button>
           </div>
       </li>
    )
}

export default Task;