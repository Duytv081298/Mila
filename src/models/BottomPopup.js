import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableWithoutFeedback, Modal, Dimensions, FlatList, Image } from 'react-native'
import data from '../data/Data';
const { width, height } = Dimensions.get("window");


export class BottomPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    show = () => {
        this.setState({ show: true })
    }
    close = () => {
        this.setState({ show: false })
    }
    renderOutsideTouchble(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view
        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: "100%" }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }
    renderTitle = () => {
        const { title, item } = this.props
        return (
            <View style={{ width: width}}>
            {item ? <View style={{ flexDirection: "row", margin: 10 }}>
                    <Image
                        source={{ uri: item.artwork }}
                        style={{ width: width / 8, height: width / 8, borderRadius: 10, marginHorizontal: 10, }}
                    />
                    <View style={{ justifyContent: "center" }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.artist}>{item.artist}</Text>
                    </View>
                </View>:null }
                
            </View>
        )
    }
    renderContent = () => {
        const { data } = this.props
        return (
            <View>
                <FlatList
                    style={{ marginBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                />
            </View>
        )
    }
    renderItem = ({ item }) => {
        return (
            <View style={{ height: 50, alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "normal", color: "#182E44" }}>{item.name}</Text>
            </View>
        )
    }
    renderSeparator = () => {
        return (
            <View style={{
                opacity: 0.1,
                backgroundColor: "#182E44",
                height: 1
            }} />
        )

    }
    render() {
        let { show } = this.state
        const { onTouchOutside } = this.props
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}>
                <View style={{
                    flex: 1, backgroundColor: '#000000AA',
                    justifyContent: 'flex-end'
                }}>
                    {this.renderOutsideTouchble(onTouchOutside)}
                    <View style={{
                        backgroundColor: "#FFFFFF",
                        width: "100%",
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: height * 0.4,

                    }}>
                        {this.renderTitle()}
                        {this.renderContent()}


                    </View>


                </View>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
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
