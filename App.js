

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNavigator, PersonalNavigator } from './src/navigator';
import {SignInScreen, SignUpScreen, ResetPasswordScreen} from './src/screen/auth';
import { SplashScreen, UploadScreen, SearchScreen } from './src/screen/general'
import { PlayMusic,MiniPlaying } from './src/screen/playing'
import {Album, DetailAlbum} from './src/screen/album'

import { StyleSheet, Platform } from 'react-native';


const Stack = createStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="Home" component={MainNavigator} />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="PersonalNavigator" component={PersonalNavigator} />
        <Stack.Screen name="PlayMusic" component={PlayMusic} />
        <Stack.Screen name="Album" component={Album} />
        <Stack.Screen name="DetailAlbum" component={DetailAlbum} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 25 : 0
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
