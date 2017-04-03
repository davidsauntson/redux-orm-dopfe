import {combineReducers} from 'redux';
import {createReducer} from 'redux-orm';

import orm from '../orm/orm';
import {selectedPublisher} from './selectedPublisherReducer';

const ormReducer = createReducer(orm);

const rootReducer = combineReducers({
	orm: ormReducer,
	selectedPublisher: selectedPublisher
});

export default rootReducer; 