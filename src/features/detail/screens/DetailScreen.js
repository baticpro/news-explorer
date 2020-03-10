import React from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MoreButton from '../ui/more-button';
import {connect} from 'react-redux';

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

export const DetailScreenView = ({detailData}) => {
  const {title, image, description, url} = detailData;

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

DetailScreenView.propTypes = {
  detailData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  detailData: state.detailReducer.detailData,
});

export const DetailScreen = connect(mapStateToProps)(DetailScreenView);

DetailScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('tag'),
});
