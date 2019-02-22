import { createStore } from 'redux';
import appReducer from './reducer/index.js'
const store = createStore(appReducer);
export default store;