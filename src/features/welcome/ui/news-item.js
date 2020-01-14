import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {
  blackColor,
  borderGrayColor,
  grayColor,
  whiteColor,
} from 'src/config/colors';
import {ThemeContext} from 'src/library/context/theme-context';
import {themeSelector} from 'src/library/helpers/theme-helpers';

const styles = StyleSheet.create({
  date: {
    paddingTop: 3,
  },
  image: {
    height: 80,
    marginRight: 10,
    width: 80,
  },
  right: {
    flex: 1,
  },
  root: {
    borderBottomColor: borderGrayColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 15,
  },
  title: {
    fontSize: 16,
  },
});

const dark = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  date: {
    color: whiteColor,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  title: {
    color: whiteColor,
  },
});

const light = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  date: {
    color: grayColor,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  title: {
    color: blackColor,
  },
});

const theming = themeSelector({light, dark});

const NewsItem = ({title, image, date}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.root}>
      {image && (
        <View style={styles.left}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
      )}
      <View style={styles.right}>
        <Text style={[styles.title, theming(theme, 'title')]}>{title}</Text>
        <Text style={[styles.date, theming(theme, 'date')]}>{date}</Text>
      </View>
    </View>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default NewsItem;
