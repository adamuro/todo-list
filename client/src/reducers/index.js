import tasksReducer from './tasks';
import filterReducer from './filter';
import userReducer from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filter: filterReducer,
  tasks: tasksReducer,
  user: userReducer,
});

export default rootReducer;