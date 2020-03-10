import React, {useEffect} from 'react';
import NewsList from '../ui/news-list';
import {getNewsItems} from '../redux/news-actions';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

const WelcomeScreenView = ({items, loading, getNewsItems}) => {
  useEffect(() => {
    getNewsItems();
  }, []);

  return <NewsList loading={loading} refetch={getNewsItems} items={items} />;
};

WelcomeScreenView.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getNewsItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.newsReducer.items,
  loading: state.newsReducer.loading,
});

const mapDispatchToProps = {
  getNewsItems,
};

export const WelcomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeScreenView);

WelcomeScreen.navigationOptions = {
  title: 'Main Topics',
};
