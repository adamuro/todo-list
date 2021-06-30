import React, { useState } from 'react';
import '../styles/LoginForm.css';

import jwt from 'jsonwebtoken';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { postLogin } from '../api/users';
import { setUser } from '../actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();


  const onSubmit = async (data) => {
    //Post login request
    const { token, error } = await postLogin(data);
    if (error) return setError(error);

    //Set user data and save the JWT token
    const user = jwt.decode(token);
    localStorage.setItem("jwtToken", token);
    dispatch(setUser(user));
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="error-message"> {error} </h2>
      <input
        name="email"
        placeholder="Email"
        ref={register}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        ref={register}
      />
      <button type="submit">
        <h4> SIGN IN </h4>
      </button>
    </form>
  );
}

export default LoginForm;