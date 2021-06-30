//Tasks
export const SET_TASKS = 'SET_TASKS';
export const setTasks = (tasks) => {
  return {
    type: SET_TASKS,
    tasks,
  };
};

export const ADD_TASK = 'ADD_TASK';
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  }
}

export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    task,
  }
}

export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = (_id) => {
  return {
    type: REMOVE_TASK,
    _id,
  }
}

//Filter
export const SET_FILTER = 'SET_FILTER';
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  }
}

//User
export const SET_USER = 'SET_USER';
export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  }
}