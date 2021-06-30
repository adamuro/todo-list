import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import '../styles/InputForm.css';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postTask } from '../api/tasks';
import { addTask } from '../actions';

const TaskForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    //Try to add new task
    const response = await postTask(data);
    if (response.error) {
      return setValue("description", "Something funny");
    }

    //Add created task to global state
    dispatch(addTask(response));
    setValue("description", "");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="description"
        placeholder="Add new task"
        ref={register}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
    </form>
  );
}

export default TaskForm;