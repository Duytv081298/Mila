


import React, { useState , useEffect} from 'react';
import { Card, CardItem, Body } from 'native-base';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import OptionsMenu from 'react-native-options-menu';
import auth from '@react-native-firebase/auth';

import { PROFILE, DIMENSIONS } from '../../constants';
const { width, height } = Dimensions.get("window");
function CustomCard({ number, str }) {
  return (
    <Card style={{ flex: 1 }}>
      <CardItem>
        <Body
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.number}>{number}</Text>
          <Text style={{ color: '#BBBBBB' }}>{str}</Text>
        </Body>
      </CardItem>
    </Card>
  )
}

export function DetailProfileScreen({ navigation }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    auth().onAuthStateChanged((currentUser) =>
    setCurrentUser(currentUser)
    );
  });
  const handleSignOut = () => {
    if (currentUser != null) {
      auth()
        .signOut()
        .then(() => navigation.navigate('SignInScreen'))
        .catch((error) => setErrorMessage(error.message));
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={{ uri: PROFILE.COVERIMAGE }}
      />

      <ScrollView style={styles.content}>
        <View style={{ alignItems: 'center' }}> 
          <Text style={styles.name}>Nguyễn Thị Anh Anh</Text>
          <Text style={{ color: '#BBBBBB' }}>0979517820</Text>
          <View style={styles.follow}>
            <CustomCard number="78347" str="Song" />
            <CustomCard number="4355" str="Followers" />
            <CustomCard number="345" str="Following" />
          </View>

          <Text style={styles.logOut} onPress={handleSignOut}> Log Out</Text>
        </View>
      </ScrollView>
      <Image style={styles.avatarImage} source={{ uri: PROFILE.AVATAR }} />
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row-reverse',
          paddingLeft: 10,
          paddingTop: 15,
          width: width - 10,
        }}>
        <OptionsMenu
          customButton={
            <IconMaterial name="dots-vertical" size={26} color="#fff" />
          }
          destructiveIndex={1}
          options={['Edit', 'Cancel']}
          actions={[
            () => {
              navigation.navigate('EditProfileScreen');
            },
            () => { },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageBackground: {
    height: (height * 30) / 100,
    width: width - 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  avatarImage: {
    marginTop: (height * 32) / 100 - width / 3,
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: 999,
    borderWidth: 5,
    borderColor: '#EEEEEE',
    position: 'absolute',
  },

  content: {
    width: width - 10,
    height: (height * 70) / 100,
    marginTop: (height * 25) / 100,
    paddingTop: 110,
    position: 'absolute',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#ffff',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#EE0000',
    marginBottom: 7,
  },
  follow: {
    flexDirection: 'row',
    marginTop: 40,
  },
  logOut: {
    color: '#6699FF',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  number: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#EE0000',
  },
  followItem: {
    flex: 1,
  },
});