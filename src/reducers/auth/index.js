import { combineReducers } from 'redux';
import { token, user} from './reducer';

export default combineReducers({
	token,
	user
});