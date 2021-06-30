import React from 'react';
import '../styles/User.css';

import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../actions';
import TaskForm from './TaskForm';
import FilterSelect from './FilterSelect';
import TaskList from './TaskList';

//TODO: style logout button
const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const logout = () => {
    dispatch(setUser({}));
    localStorage.removeItem('jwtToken');
  }

  return (
    //If user is not verified redirect to home
    !user.verified ? <Redirect to={'/'} /> : (
      <>
        <header>
          <h1> Todo List </h1>
        </header>

        <button
          onClick={logout}>
        </button>

        <div className="user-input">
          <TaskForm />
          <FilterSelect />
        </div>

        <TaskList />
      </>
    )
  );
}

export default User;