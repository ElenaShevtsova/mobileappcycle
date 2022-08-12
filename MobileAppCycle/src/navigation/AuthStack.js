import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrationScreen } from '../screens/LoginScreens/RegistrationScreen';
import { ForgotPasswordScreen } from '../screens/LoginScreens/ForgotPasswordScreen';
import { LoginScreen } from '../screens/LoginScreens/LoginScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return  <Stack.Navigator>
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
};
