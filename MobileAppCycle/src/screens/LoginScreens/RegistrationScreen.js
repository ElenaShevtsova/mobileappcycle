import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const RegistrationScreen = ({ navigation }) => {
    return <View style={styles.sectionContainer}>
        <Text style={styles.title}>Registration Screen</Text>
        <TextInput />
        <TextInput/>
        <Button
            title="Login"
            onPress={() => navigation.navigate('Login')}
        />
        <Button
            title="Forgot password?"
            onPress={() => navigation.navigate('ForgotPassword')}
        />
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
