import React from 'react';
import {ScrollView} from 'react-native';
import EmptyMessage from './empty-message';
import PropTypes from 'prop-types';
import NewsItem from './news-item';

const NewsList = ({items}) => (
  <ScrollView>
    {items.length === 0 ? (
      <EmptyMessage />
    ) : (
      items.map((item, i) => <NewsItem key={i} {...item} />)
    )}
  </ScrollView>
);

NewsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default NewsList;
