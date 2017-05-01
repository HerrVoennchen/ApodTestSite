import { combineReducers } from 'redux';
import ApodReducer from './ApodReducer';

export default combineReducers({
	apod: ApodReducer
});
