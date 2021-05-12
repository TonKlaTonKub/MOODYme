import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button'

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Screen Main</Text>
      <Text>MOODY me!</Text>
      <Button>Click Main</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main
