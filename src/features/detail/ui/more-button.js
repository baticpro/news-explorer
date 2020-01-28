import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {mainColor} from 'src/config/colors';

const Root = styled.View`
  width: 100%;
  padding: 20px;
  background-color: ${mainColor};
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 15px;
  color: white;
  text-align: center;
`;

const MoreButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Root>
      <Text>{'GET MORE'}</Text>
    </Root>
  </TouchableOpacity>
);

MoreButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default MoreButton;
