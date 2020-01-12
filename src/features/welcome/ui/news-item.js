import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {borderGrayColor, grayColor} from 'src/config/colors';

const styles = StyleSheet.create({
  date: {
    color: grayColor,
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

const NewsItem = ({title, image, date}) => (
  <View style={styles.root}>
    {image && (
      <View style={styles.left}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
    )}
    <View style={styles.right}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </View>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default NewsItem;
