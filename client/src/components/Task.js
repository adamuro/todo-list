import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/Task.css';

import { useDispatch } from 'react-redux';
import { putTask, deleteTask } from '../api/tasks';
import { updateTask, removeTask } from '../actions';

const Task = ({ _id, description, completed }) => {
  const dispatch = useDispatch();

  //Update task in global state and db
  const handleChange = (event) => {
    async function addTask() {
      dispatch(updateTask({ _id, description, completed: !completed }));
      await putTask(_id, { completed: !completed });
    }

    addTask();
  }

  //Delete task from global state and db
  const handleDelete = (event) => {
    dispatch(removeTask(_id));
    deleteTask(_id);
  }

  return (
    <li className="task">
      <label className="description"> {description} </label>
      <button
        className={completed ? "completed-button" : "uncompleted-button"}
        onClick={handleChange}>
        <FontAwesomeIcon icon={completed ? faCheckSquare : faTimesCircle} />
      </button>
      <button
        className="trash-button"
        onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}

export default Task;