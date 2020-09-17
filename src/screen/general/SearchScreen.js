import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Dimensions, TextInput, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { PROFILE, DIMENSIONS } from '../../constants';

function ItemSearch(props){
    return(
        <View style= {{flexDirection: "row", paddingVertical: 10}}>
            <View style={{ flex: 1.5 ,   alignItems: "center"}}>
                {props.result ? (
                    <Image source={{ uri: PROFILE.AVATAR }} style={styles.avatar} />
                ) : (
                        <Ionicons name='search' size={25} color="#DDDDDD" />
                    )}
                

            </View>
            <View style={{ flex: 8, justifyContent: "center", paddingHorizontal: 10}}>
                <Text style= {{fontSize: 15}}>{props.searchText}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Ionicons name='close' size={25} color="#DDDDDD" />
            </View>
        </View>
    )
}

export class SearchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header} >
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Ionicons 
                        onPress={() =>this.props.navigation.goBack()} 
                            name='arrow-back' 
                        size={25} color="black" 
                        style= {{alignSelf: "flex-start", marginLeft: 10 }} />
                    </View>
                    <View style={{ flex: 8, height: height / 20,}}>
                        
                            <TextInput
                            style={{ width: (width * 7.8) / 9, backgroundColor: "#EEEEEE", borderRadius: 35}}
                                placeholder="Search"
                                autoCapitalize= "sentences"
                                fontSize= {17}
                                autoFocus={true}
                            />
                    </View>
                </View>
                <View style={styles.recent}>
                <Text style= {{fontSize: 18, fontWeight: "bold"}}>Recent searches</Text>
                    <Text style={{ textTransform: 'uppercase', color: "#BBBBBB"}}>edit</Text>

                </View>
                <ItemSearch searchText="Nguyễn Thị Anh Anh" />
                <ItemSearch searchText="Nguyễn Thị Anh Anh" result = {true} />
                <ItemSearch searchText="Nguyễn Thị Anh Anh" />
                <ItemSearch searchText="Nguyễn Thị Anh Anh" result={true}/>
                <ItemSearch searchText="Nguyễn Thị Anh Anh" />
                <ItemSearch searchText="Nguyễn Thị Anh Anh" result={true}/>
                <ItemSearch searchText="Nguyễn Thị Anh Anh" />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    header:{
        height: height / 15, 
        flexDirection: "row", 
        alignItems: "center", 
        borderBottomWidth: 0.5, 
        borderBottomColor: "#CCCCCC", 
        paddingVertical: 10
    },
    recent:{
        flexDirection: "row", 
        padding: 10, 
        paddingTop: 15, 
        justifyContent: "space-between", 
        borderBottomWidth: 0.5,
        borderBottomColor: "#CCCCCC",
    },
    avatar: {
        width: DIMENSIONS.WINDOWHEIGHT / 29,
        height: DIMENSIONS.WINDOWHEIGHT / 29,
        borderRadius: 9999
    }
});
