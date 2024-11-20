import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import HomePage from './components/HomePage';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={[styles.container]}>
      <HomePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;