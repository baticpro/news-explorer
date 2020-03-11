import {DETAIL_OPENED} from './action-types';

export const openDetailAction = detailData => {
  return {
    type: DETAIL_OPENED,
    detailData,
  };
};
