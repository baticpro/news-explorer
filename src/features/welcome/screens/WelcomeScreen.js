import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFetch} from 'src/library/hooks/fetch';

const fetchOptions = {
	path: 'top-headlines'
};

export const WelcomeScreen = (props) => {
	const {data, loading, error} = useFetch(fetchOptions);

	console.log(data);

  return (
    <View style={styles.root}>
      <Text>{'test'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {}
});
