import React from 'react';
import {useFetch} from 'src/library/hooks/fetch';
import {extractNewsList} from 'src/library/helpers/news-helpers';
import NewsList from '../ui/news-list';

const fetchOptions = {
  path: 'top-headlines',
};

export const WelcomeScreen = () => {
  const {data, loading, refetch} = useFetch(fetchOptions);
  const items = extractNewsList(data);

  return <NewsList loading={loading} refetch={refetch} items={items} />;
};

WelcomeScreen.navigationOptions = {
  title: 'Main Topics',
};
