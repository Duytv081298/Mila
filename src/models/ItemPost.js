
import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get("window");
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function ItemPost({ item, navigation }) {
    const { container, containerHeader, rightInfor, centerInfor, name, leftInfor, avatar, content, footer } = styles
    return (
        <View style={container}>
            <View style={containerHeader}>
                <TouchableOpacity style={rightInfor}
                onPress={() => navigation.navigate("ChannelDetail", {item: item})}>
                    <Image
                        style={avatar}
                        source={{ uri: item.avatar,}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={centerInfor}
                
                onPress={() => navigation.navigate("ChannelDetail", {item: item})}>

                    <Text style={name}>{item.name}</Text>
                    <Text style={{ color: "#CCCCCC", fontSize: 14 }}>18 phút</Text>
                </TouchableOpacity>
                <View style={leftInfor}>
                    <Entypo name="dots-three-horizontal" size={22} color="#BBBBBB" />
                </View>
            </View>
            <View style={content}>
                {item.content ? (
                    <View style={{ marginHorizontal: 5, marginBottom: 10 }}>
                        <Text style={{ lineHeight: 25, fontSize: 15, fontWeight: "400" }}>{item.content}</Text>
                    </View>) : (null)}
                {item.image ? (
                    <Image
                        style={{ width: width - 10, height: height * 3 / 9 }}
                        source={{
                            uri: item.image,
                        }}
                        resizeMode="contain"
                    />) : (null)}


            </View>
            <View style={footer}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={{ flex: 1, flexDirection: "row"  }}>
                        <AntDesign name="like2" size={16} style = {{marginHorizontal: 5, marginLeft: 10}}/>
                        <Text>1.317</Text>

                    </View>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style ={{alignSelf: "flex-end"}} >160 bình luận ~ 108 chia sẻ</Text>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: "#BBBBBB", marginVertical: 10}}/>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <AntDesign name="like2" size={20} style = {{marginHorizontal: 5}}/>
                        <Text>Like</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"  }}>
                        <EvilIcons name="comment" size={25} style = {{marginHorizontal: 5}}/>
                        <Text style= {{fontSize: 15, fontWeight: "300"}}>Comment</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <MaterialCommunityIcons name="share" size={20} style = {{marginHorizontal: 5}}/>
                        <Text>Share</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: "#fff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    containerHeader: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
    rightInfor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 10
    },
    avatar: {
        width: width / 11,
        height: width / 11,
        borderRadius: width / 22
    },
    centerInfor: {
        flex: 5,
        justifyContent: "center"
    },
    name: {
        fontWeight: "bold",
        fontSize: 18
    },
    leftInfor: {
        flex: 1,
        borderTopRightRadius: 10,
        alignItems: "center",
    },
    content: {
        flex: 4,
    },
    footer: {
        flex: 1,
        marginVertical: 10
    }


})
