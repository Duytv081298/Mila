import React, { Component } from 'react';
import { Card, CardItem, Icon, Right } from 'native-base';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import { PROFILE } from '../../constants';
const { width, height } = Dimensions.get('window');


function CustomCard(props) {
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => props.navigation.navigate(props.goToScreen)}>
            <Card >
                <CardItem>
                    <IconMaterial active name={props.nameIcon} size={26} />
                    <View style={styles.contentText}>
                        <Text style={styles.itemName}>{props.itemName}</Text>
                        <Text style={styles.itemAmount}>{props.itemAmount}</Text>
                    </View>
                    <Right style={{ flex: 20, alignItems: 'flex-end' }}>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}
function GotoProfile(props) {
    return (
        <TouchableOpacity style={{ height: height / 13, flexDirection: "row", paddingBottom: 10, marginHorizontal: 10, borderBottomWidth: 0.5, borderColor: "#CCCCCC" }}
            onPress={() => props.navigation.navigate(props.goToScreen)}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image
                    style={styles.miniAvatar}
                    source={{ uri: PROFILE.AVATAR }}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 8, justifyContent: "center", paddingLeft: 10 }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }} >Nguyễn Thị Anh Anh</Text>
                    <Text style={{ fontSize: 12, color: '#AAAAAA' }}>See your profile</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

export class PersonalScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: height / 30, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginVertical: 10, marginBottom: 15 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 24 }} >Menu</Text>
                    <TouchableOpacity style={styles.search} onPress={() => this.props.navigation.navigate('SearchScreen')} >
                        <FontAwesome  name='search' size={20}  />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <GotoProfile navigation={this.props.navigation} goToScreen="ProfileNavigator" />
                </View>

                <CustomCard nameIcon='music' itemName='Bài Hát' itemAmount="36" navigation={this.props.navigation} goToScreen="ListSongsScreen" />
                <CustomCard nameIcon='playlist-music-outline' itemName='Playlist' itemAmount="36" navigation={this.props.navigation} goToScreen="PlaylistScreen" />
                <CustomCard nameIcon='account' itemName='Album' itemAmount="36" navigation={this.props.navigation} goToScreen="AlbumScreen" />
                <CustomCard nameIcon='file-upload' itemName='Upload' itemAmount="36" navigation={this.props.navigation} goToScreen="ListSongsUploadScreen" />

                <TouchableOpacity style={{ height: height / 13, paddingTop: 10, 
                marginHorizontal: 10, borderTopWidth: 0.5, borderColor: "#CCCCCC", 
                marginTop: 20, flexDirection: "row",
                alignItems: "center", }}
                    onPress={() => this.props.navigation.navigate('SignInScreen')}>
                    <Entypo name='log-out' size={26}  style = {{marginHorizontal: 15}}/>
                    <Text style={{ fontWeight: "bold", fontSize: 19 }} >Log Out</Text>

                </TouchableOpacity>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    item: {
        height: height / 13,
    },
    contentText: {
        marginLeft: 20,
        justifyContent: "space-around"

    },
    itemName: {
        fontSize: 16,
        marginBottom: 2,
    },
    itemAmount: {
        fontSize: 13,
        color: "#CCCCCC"
    },

    space: {
        flex: 1,
        backgroundColor: "#BBBBBB"
    },
    miniAvatar: {
        width: height / 23,
        height: height / 23,
        borderRadius: 9999
    },
    search: {
        width: 35,
        height: 35,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999
    },
});