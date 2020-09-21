import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer, { useProgress } from 'react-native-track-player';
const { width, height } = Dimensions.get("window");

export default function SliderComp() {
  const { position, duration } = useProgress();

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
    <View style={{ marginVertical: 30}}>
    <View style= {{width: width, alignItems: "center"}}>
    <Slider
        style={{ width: width - 50, height: 40 }}
        minimumValue={0}
        value={position}
        maximumValue={duration}
        onSlidingComplete={handleChange}
        minimumTrackTintColor="#8AAAFF"
        maximumTrackTintColor="#DAE6F4"
        thumbTintColor="#7B9BFF"
      />
    </View>
      
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 35 }}>
        <Text style={styles.timers}>{formatTime(position)}</Text>
        <Text style={styles.timers}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  timers: {
    fontSize: 13,
    color: "#91A1BD",
    fontWeight: "700"
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
