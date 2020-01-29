import React, {useContext} from 'react';
import EmptyMessage from './empty-message';
import PropTypes from 'prop-types';
import NewsItem from './news-item';
import {blackColor, whiteColor} from 'src/config/colors';
import {ThemeContext} from 'src/library/context/theme-context';
import styled from 'styled-components';
import {RefreshControl} from 'react-native';

const RootScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${props =>
    props.theme === 'light' ? whiteColor : blackColor};
`;

const NewsList = ({items, refetch, loading}) => {
  const theme = useContext(ThemeContext);
  const isEmpty = items.length === 0 && !loading;

  const refreshControl = (
    <RefreshControl refreshing={loading} onRefresh={refetch} />
  );

  return (
    <RootScrollView refreshControl={refreshControl} theme={theme}>
      {isEmpty ? (
        <EmptyMessage />
      ) : (
        items.map((item, i) => <NewsItem key={i} item={item} />)
      )}
    </RootScrollView>
  );
};

NewsList.propTypes = {
  items: PropTypes.array.isRequired,
  refetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default NewsList;
