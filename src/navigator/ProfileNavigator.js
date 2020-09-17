import * as React from 'react';

import { DetailProfileScreen, EditProfileScreen} from '../screen/profileScreen'


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function ProfileNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="DetailProfileScreen" component={DetailProfileScreen} options={{ headerShown: false, }} navigation={props.navigation}/>
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
