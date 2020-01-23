import React from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MoreButton from '../ui/more-button';

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Root = styled.View`
  padding: 10px;
  flex: 1;
`;

const Image = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
`;

const Content = styled.Text`
  font-size: 17px;
  padding: 20px 0;
`;

export const DetailScreen = ({navigation}) => {
  const title = navigation.getParam('title');
  const image = navigation.getParam('image');
  const description = navigation.getParam('description');
  const url = navigation.getParam('url');

  const openInBrowser = async () => {
    const can = await Linking.canOpenURL(url);
    if (can) Linking.openURL(url);
  };

  return (
    <Root>
      <Image source={{uri: image}} />
      <Title>{title}</Title>
      <Content>{description}</Content>
      <MoreButton onPress={openInBrowser} />
    </Root>
  );
};

DetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

DetailScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('tag'),
});
