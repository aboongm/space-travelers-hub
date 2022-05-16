import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({ rocketReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
