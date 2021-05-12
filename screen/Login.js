import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const Login = () => {
    return (
        <ImageBackground source={require('../assets/background_login.jpg')} style={styles.container}>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Login
