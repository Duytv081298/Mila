import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

export class PlaylistScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Playlist Screen</Text>
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
