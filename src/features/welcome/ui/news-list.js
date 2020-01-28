import React, {useContext} from 'react';
import EmptyMessage from './empty-message';
import PropTypes from 'prop-types';
import NewsItem from './news-item';
import {blackColor, whiteColor} from 'src/config/colors';
import {ThemeContext} from 'src/library/context/theme-context';
import styled from 'styled-components';

const RootScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${props =>
    props.theme === 'light' ? whiteColor : blackColor};
`;

const NewsList = ({items}) => {
  const theme = useContext(ThemeContext);

  return (
    <RootScrollView theme={theme}>
      {items.length === 0 ? (
        <EmptyMessage />
      ) : (
        items.map((item, i) => <NewsItem key={i} item={item} />)
      )}
    </RootScrollView>
  );
};

NewsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default NewsList;
