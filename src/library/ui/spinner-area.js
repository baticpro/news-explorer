import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9999;
`;

const Content = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const SpinnerArea = ({loading}) =>
  loading ? (
    <Root>
      <Content>
        <ActivityIndicator />
      </Content>
    </Root>
  ) : null;

SpinnerArea.propTypes = {
  loading: PropTypes.boolean,
};

export default SpinnerArea;
