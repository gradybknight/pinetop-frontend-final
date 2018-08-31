import { combineReducers} from 'redux';
import potStillReducer from './potStillReducer';
import userReducer from './userReducer';

export default combineReducers({
    potStill: potStillReducer,
    userInfo: userReducer
});