import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import data from '../data/Data'
const { width, height } = Dimensions.get("window");

const listAlbum = data.album

export function ListAlbum() {
    const [page, setPage] = useState(0)
    const renderItem = ({ item, index }) => {
        return (
            <View style= {{paddingVertical: page == index? 0: 10}}>
                <View style={[styles.itemContainer, {height: page== index? height / 4: height/4.5}]}>
                    <Image source={{ uri: item.coverImage }}
                        style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover' }, styles.coverImage]} />
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemContent}>{item.content}</Text>

                </View>
            </View>
        )
    }
    onScroll = ({ nativeEvent: { contentOffset: { x } } }) => {
        const index = Math.round(x / (width -100))
        setPage(index)
    }
    renderIndicator= (key, e, i) =>{
        return(
            <View key={key} style= {[styles.dot,
            page == i && {height: 20, width: 15, borderRadius: 9, backgroundColor: "#705B79"}]}></View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={listAlbum}
                horizontal
                snapToAlignment="center"
                decelerationRate={"fast"}
                contentContainerStyle= {{paddingHorizontal: 20,marginHorizontal: 15}}
                snapToInterval={width -60}
                onScroll={onScroll}
                pagingEnabled
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style= {styles.indicatorContainer}>
            {listAlbum.map((key, e, i) => renderIndicator(e, i))}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", 
        marginTop: 20
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#E4DFE6',
        borderRadius: 5, 
        marginHorizontal: 4
    },
    itemContainer: {
        backgroundColor: '#393839',
        width: width - 80,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center'
    },
    coverImage: {
        borderRadius: 10
    },
    itemTitle: {
        color: "#fff",
        fontSize: 22,
    },
    itemContent: {
        color: "#fff"
    }
})
