import {combineReducers} from 'redux';
 
import person from './person.js';
import person2 from './person2.js';
import reducer from './reducer.js'
 
const appReducer = combineReducers({
    person,
    person2,
    reducer
});
export default appReducer;
