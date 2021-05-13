import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Button'
import Hello from './screen/HelloScreen';

import Login from './screen/Login' 
import Main from './screen/Main';
import TestButton from './screen/TestButton'
import Sign_in from './screen/sign_in'
import HelloScreen from './screen/HelloScreen'

const App = () => {
  return <HelloScreen/>
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
