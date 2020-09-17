import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import data from '../data/Data'
const { width, height } = Dimensions.get("window");

const listAlbum = data.album

export function MiniListAlbum( {navigation}) {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.itemContainer]}
            onPress= {() => {
                console.log( listAlbum.length)
                navigation.navigate("DetailAlbum", {item: item, amount: listAlbum.length})
            }}>
                <Image source={{ uri: item.coverImage }}
                    style={[styles.coverImage]} />
                <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={listAlbum}
                horizontal
                snapToInterval={10}
                pagingEnabled
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    itemContainer: {
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: "center",
        width: width / 4,
    },
    coverImage: {
        width: width / 4,
        height: width / 4,
        borderRadius: 10
    },
    itemTitle: {
        marginTop: 7,
        fontSize: 15,
    }
})
