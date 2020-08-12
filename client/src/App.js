import React from 'react';
import './styles/App.css';

import InputField from './components/InputField';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
  }

  handleFilterChange(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    return (
      <body>
        <header>
          <h1> Todo List </h1>
        </header>
        <form>
          <InputField />

          <FilterBar
            filter={this.state.filter}
            onChange={event => this.handleFilterChange(event)}
          />
        </form>
        <TaskList
          filter={this.state.filter}
        />
      </body >
    );
  }
}

export default App;
