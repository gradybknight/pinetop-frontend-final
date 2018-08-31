import { combineReducers} from 'redux';
import potStillReducer from './potStillReducer';
import userReducer from './userReducer';
import fractionalStillReducer from './fractionalStillReducer';

export default combineReducers({
    potStill: potStillReducer,
    userInfo: userReducer,
    fractionalStill: fractionalStillReducer
});