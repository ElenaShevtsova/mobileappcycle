import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ForgotPasswordScreen = () => {
    return <View style={styles.sectionContainer}>
        <Text style={styles.title}>Forgot Password Screen</Text>
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
