import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const LoginScreen = () => {
    return <View style={styles.sectionContainer}>
        <Text style={styles.title}>Login Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    }
});
