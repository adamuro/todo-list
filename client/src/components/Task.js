import React from 'react';
import '../styles/Task.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { updateTask, deleteTask } from '../api';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async handleChange() {
    await updateTask(this.props.id, {
      completed: !this.props.completed,
    });
    await this.props.onChange();
  }

  async handleDelete() {
    await deleteTask(this.props.id);
    await this.props.onChange();
  }

  render() {
    return (
      <div className="task">
        <li className="description">
          {this.props.description}
        </li>
        <button
          className={this.props.completed ? "completed-button" : "uncompleted-button"}
          onClick={this.handleChange}>
          <FontAwesomeIcon icon={this.props.completed ? faCheckSquare : faTimesCircle} />
        </button>
        <button
          className="trash-button"
          onClick={this.handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    );
  }
}

export default Task;