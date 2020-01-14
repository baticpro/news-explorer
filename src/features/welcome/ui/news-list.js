import React, {useContext} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import EmptyMessage from './empty-message';
import PropTypes from 'prop-types';
import NewsItem from './news-item';
import {blackColor, whiteColor} from 'src/config/colors';
import {ThemeContext} from 'src/library/context/theme-context';
import {themeSelector} from 'src/library/helpers/theme-helpers';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const darkStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  root: {
    backgroundColor: blackColor,
  },
});

const lightStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  root: {
    backgroundColor: whiteColor,
  },
});

const theming = themeSelector({dark: darkStyles, light: lightStyles});

const NewsList = ({items}) => {
  const theme = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.root, theming(theme, 'root')]}>
      {items.length === 0 ? (
        <EmptyMessage />
      ) : (
        items.map((item, i) => <NewsItem key={i} {...item} />)
      )}
    </ScrollView>
  );
};

NewsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default NewsList;
