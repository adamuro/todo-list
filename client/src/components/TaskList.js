import React from 'react';
import '../styles/TaskList.css';

import Task from './Task';
import { getTasks } from '../api';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }

    this.loadTasks = this.loadTasks.bind(this);
  }

  async loadTasks() {
    const filteredTasks = await getTasks(this.props.filter);
    this.setState({ tasks: filteredTasks });
  }

  async componentDidMount() {
    await this.loadTasks();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      await this.loadTasks();
    }
  }

  render() {
    const tasks = this.state.tasks.map(task =>
      <Task
        id={task._id}
        description={task.description}
        completed={task.completed}
        onChange={this.loadTasks}
      />
    );

    return (
      <div className="task-container">
        <ul className="task-list">
          {tasks}
        </ul>
      </div>
    );
  }
}

export default TaskList;
