import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Animated, Easing, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, { Capability, Event } from 'react-native-track-player';
import Controller from "./Controller";
import SliderComp from "./SliderComp"
const { width, height } = Dimensions.get("window");

export function PlayMusic({ props, navigation, route }) {
  const { data, index } = route.params
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(index);
  const isPlayerReady = useRef(false);
  const position = useRef(Animated.divide(scrollX, width)).current;

  const _rotateAnimation = () => {
    Animated.sequence([
      Animated.timing(rotateValue, {
        toValue: 100,
        duration: 30000,
        easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true
      }),
    ]).start(() => {
      _rotateAnimation();
    });
  }
  const interpolatedRotateAnimation = rotateValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });
  useEffect(() => {
    _rotateAnimation()
    console.log("data: " + data[songIndex].title)
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);
      setSongIndex(val);
    });
    TrackPlayer.addEventListener(Event.PlaybackTrackChanged, (e) => {
      console.log('song ended', e);
    });
    TrackPlayer.setupPlayer().then(async () => {
      console.log('Player ready');
      console.log(songIndex);
      slider.current.scrollToIndex({ index: songIndex, animated: false })
      await TrackPlayer.add(data);
      isPlayerReady.current = true;
      TrackPlayer.skip(data[songIndex].id)
      TrackPlayer.play()

      await TrackPlayer.updateOptions({
        stopWithApp: false,
        alwaysPauseOnInterruption: true,
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      });
    })
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (isPlayerReady.current) {
      TrackPlayer.skip(data[songIndex].id)
    }
  }, [songIndex]);


  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };
  const goPrv = () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          alignItems: "center",
          width: width,
          transform: [{
            translateX: Animated.multiply(Animated.add(position, -index), -100),
          }],
        }}
      >
        <Animated.Image
          source={{ uri: item.artwork }}
          style={[styles.songArt, { transform: [{ rotate: interpolatedRotateAnimation }] }]} />
      </Animated.View>
    );
  };
  const BackgroundBorderView = ({ children, size, style }) => {
    return (
      <View style={[
        styles.inner,
        { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 },
        style
      ]}>
        {children}
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <BackgroundBorderView>
          <MaterialIcons name="arrow-back" size={25} color={'#91A1BD'}
            onPress={() => navigation.goBack()}
          />
        </BackgroundBorderView>
        <View>
          <Text style={styles.playing}>PLAYING NOW</Text>
        </View>
        <BackgroundBorderView>
          <MaterialIcons name="menu" size={25} color={'#91A1BD'} />
        </BackgroundBorderView>
      </View>
      <View style={{ height: 320, marginTop: 30 }}>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        />
      </View>
      <Text style={styles.title}>{data[songIndex].title}</Text>
      <Text style={styles.artist}>{data[songIndex].artist}</Text>
      <SliderComp />
      <Controller onNext={goNext} onPrv={goPrv} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "white"
  },
  topContainer: {
    marginHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inner: {
    backgroundColor: "#DEE9F7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E2ECFD",
    borderWidth: 1
  },
  playing: {
    color: "#7B9BFF",
    fontWeight: 'bold',
    fontSize: 18
  },
  songArt: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "#D7E1F3",
    borderWidth: 10
  },
  title: {
    fontSize: 25,
    color: "#6C7A93",
    fontWeight: "600",
    textAlign: 'center',
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: '#91A1BD',
    fontWeight: "500",
    textAlign: 'center',
  }

})
