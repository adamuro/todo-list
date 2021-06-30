import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Home from './components/Home';
import User from './components/User';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;