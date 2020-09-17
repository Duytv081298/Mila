import * as React from 'react';

import { SignInScreen, SignUpScreen, ResetPasswordScreen } from '../screen/auth'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function AuthenticNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        </Stack.Navigator>
    );
}
