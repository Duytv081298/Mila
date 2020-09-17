import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
function IconBackground() {
    return (
        <View style={{ width: width * 3 / 4, height: width * 3 / 4, backgroundColor: "#CCFFFF", borderRadius: 999 }}>
            <IconMaterial name='music' size={110} color="black" style={{ position: "absolute", marginTop: -40, marginLeft: 90 }} />
            <IconMaterial name='account-music' size={100} color="black" style={{ position: "absolute", marginTop: width / 2, marginLeft: 90 }} />
            <IconMaterial name='music-rest-sixteenth' size={100} color="black" />
            <Entypo name='video' size={90} color="black" />
        </View>
    )
}

export class UploadScreen extends Component {
    _accessPermission() {
        Alert.alert("Access permission")
    }
    render() {
        return (
            <View style={styles.container}>
                <Ionicons
                    name='close'
                    size={25}
                    color="black"
                    style={{ margin: 10, backgroundColor: '#00FFCC', padding: 7, width: 40, height: 40, borderRadius: 80 }}
                    onPress={() => this.props.navigation.goBack()}
                />

                <View style={{ alignItems: "center" }}>
                
                    <LinearGradient
                        colors={['#EEEEEE', '#CCFFCC', '#00FFCC', '#33FF99', '#00FF33', '#3399FF', '#9999FF', '#CC99FF', '#FF6699', '#CC3366', '#CC3300']}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            padding: 17
                        }}>
                        <IconMaterial name='music' size={150} color="#FF66FF"  style={{ marginVertical: 110 }} />
                    </LinearGradient>
                    
                    <Text style={styles.text}>Start the show</Text>
                    <View style={{ width: width * 3 / 4, marginVertical: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>To create a new music, go to setting > permission and allow access to Camera, Microphone, and Storage  </Text>
                    </View>

                    <TouchableOpacity
                        onPress={this._accessPermission}
                        style={{ width: width * 3 / 4 }}>
                        <LinearGradient
                            colors={['#CCFFFF', '#6699FF', '#0066CC']}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                padding: 17
                            }}>
                            <Text style={{ textTransform: 'uppercase', color: "white", fontWeight: "bold", fontSize: 18 }}>allow access</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 30
    },
});
