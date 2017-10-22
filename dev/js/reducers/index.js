import {combineReducers} from 'redux';

import DevicesReducer from './DevicesReducer';

const allReducers = combineReducers({
    devices: DevicesReducer
});

export default allReducers
