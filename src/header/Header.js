import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
const { width, height } = Dimensions.get("window");

export class Header extends Component {
  render() {
    return (
      <View style={styles.bgHeader}>
        <View style={styles.left}>
          <IconMaterial
            onPress={() => this.props.navigation.goBack()}
            name='keyboard-backspace'
            size={25} color="black"
            style={{ alignSelf: "flex-start", marginLeft: 10 }} />
        </View>
        <View style={styles.right}>
          <View style={styles.iconRigcht}>
            <IconMaterial
              onPress={() => this.props.navigation.goBack()}
              name='heart-multiple-outline'
              size={25} color="black" />
          </View>
          <View style={styles.iconRigcht}>
            <Feather
              onPress={() => this.props.navigation.goBack()}
              name='message-circle'
              size={25} color="black" />
          </View>
          <View style={styles.iconRigcht}>
            <Feather
              onPress={() => this.props.navigation.goBack()}
              name='more-vertical'
              size={25} color="black" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgHeader: {
    flexDirection: 'row',
    height: height / 15,
    justifyContent: 'space-between',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3
  },
  right: {
    width: width / 2.5,
    flexDirection: 'row',
  },
  iconRigcht: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});


