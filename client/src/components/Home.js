import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import '../styles/Home.css';

import LoginForm from './LoginForm';

const Home = () => {
  const [option, setOption] = useState('LOGIN');
  const user = useSelector(state => state.user);

  return (
    //If user is verified redirect to user page
    user.verified ? <Redirect to={'/user'} /> : (
      <>
        <header>
          <h1> {option} </h1>
        </header>
        <div className="user-input">
          {option === 'LOGIN' ? <LoginForm /> : null}
        </div>
      </>
    )
  );
}

export default Home;