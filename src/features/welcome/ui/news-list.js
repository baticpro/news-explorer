import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import EmptyMessage from './empty-message';
import PropTypes from 'prop-types';
import NewsItem from './news-item';
import {whiteColor} from 'src/config/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: whiteColor,
  },
});

const NewsList = ({items}) => (
  <ScrollView style={styles.root}>
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
