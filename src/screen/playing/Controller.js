import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';
const { width, height } = Dimensions.get("window");

export default function Controller({ onNext, onPrv }) {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState('paused');
  useEffect(() => {
    if (playbackState === 'playing' || playbackState === 3) {
      setIsPlaying('playing');
    } else if (playbackState === 'paused' || playbackState === 2) {
      setIsPlaying('paused');
    } else {
      setIsPlaying('loading')
    }
  }, [playbackState]);
  const returnPlayBtn = () => {
    switch (isPlaying) {
      case 'playing':
        return <MaterialIcons name="pause" size={25} color="#FFFFFF" />;
      case 'paused':
        return <MaterialIcons name="play-arrow" size={45} color="#FFFFFF"/>;
      default:
        return <ActivityIndicator size={45} size="large" color="#FFFFFF" />;
    }
  };
  const onPlayPause = () => {
    if (playbackState === 'playing' || playbackState === 3) {
      TrackPlayer.pause();
    } else if (playbackState === 'paused' || playbackState === 2) {
      TrackPlayer.play();
    }
  };
  const BackgroundBorderView = ({ children, size, style, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[
        styles.inner,
        { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 },
        style
      ]}>
        {children}
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <BackgroundBorderView size={60} onPress={onPrv}>
        <MaterialIcons name="fast-rewind" size={25} color={'#91A1BD'} />
      </BackgroundBorderView>
      <BackgroundBorderView size={100} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF" }} onPress={onPlayPause}>
        {returnPlayBtn()}
      </BackgroundBorderView>
      <BackgroundBorderView size={60}>
        <MaterialIcons name="fast-forward" size={25} color={'#91A1BD'} onPress={onNext} />
      </BackgroundBorderView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginHorizontal: 10, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inner: {
    backgroundColor: "#DEE9F7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E2ECFD",
    borderWidth: 1

  },
});