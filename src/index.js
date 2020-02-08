import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Routes from '~/routes';
import Theme from './theme';
import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FC',
  },
});

const App = () => (
  <Theme>
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  </Theme>
);

export default App;
