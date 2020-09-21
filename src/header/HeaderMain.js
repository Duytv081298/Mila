import React, {Component} from 'react';
import { Text, View, StyleSheet, Platform, Image, TouchableOpacity, Alert , Dimensions} from 'react-native';
import { IMAGES, PROFILE} from '../constants' 
import Icon from 'react-native-vector-icons/Fontisto';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get("window");

export class HeaderMain extends Component {
  render() {
    return (
      <View style={styles.bgHeader}>
        <View style={styles.left}>
        <TouchableOpacity>
          <Image
              style={styles.milaLogo}
            source={IMAGES.LOGO_1}
            resizeMode="contain"
          />
        </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("UploadScreen")} >
            <IconMaterial name="cloud-upload-outline" color='#555555' size={23} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("SearchScreen")}>
            <Icon name="search" color='#555555' size={20} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileNavigator")}>
            <Image
              style={styles.avatar}
              source={{ uri: PROFILE.AVATAR}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: 'white'
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3
  },
  milaLogo:{
    height: height / 15 - 10,
    width: width/3 -10
  },
  center: {
    flex: 1,
  },
  right: {
    flexDirection: 'row',
    width: width / 3,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  avatar:{
    width: height / 29,
    height: height / 29,
    borderRadius: 9999
  }
});


