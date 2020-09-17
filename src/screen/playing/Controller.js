import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';

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
        return <MaterialIcons  name="pause" size={45} />;
      case 'paused':
        return <MaterialIcons  name="play-arrow" size={45} />;
      default:
        return <ActivityIndicator size={45}  size="large" color="#00ff00"/>;
    }
  };
  const onPlayPause = () => {
    if (playbackState === 'playing' || playbackState === 3) {
      TrackPlayer.pause();
    } else if (playbackState === 'paused' || playbackState === 2) {
      TrackPlayer.play();
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <MaterialIcons name="skip-previous" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
        {returnPlayBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <MaterialIcons name="skip-next" size={45} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250
  },
});