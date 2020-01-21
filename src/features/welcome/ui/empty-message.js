import React from 'react';
import styled from 'styled-components';
import {grayColor} from 'src/config/colors';

const Root = styled.View`
  padding: 10px;
`;

const Text = styled.Text`
  font-size: 17px;
  text-align: center;
  color: ${grayColor};
`;

const EmptyMessage = () => (
  <Root>
    <Text>{'no news found'}</Text>
  </Root>
);

export default EmptyMessage;
