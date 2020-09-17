import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
const { width, height } = Dimensions.get("window");
import { Header } from '../../header'

export function DetailAlbum({ navigation, route }) {
    const item = route.params.item
    useEffect(() => {
        console.log(route.params.item)
    }, []);
    const { container, containerContent, image, title, more } = styles

    return (

        <View style={container}>
            <Header navigation={navigation} />
            <View style={containerContent}>
                <Image source={{ uri: item.coverImage }}
                    style={[image]} />
                <Text style={title}>{item.title}</Text>
                <Text style= {more}></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    containerContent: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: width * 3 / 5,
        height: width * 3 / 5,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 15

    }, 
    more: {
        
    }
})
