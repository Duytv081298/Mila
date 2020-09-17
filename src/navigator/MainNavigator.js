import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  FollowScreen,
  HistoryScreen,
  HomeScreen,
  NotificationScreen,
} from '../screen/mainScreen';
import { HeaderMain } from '../header/'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';


import { PersonalNavigator} from '../navigator'

const Tab = createMaterialBottomTabNavigator();

export class MainNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#FF0000"
        inactiveColor="#CCCCCC"
        labelStyle={{fontSize: 15}}
        barStyle={{backgroundColor: '#fff'}}
        >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => ( <Icon name="home" size={30} color={color} size={26} />  ) }}
          // navigation={this.props.navigation}
        />
        <Tab.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({color}) => ( <Icon name="history" size={30} color={color} size={26} /> ) }}
          // navigation={this.props.navigation}
        />

        <Tab.Screen
          name="FollowScreen"
          component={FollowScreen}
          options={{
            tabBarLabel: 'Follow',
            tabBarIcon: ({color}) => (
              <IconMaterial name="television-clean" size={30} color={color} size={26} />) }}
          // navigation={this.props.navigation}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({color}) => (
              <IconMaterial name="bell-ring-outline" size={30} color={color} size={26} /> ) }}
          // navigation={this.props.navigation}
        />
        <Tab.Screen
          name="PersonalNavigator"
          component={PersonalNavigator}
          options={{
            tabBarLabel: 'Personal',
            tabBarIcon: ({color}) => (
              <IconMaterial name="account" size={30} color={color} size={26} /> ) }}
          // navigation={this.props.navigation}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
