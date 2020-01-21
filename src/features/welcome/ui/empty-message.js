import React from 'react';
import styled from 'styled-components';

const Root = styled.View`
  padding: 10px;
`;

const Text = styled.Text`
  font-size: 17px;
  text-align: center;
`;

const EmptyMessage = () => (
  <Root>
    <Text>{'no news found'}</Text>
  </Root>
);

export default EmptyMessage;
