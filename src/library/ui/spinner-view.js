import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const SpinnerView = ({loading, children}) =>
  loading ? (
    <View style={styles.root}>
      <ActivityIndicator />
    </View>
  ) : (
    children
  );

SpinnerView.propTypes = {
  loading: PropTypes.boolean,
  children: PropTypes.object,
};

export default SpinnerView;
