import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../components/screens/homeScreen';
import * as Utils from '../utility';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName={Utils.Constants.SCREEN_HOME} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Utils.Constants.SCREEN_HOME} component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;