import React, { useEffect } from 'react';
import '../styles/TaskList.css';

import { useSelector, useDispatch } from 'react-redux';
import { setTasks, setUser } from '../actions';
import { fetchTasks } from '../api/tasks';

import Task from './Task';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const filteredTasks = tasks.filter(task => {
    if (filter === 'COMPLETED') return task.completed;
    if (filter === 'UNCOMPLETED') return !task.completed;
    return true;
  });

  //Load tasks from db and pass them to global state
  //any time component mounts
  useEffect(() => {
    async function loadTasks() {
      const response = await fetchTasks(filter);
      if (response.error) {
        localStorage.removeItem('jwtToken');
        dispatch(setUser({}));
        return;
      }
      dispatch(setTasks(response));
    }

    loadTasks();
  }, []);

  return (
    <div className="task-container">
      <ul className="task-list">
        {filteredTasks.map(task =>
          <Task
            key={task._id}
            _id={task._id}
            description={task.description}
            completed={task.completed}
          />
        )}
      </ul>
    </div>
  );
}

export default TaskList;