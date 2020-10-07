import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OptionsMenu from 'react-native-options-menu';
import Animated from "react-native-reanimated";

import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get("window");
import data from '../../data/Data'

function HomeScreen() {
    return (
        <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>

            <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: width - 100, height: height / 2, backgroundColor: "#9999CC", marginVertical: 20 }}></View>
                    <View style={{ width: width - 100, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
                    <View style={{ width: width - 100, height: height / 2, backgroundColor: "#CC6699", marginVertical: 20 }}></View>
                    <View style={{ width: width - 100, height: height / 2, backgroundColor: "#666699", marginVertical: 20 }}></View>
                    <View style={{ width: width - 100, height: height / 2, backgroundColor: "#FF3399", marginVertical: 20 }}></View>
                    <View style={{ width: width - 100, height: height / 2, backgroundColor: "#993399", marginVertical: 20 }}></View>
                    <View style={{ width: width - 100, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
                </View>
            </ScrollView>
        </ScrollView>
    );
}

function SettingsScreen() {
    return (

        <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#9999CC", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#CC6699", marginVertical: 20 }}>
                    <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#9999CC", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#CC6699", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#666699", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#FF3399", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#993399", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#666699", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#FF3399", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#993399", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
            </View>
        </ScrollView>
    );
}
function Detail() {
    return (

        <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#9999CC", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#CC6699", marginVertical: 20 }}>
                    <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#9999CC", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#CC6699", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#666699", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#FF3399", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#993399", marginVertical: 20 }}></View>
                            <View style={{ width: width - 100, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#666699", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#FF3399", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#993399", marginVertical: 20 }}></View>
                <View style={{ width: width - 50, height: height / 2, backgroundColor: "#0099FF", marginVertical: 20 }}></View>
            </View>
        </ScrollView>
    );
}

const Tab = createMaterialTopTabNavigator();

const artist = data.artist[0]

const HEADER_MAX_HEIGHT = (height * 30) / 100;
const HEADER_MIN_HEIGHT = (height * 6) / 100;
const IMAGE_MAX_HEIGHT = width / 2.5;
const IMAGE_MIN_HEIGHT = (height * 5) / 100;

const { interpolate, Extrapolate, } = Animated;


export function ChannelDetail({ route, navigation }) {
    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    const [isShowMiniAvatar, setIsShowMiniAvatar] = useState(false);


    const item = route.params.item
    const { container, avatarImage, miniAvatar, content, name } = styles
    useEffect(() => { }, []);

    const headerHeight = interpolate(scrollY, {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: Extrapolate.CLAMP,
    })
    const headerTransformY = interpolate(scrollY, {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [0, -10],
        extrapolate: Extrapolate.CLAMP,
    })
    const headerOpacity = interpolate(scrollY, {
        inputRange: [HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 1, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 2],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
    })
    const hideComponent = interpolate(scrollY, {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
    })
    const miniAvatarOpacity = interpolate(scrollY, {
        inputRange: [HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 1, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 2],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP,
    })
    const avatarHeight = interpolate(scrollY, {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [IMAGE_MAX_HEIGHT, IMAGE_MIN_HEIGHT],
        extrapolate: Extrapolate.CLAMP,
    })
    const avatarTransformX = interpolate(scrollY, {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [0, -110],
        extrapolate: Extrapolate.CLAMP,
    })
    const avatarTransformY = interpolate(scrollY, {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT - 50],
        outputRange: [0, 40],
        extrapolate: Extrapolate.CLAMP,
    })
    const nameTransformX = interpolate(scrollY, {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [0, 30],
        extrapolate: Extrapolate.CLAMP,
    })
    const nameFontSize = interpolate(scrollY, {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [20, 15],
        extrapolate: Extrapolate.CLAMP,
    })
    const handleScroll = (e) => {
        console.log(e.nativeEvent.contentOffset.y);
    }
    return (
        <View style={container}>
            <Animated.View style={[{ position: "absolute", top: 0, left: 0, right: 0, backgroundColor: '#E87898', height: HEADER_MAX_HEIGHT },
            { height: headerHeight, opacity: headerOpacity, transform: [{ translateY: headerTransformY }] },]}>
                <Animated.Image
                    style={[{ height: HEADER_MAX_HEIGHT, width: width }, { height: headerHeight }]}
                    source={{ uri: artist.avatar, }}
                />
            </Animated.View>

            {/* Header max height */}
            <Animated.View style={[{
                position: "absolute", top: 0, left: 0, right: 0,
                width: width,
                height: HEADER_MIN_HEIGHT,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }, { opacity: headerOpacity }]}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <MaterialIcons name="arrow-back" size={25} color='black'
                        onPress={() => navigation.goBack()} />
                </View>
                <View style={{ flex: 3 }}></View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <OptionsMenu
                        customButton={
                            <IconMaterial name="dots-vertical" size={26} color="black" />
                        }
                        destructiveIndex={1}
                        options={['Edit', 'Cancel']}
                    // actions={[() => {   navigation.navigate('EditProfileScreen');},() => { },]}
                    />
                </View>
            </Animated.View>
            {/* Header min height */}
            <Animated.View style={[{
                width: width,
                height: HEADER_MIN_HEIGHT,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: 0
            }, { opacity: miniAvatarOpacity }]}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <MaterialIcons name="arrow-back" size={25} color='black'
                        onPress={() => navigation.goBack()} />
                </View>
                <Animated.View style={[{ flex: 3, alignItems: 'center', flexDirection: "row", justifyContent: "space-between" }]}>
                    <Image style={miniAvatar} source={{ uri: item.avatar }} />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "800" }}>{item.name}</Text>
                        <Text style={{ fontSize: 15, fontWeight: "500", color: "#BBBBBB" }}>{artist.followers} follower</Text>
                    </View>

                </Animated.View>

                <View style={{ flex: 1, alignItems: 'center' }}>

                    <OptionsMenu
                        customButton={
                            <IconMaterial name="dots-vertical" size={26} color="black" />
                        }
                        destructiveIndex={1}
                        options={['Edit', 'Cancel']}
                    // actions={[() => {   navigation.navigate('EditProfileScreen');},() => { },]}
                    />
                </View>
            </Animated.View>
            <Animated.ScrollView nestedScrollEnabled={true} style={content}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                    { listener: (event) => handleScroll(event) }
                )}>
                <View style={{ width: width, alignItems: 'center' }}>
                    <Animated.Image style={[avatarImage, { height: avatarHeight, width: avatarHeight, transform: [{ translateX: avatarTransformX, translateY: avatarTransformY }], opacity: headerOpacity }]} source={{ uri: item.avatar }} />
                    <Animated.Text style={[name, { fontSize: nameFontSize, transform: [{ translateX: nameTransformX }], opacity: headerOpacity }]}>{item.name}</Animated.Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <Animated.Text style={[{ color: '#BBBBBB' }, { opacity: hideComponent }]}>{artist.followers} follower</Animated.Text>
                    <Animated.View style={[{ marginTop: 10 }, { opacity: hideComponent }]}>
                        <TouchableOpacity
                            onPress={() => { Alert.alert('Followed') }}>
                            <LinearGradient
                                colors={['#CC66FF', '#6666CC', '#0066CC']} style={{ padding: 10, paddingHorizontal: 60, borderRadius: 30 }}>
                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Follow</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </Animated.View>

                </View>
                <View style= {{height: height- HEADER_MIN_HEIGHT-20}}>
                
                <Tab.Navigator
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                    <Tab.Screen name="Detail" component={Detail} />
                </Tab.Navigator>

                </View>
                

            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarImage: {
        width: IMAGE_MAX_HEIGHT,
        height: IMAGE_MAX_HEIGHT,
        borderRadius: IMAGE_MAX_HEIGHT / 2,
        borderWidth: 5,
        borderColor: '#EEEEEE',
        marginTop: HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT - IMAGE_MAX_HEIGHT / 2
    },
    miniAvatar: {
        height: IMAGE_MIN_HEIGHT,
        width: IMAGE_MIN_HEIGHT,
        borderRadius: IMAGE_MIN_HEIGHT / 2,
        borderWidth: 2,
        borderColor: '#EEEEEE'
    },
    content: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#EE0000',
        marginVertical: 7
    },
    follow: {
        flexDirection: 'row',
        marginTop: 40,
    },
})
