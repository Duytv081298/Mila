import React , {useEffect }from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get("window");
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

export function ItemSong({ data, item, index , onShowPopup, setItem, navigation}) {


    return (
        <View style={styles.item}>
            <TouchableOpacity style={{flex: 9,flexDirection: "row"}}
            onPress={() => {
        //         console.log('data: ' + data)
        // console.log('item: ' + item)
        // console.log('index: ' + index)
                navigation.navigate("PlayMusic", {data : data, index: index})
                }}>
                <Image
                    source={{ uri: item.artwork }}
                    style={{ width: width / 8, height: width / 8, borderRadius: 10, marginHorizontal: 10, }}
                />
                <View style={{ justifyContent: "center" }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.artist}>{item.artist}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}
            onPress={() => {
                onShowPopup()
                setItem(item)
            }}>
                <IconMaterial name="dots-vertical" size={26} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: width / 6
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "800"
    },
    artist: {
        fontSize: 13,
        fontWeight: "500",
        color: "#AAAAAA",
    },
})
