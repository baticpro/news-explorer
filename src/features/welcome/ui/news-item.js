import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

const NewsItem = ({title, image, date}) => (
  <View>
    <Text>{title}</Text>
    <Text>{date}</Text>
    <Image source={{uri: image}} />
  </View>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default NewsItem;
