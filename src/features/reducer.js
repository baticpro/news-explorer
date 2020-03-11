import {combineReducers} from 'redux';
import {newsReducer} from './welcome/redux/news-reducer';
import {detailReducer} from './detail/redux/detail-reducer';

export const appReducer = combineReducers({
  newsReducer,
  detailReducer,
});
