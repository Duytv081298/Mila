

import * as React from 'react';

import { PlaylistScreen, ListSongsScreen, AlbumScreen, ListSongsUploadScreen } from '../screen/libraryScreen'

import { PersonalScreen, HomeScreen } from '../screen/mainScreen'
import { SignInScreen} from '../screen/auth'

import { ProfileNavigator } from '../navigator'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export class PersonalNavigator extends React.Component {

  // componentDidUpdate(){
  //   if (this.props.route.state && this.props.route.state.routes[this.props.route.state.index].name === 'ListSongsUploadScreen') {
  //     this.props.navigation.setOptions({ tabBarVisible: false })
  //   } else {
  //     this.props.navigation.setOptions({ tabBarVisible: true })
  //   }
  // }
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen name="PersonalScreen" component={PersonalScreen} options={{ headerShown: false, }} navigation = {this.props.navigation}/>
        <Stack.Screen name="PlaylistScreen" component={PlaylistScreen} />
        <Stack.Screen name="ListSongsScreen" component={ListSongsScreen} />
        <Stack.Screen name="AlbumScreen" component={AlbumScreen} />
        <Stack.Screen name="ListSongsUploadScreen" component={ListSongsUploadScreen} />
        <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
    );
  }

}
