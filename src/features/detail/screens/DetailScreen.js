import React from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DetailView from '../ui/detail-view';

const Root = styled.View`
  flex: 1;
`;

export const DetailScreen = ({navigation}) => {
  const {title, image, description, url} = navigation.getParam('item', {});

  const openInBrowser = async () => {
    const can = await Linking.canOpenURL(url);
    if (can) Linking.openURL(url);
  };

  return (
    <Root>
      <DetailView
        image={image}
        description={description}
        onBrowser={openInBrowser}
        title={title}
      />
    </Root>
  );
};

DetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

DetailScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('tag'),
});
