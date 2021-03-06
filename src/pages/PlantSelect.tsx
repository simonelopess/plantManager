import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { EnviromentButton } from '../components/EnviromentButton';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Header} from './../components/Header';

export function PlantSelect() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Header/>
            <Text style={styles.title}>
                Em qual ambiente
            </Text>
            <Text style={styles.subtitle}>
                Você quer colocar sua planta?
            </Text>
            </View>
            <EnviromentButton title="Cozinha" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    }, 
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    }
})