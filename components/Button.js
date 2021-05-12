import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const click = () => {
    console.log('clicked!')
}

const Button = props => {
    return (
        <TouchableOpacity onPress={() => click()}>
            <View style={styles.container}>
                <Text>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Button