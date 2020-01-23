import React from 'react';
import {useFetch} from 'src/library/hooks/fetch';
import {extractNewsList} from 'src/library/helpers/news-helpers';
import NewsList from '../ui/news-list';
import SpinnerView from 'src/library/ui/spinner-view';

const fetchOptions = {
  path: 'top-headlines',
};

export const WelcomeScreen = () => {
  const {data, loading} = useFetch(fetchOptions);
  const items = extractNewsList(data);

  return (
    <SpinnerView loading={loading}>
      <NewsList items={items} />
    </SpinnerView>
  );
};

WelcomeScreen.navigationOptions = {
  title: 'Main Topics',
};
