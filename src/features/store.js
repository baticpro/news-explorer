import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './reducer';

export const store = createStore(appReducer, applyMiddleware(thunk));
