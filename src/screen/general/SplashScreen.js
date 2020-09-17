
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Animated,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import { IMAGES, PROFILE, DIMENSIONS } from '../../constants'

export class SplashScreen extends Component {
    state = {
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner: false,
    };
    componentDidMount() {
        const { LogoAnime, LogoText } = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000,
                useNativeDriver: false
            }).start(),
            Animated.timing(LogoText, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            })
            
        ]).start(() => {
            this.setState({
                loadingSpinner: true,
            });
            setTimeout(
                () =>
                    auth().onAuthStateChanged((user) => {
                        this.props.navigation.navigate(user ? 'Home' : 'SignInScreen');
                    }),
                2000,
            );
        });

    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#5257F2' barStyle="light-content" />
                <Animated.View
                    style={{
                        opacity: this.state.LogoAnime,
                        top: this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [80, 0],
                        }),
                    }}>
                    <Image source={IMAGES.LOGO_1} />

                </Animated.View>
                <Animated.View style={{ opacity: this.state.LogoText }}>
                    <Text style={styles.logoText}> MILA </Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5257F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: '#FFFFFF',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 30,
        marginTop: 29.1,
        fontWeight: '300',
    },
});