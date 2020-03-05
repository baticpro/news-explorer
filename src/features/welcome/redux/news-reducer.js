import {NEWS_FAIL, NEWS_LOADING, NEWS_SUCCESS} from './action-types';

const initialState = {
  list: [],
  loading: false,
  error: false,
  errorData: null,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LOADING:
      return {...state, loading: action.loading, error: false};
    case NEWS_SUCCESS:
      return {...state, list: action.items, loading: false, error: false};
    case NEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        errorData: state.errorData,
      };
  }
};
