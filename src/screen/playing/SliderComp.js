import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer, {useProgress} from 'react-native-track-player';
const { width, height } = Dimensions.get("window");

export default function SliderComp() {
  const {position, duration} = useProgress();

  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  };

  const handleChange = (val) => {
    TrackPlayer.seekTo(val);
  };

  //components
  return (
    <View style={styles.container}>
      <Slider
        style={{width: width-30, height: 40}}
        minimumValue={0}
        value={position}
        maximumValue={duration}
        minimumTrackTintColor="black"
        onSlidingComplete={handleChange}
        maximumTrackTintColor="#666666"
        thumbTintColor="black"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timers}>{formatTime(position)}</Text>
        <Text style={styles.timers}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  timers: {
    color: 'black',
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
