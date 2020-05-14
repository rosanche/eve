import { createStore } from 'redux';
import toggleTask from '../reducers/TaskReducer';

export default createStore(toggleTask);
