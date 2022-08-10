import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return <View style={styles.sectionContainer}>
        <Text style={styles.title}>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Help')}
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
