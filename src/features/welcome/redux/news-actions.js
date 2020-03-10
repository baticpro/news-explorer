import {NEWS_FAIL, NEWS_LOADING, NEWS_SUCCESS} from './action-types';
import {fetchNews} from 'src/library/helpers/news-helpers';

export const setNewsLoadingAction = loading => ({
  type: NEWS_LOADING,
  loading,
});

export const setNewsErrorAction = errorData => ({
  type: NEWS_FAIL,
  errorData,
});

export const setNewsItemsAction = items => ({
  type: NEWS_SUCCESS,
  items,
});

export const getNewsItems = () => {
  return async dispatch => {
    dispatch(setNewsLoadingAction(true));

    try {
      const {items} = await fetchNews();
      dispatch(setNewsItemsAction(items));
    } catch (e) {
      dispatch(setNewsErrorAction(e));
    }
  };
};
