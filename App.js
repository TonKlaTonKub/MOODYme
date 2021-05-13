import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Button'
import Hello from './screen/Hello';

import Login from './screen/Login' 
import Main from './screen/Main';
import TestButton from './screen/TestButton'

const App = () => {
  return <Login/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
