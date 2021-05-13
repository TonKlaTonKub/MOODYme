import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const HelloScreen = () => {
    return (
        <ImageBackground source={require('../assets/background_login.jpg')} style={styles.container}>
            <Text>Hello Screen</Text>
            <Text>( Your Name )</Text>
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

export default HelloScreen
