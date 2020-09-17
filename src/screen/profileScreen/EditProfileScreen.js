import React, { useState, useEffect } from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';


const {width, height} = Dimensions.get('window');

import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  PermissionsAndroid,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,

} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import OptionsMenu from 'react-native-options-menu';
import { PROFILE, DIMENSIONS } from '../../constants';

function InputText(props) {
  return (
    <View>
      <Text style= {styles.title}>{props.title}</Text>
      <View style={styles.action}>
        <IconMaterial name={props.iconName} color="#05375a" size={20} />

        <TextInput
          placeholder={props.placeholder}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={props.onChangeText}
        />
        {props.dataCheck ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
    </View>
  )
}

function InputPassword(props) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.action}>
        <FontAwesome name={props.iconName} color="#05375a" size={20} />
        <TextInput
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry ? true : false}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={props.onChangeText}
        />
        <TouchableOpacity onPress={props.updateSecureTextEntry}>
          {props.secureTextEntry ? (
            <Feather name="eye-off" color="grey" size={20} />
          ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

function HeaderCus({navigation}) {
  return (
    <View style={{ height: height / 15, backgroundColor: 'white', flexDirection: "row", alignItems: "center" }} >
      <View style={{ flex: 2 , justifyContent: "flex-end", alignItems: "center"}}>
        <IconMaterial onPress={() => navigation.goBack()} name='keyboard-backspace' size={25} color="black" />
      </View>
      <View style={{ flex: 10, alignItems: "center", height: height / 20 }}>
        <View style={{ width: width * 8 / 10 - 30, backgroundColor: "#EEEEEE", borderRadius: 35, flexDirection: 'row', alignItems: "center", alignSelf: "flex-start"}}>
          <Feather name='search' size={20} color="#AAAAAA" style={{marginLeft: 10, flex: 1}}  />
        <TextInput
            style={{ flex: 8  }}
          placeholder="Search"
        />
        </View>
      </View>
      <TouchableOpacity style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        onPress={() => navigation.goBack()} >
          <Image
            style={styles.avatarHeader}
            source={{ uri: PROFILE.AVATAR }}
            resizeMode="contain"
          />
      </TouchableOpacity>
    </View>
  )
}

export function EditProfileScreen({ navigation }) {
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [data, setData] = React.useState({
    userName: '',
    check_textInputUserNameChange: false,

    email: '',
    check_textInputEmailChange: false,

    oldPassword: '',
    secureOldPasswordEntry: true,
    isValidOldPassword: true,

    newPassword: '',
    secureNewPasswordEntry: true,
    isValidNewPassword: true,
  });

  const textInputUserNameChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        userName: val,
        check_textInputUserNameChange: true,
      });
    } else {
      setData({
        ...data,
        userName: val,
        check_textInputUserNameChange: false,
      });
    }
  };
  const textInputEmailChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputEmailChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputEmailChange: false,
      });
    }
  };
  const handleOldPasswordChange = (val) => {
    setData({
      ...data,
      oldPassword: val,
      isValidOldPassword: true,
    });
  };
  const updateSecureOldPasswordEntry = () => {
    setData({
      ...data,
      secureOldPasswordEntry: !data.secureOldPasswordEntry,
    });
  };
  const handleNewPasswordChange = (val) => {
    setData({
      ...data,
      newPassword: val,
      isValidNewPassword: true,
    });
  };
  const updateSecureNewPasswordEntry = () => {
    setData({
      ...data,
      secureNewPasswordEntry: !data.secureNewPasswordEntry,
    });
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]).then((result) => {
        if (
          result['android.permission.CAMERA'] &&
          result['android.permission.RECORD_AUDIO'] &&
          result['android.permission.READ_EXTERNAL_STORAGE'] &&
          result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
        ) {
          this.setState({
            permissionsGranted: true,
          });
        } else if (
          result['android.permission.CAMERA'] ||
          result['android.permission.RECORD_AUDIO'] ||
          result['android.permission.READ_EXTERNAL_STORAGE'] ||
          result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          'never_ask_again'
        ) {
          // this.refs.toast.show('Please Go into Settings -> Applications -> APP_NAME -> Permissions and Allow permissions to continue');
        }
      });
    }
  });

  const handleUploadAvatar = () => {
    ImagePicker.showImagePicker({ maxWidth: 500, maxHeight: 500 }, (response) => {
      if (response.didCancel) {
        return;
      }
      const img = {
        uri: response.uri,
        type: response.type,
        name: response.fileName,
      };
      setAvatar(img);
    });
  };
  const handleUploadCoverImage = () => {
    ImagePicker.showImagePicker({ maxWidth: 500, maxHeight: 500 }, (response) => {
      if (response.didCancel) {
        return;
      }
      const img = {
        uri: response.uri,
        type: response.type,
        name: response.fileName,
      };
      setCoverImage(img);
    });
  };

  return (
    <View style={styles.container}>
      <HeaderCus navigation= {navigation}/>
      <View style={styles.header}>
        {coverImage ? (
          <Image source={{ uri: coverImage.uri }} style={styles.imageBackground} />
        ) : (
            <Image source={{ uri: PROFILE.COVERIMAGE }} style={styles.imageBackground}/>
          )}
        <View style={styles.updateCoverImage}


        >
          <IconMaterial style={{ backgroundColor: "#EEEEEE", padding: 4, borderRadius: 999 }} name='camera' size={26} color="black" onPress={handleUploadCoverImage}/>
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig"style={styles.footer}>
        <View style={{ alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#DDDDDD"}}>
          <View style={styles.avatar}>
            {avatar ? (
              <Image source={{ uri: avatar.uri }} style={styles.avatarImage} />
            ) : (
                <Image source={{ uri: PROFILE.AVATAR }} style={styles.avatarImage} />
              )}
            <IconMaterial onPress={handleUploadAvatar} style={styles.updateAvatar} name='camera' size={26} />
          </View>
          <Text style= {{fontSize: 22, fontWeight: "bold", marginVertical: 20}}>Nguyễn Thị Anh Anh</Text>
      </View>
        
      <ScrollView>
        <InputText
          title="User Name"
          placeholder="Your User Name"
          iconName="account" 
          onChangeText={(val) => textInputUserNameChange(val)}
          dataCheck={data.check_textInputUserNameChange} />
        <InputText
          title="Email"
          placeholder="Your Email"
          iconName="email" 
          onChangeText={(val) => textInputEmailChange(val)}
          dataCheck={data.check_textInputEmailChange} />

        <InputPassword
          title="Old Password"
          iconName="lock"
          placeholder="Old Password"
          secureTextEntry={data.secureOldPasswordEntry}
          onChangeText={(val) => handleOldPasswordChange(val)}
          updateSecureTextEntry={updateSecureOldPasswordEntry} />
        <InputPassword
          title="New Password"
          iconName="lock"
          placeholder="New Password"
          secureTextEntry={data.secureNewPasswordEntry}
          onChangeText={(val) => handleNewPasswordChange(val)}
          updateSecureTextEntry={updateSecureNewPasswordEntry} />


          {/* <Button
              onPress={() => navigation.goBack()}
              title="Go To Detail Profile Screen"
              color="#841584"
            /> */}
        
        </ScrollView>
      </Animatable.View>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flex: 2,
    padding: 5
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imageBackground: {
    height: (DIMENSIONS.WINDOWHEIGHT * 40) / 100,
    width: DIMENSIONS.WINDOWWIDTH - 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  updateCoverImage: {
    position: 'absolute',
    flexDirection: 'row-reverse',
    paddingLeft: 10,
    paddingTop: (DIMENSIONS.WINDOWHEIGHT * 20) / 100,
    width: DIMENSIONS.WINDOWWIDTH - 10,
  },
  avatar: {
    marginTop: - DIMENSIONS.WINDOWWIDTH/5,
    alignItems: 'flex-end',
    borderRadius: 999,
  },
  avatarImage: {
    width: DIMENSIONS.WINDOWWIDTH / 2.5,
    height: DIMENSIONS.WINDOWWIDTH / 2.5,
    borderRadius: 999,
    borderWidth: 5,
    borderColor: '#EEEEEE',
  },
  updateAvatar: {
    position: 'absolute',
    marginTop: DIMENSIONS.WINDOWWIDTH / 3.5,
    backgroundColor: "#EEEEEE",
    padding: 5,
    borderRadius: 999
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  title:{
    fontSize: 18,
    marginBottom: 5,
    marginTop: 25
  },
  avatarHeader: {
    width: DIMENSIONS.WINDOWHEIGHT / 29,
    height: DIMENSIONS.WINDOWHEIGHT / 29,
    borderRadius: 9999
  }
});
