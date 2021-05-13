import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, TextInput } from 'react-native-paper';



const Login = () => {
    return (
        <ImageBackground source={require('../assets/background_login.jpg')} style={styles.container}>
          <View style={styles.Space}>
            <TextInput
              label="User"
              style={styles.InputStyle}
            />
            <TextInput
              label="Password"
              style={styles.InputStyle}
            />
          </View>
          <View>
            <Button mode="contained" style={styles.ButtonStlyle}>
              Login
            </Button>
            <Button mode="contained">
              Sign in
            </Button>
            <Button mode="text" style={styles.ButtonStlyle}>
              Forgot Password
            </Button>
          </View>
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
    InputStyle: {
      marginTop: 5,
      marginBottom: 5,
      height: 50,
      width: 250
    },
    ButtonStlyle: {
      marginTop: 10,
      marginBottom: 10,
    },
    Space: {
      marginTop: 200
    }
  });

export default Login
