import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from '../components/screens/Splash';
import { navigationRef } from '../NavigationService';
import * as Utils from '../utility';
import AppNavigator from './appNavigator';

const Stack = createStackNavigator();

function MyStack({ }) {
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator initialRouteName={Utils.Constants.KEY_SPLASH} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Utils.Constants.KEY_SPLASH} component={Splash} />
                <Stack.Screen name={Utils.Constants.KEY_APP} component={AppNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;