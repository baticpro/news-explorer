import {combineReducers} from 'redux';
import {newsReducer} from './welcome/redux/news-reducer';

export const appReducer = combineReducers({
  newsReducer,
});
