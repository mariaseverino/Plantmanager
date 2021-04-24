import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import userImg from '../assets/icon-profile.png'

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Rodrigo</Text>
            </View>

            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight()
    },
    image:{
        width: 56,
        height: 56,
        borderRadius: 40
    },
    greeting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})