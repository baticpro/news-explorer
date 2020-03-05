import {NEWS_FAIL, NEWS_LOADING, NEWS_SUCCESS} from './action-types';
import {fetchNews} from 'src/library/helpers/news-helpers';

export const setNewsLoading = loading => ({
  type: NEWS_LOADING,
  loading,
});

export const setNewsError = errorData => ({
  type: NEWS_FAIL,
  errorData,
});

export const setNewsItems = items => ({
  type: NEWS_SUCCESS,
  items,
});

export const getNewsItems = () => {
  return async dispatch => {
    dispatch(setNewsLoading(true));

    try {
      const {items} = await fetchNews();
      dispatch(setNewsItems(items));
    } catch (e) {
      dispatch(setNewsError(e));
    }
  };
};
