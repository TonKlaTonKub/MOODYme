import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Sign_in = () => {
    return (
        <ImageBackground source={require('../assets/background_sign_in.jpg')} style={styles.container}>
          <View>
            <Text>
                User
            </Text>
            <TextInput
              label="User"
              style={styles.InputStyle}
            />

            <Text style={styles.Space}>
                E-Mail
            </Text>
            <TextInput
              label="E-Mail"
              style={styles.InputStyle}
            />

            <Text style={styles.Space}>
                Password
            </Text>
            <TextInput
              label="Password"
              style={styles.InputStyle}
            />

            <Text style={styles.Space}>
                Confirm Password
            </Text>
            <TextInput
              label="Confirm Password"
              style={styles.InputStyle}
            />
          </View>
          <View style={styles.Space}>
            <Button mode="contained" style={styles.ButtonStlyle}>
              Sign in
            </Button>
            <Button mode="contained">
              Cancel
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
      marginTop: 20
    }
  });

export default Sign_in
