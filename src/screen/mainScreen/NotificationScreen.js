import React, {Component} from 'react';
import { Text, View, StyleSheet, Platform, StatusBar} from 'react-native';
import {HeaderMain} from '../../header'
export class NotificationScreen extends Component {
         render() {
           return (
             <View style={{ flex: 1 }}>
               
               <StatusBar backgroundColor='#CCCCCC' barStyle="light-content" />
               <HeaderMain navigation={this.props.navigation} />
               <Text style={styles.text}>This is Notification Screen</Text>
             </View>
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
