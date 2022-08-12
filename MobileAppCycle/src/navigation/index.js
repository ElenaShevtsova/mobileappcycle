import React from 'react';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';

export const RootNavigation = () => {
    const isLoggedIn = false;

    return isLoggedIn ? <MainStack/> : <AuthStack/>
};
