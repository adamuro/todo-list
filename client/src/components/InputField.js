import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/InputField.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { addTask } from '../api';

const InputField = () => {
  const { register, handleSubmit } = useForm();

  const handleSubmit = async data => {
    await addTask(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Add new task" ref={register} />
      <button type="submit">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
    </form>
  );
}

export default InputField;