import {
  SET_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
} from '../actions';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks;
    case ADD_TASK:
      return [...state, action.task];
    case UPDATE_TASK:
      return [...state].map(task => {
        if (task._id === action.task._id) return action.task;
        return task;
      });
    case REMOVE_TASK:
      return [...state].filter(task => task._id !== action._id);
    default:
      return state;
  }
}

export default tasksReducer;