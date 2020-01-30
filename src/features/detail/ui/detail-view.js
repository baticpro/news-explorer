import React, {useState} from 'react';
import styled from 'styled-components';
import {Animated} from 'react-native';
import MoreButton from './more-button';
import PropTypes from 'prop-types';
import {whiteColor} from 'src/config/colors';

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Root = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0px;
  right: 0px;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  font-size: 17px;
  padding: 20px 0;
`;

const Content = styled.View`
  background-color: ${whiteColor};
  min-height: 1000px;
  margin-top: 300px;
  padding: 10px;
`;

const DetailView = ({image, title, description, onBrowser}) => {
  const [scrollOffset] = useState(new Animated.Value(0));

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollOffset},
        },
      },
    ],
    {useNativeDriver: true},
  );

  return (
    <Root>
      <Animated.View
        style={{
          transform: [
            {
              translateY: scrollOffset.interpolate({
                inputRange: [0, 300],
                outputRange: [0, -100],
              }),
            },
          ],
        }}>
        <Image source={{uri: image}} />
      </Animated.View>

      <Animated.ScrollView bounces={false} style={{}} onScroll={onScroll}>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <MoreButton onPress={onBrowser} />
        </Content>
      </Animated.ScrollView>
    </Root>
  );
};

DetailView.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onBrowser: PropTypes.func.isRequired,
};

export default DetailView;
