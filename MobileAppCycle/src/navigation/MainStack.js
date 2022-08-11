import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { HelpScreen } from '../screens/HelpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return  <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
};
