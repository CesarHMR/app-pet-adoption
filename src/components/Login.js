import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Label from './Label'

export default function Login(){
    return (
        <View style={style.header}>
            <Image source={require('../images/ico.png')} style={style.logo}></Image>
            <Text style={style.login}>LOGIN</Text>
            <Text>Insira seus dados para continuar</Text>
            <Label></Label>
        </View>
    )
}

const style = StyleSheet.create({
    header: {

    },
    logo: {

    },
    login: {
        color: 'red'
    }
})