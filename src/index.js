import React, { Fragment } from 'react';

import { StatusBar, StyleSheet, View } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#F5F6FC',
  },
});

const App = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#F5F6FC" />
    <Routes />
  </View>
);

export default App;
