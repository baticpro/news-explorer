import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});

const NewsItem = ({title, image, date}) => (
  <View>
    <Text>{title}</Text>
    <Text>{date}</Text>
    {image && <Image style={styles.image} source={{uri: image}} />}
  </View>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default NewsItem;
