import {DETAIL_OPENED} from './action-types';

const initialState = {
  detailData: {},
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_OPENED:
      return {...state, detailData: action.detailData};
    default:
      return state;
  }
};
