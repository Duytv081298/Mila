// import React, { useRef, useEffect, useState } from "react";
// import {
//   View,
//   SafeAreaView,
//   Text,
//   Image,
//   FlatList,
//   Dimensions,
//   Animated,
//   StyleSheet,
// } from "react-native";

// import TrackPlayer, {
//   Capability,
//   Event,
// } from 'react-native-track-player';

// import data from '../../data/Data';
// import Controller from "./Controller";
// import SliderComp from "./SliderComp"
// const songs = data.songs

// const { width, height } = Dimensions.get("window");

// export function PlayMusic (props) {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const slider = useRef(null);
//   const [songIndex, setSongIndex] = useState(4);
//   const isPlayerReady = useRef(false);
//   const position = useRef(Animated.divide(scrollX, width)).current;

//   useEffect(() => {
//     console.log(props.data)
//     scrollX.addListener(({ value }) => {
//       const val = Math.round(value / width);
//       setSongIndex(val);

//     });
//     TrackPlayer.addEventListener(Event.PlaybackTrackChanged, (e) => {
//       console.log('song ended', e);
//     });
//     TrackPlayer.setupPlayer().then(async () => {
//       console.log('Player ready');
//       console.log(songIndex);
//       slider.current.scrollToIndex({index: songIndex, animated: false })
//       await TrackPlayer.add(songs);
//       isPlayerReady.current = true;
//       TrackPlayer.skip(songs[songIndex].id)


//       await TrackPlayer.updateOptions({
//         stopWithApp: false,
//         alwaysPauseOnInterruption: true,
//         capabilities: [
//           Capability.Play,
//           Capability.Pause,
//           Capability.SkipToNext,
//           Capability.SkipToPrevious,
//         ],
//       });

//     })

//     return () => {
//       scrollX.removeAllListeners();
//     };
//   }, []);

//   useEffect(() => {
//     if (isPlayerReady.current ) {
//       TrackPlayer.skip(songs[songIndex].id)
//     }
//     // index.current = songIndex;
//   }, [songIndex]);


//   const goNext = () => {
//     slider.current.scrollToOffset({
//       offset: (songIndex + 1) * width,
//     });
//   };
//   const goPrv = () => {
//     slider.current.scrollToOffset({
//       offset: (songIndex - 1) * width,
//     });
//   };

//   const renderItem = ({ index, item }) => {
//     return (
//       <Animated.View
//         style={{
//           alignItems: "center",
//           width: width,
//           transform: [
//             {
//               translateX: Animated.multiply(
//                 Animated.add(position, -index),
//                 -100
//               ),
//             },
//           ],
//         }}
//       >
//         <Animated.Image
//           source= {{uri: item.artwork}}
//           style={{ width: 320, height: 320, borderRadius: 5 }}
//         />
//         <Animated.Text>{item.artwork}</Animated.Text>
//       </Animated.View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <SafeAreaView style={{ height: 320 }}>
//         <Animated.FlatList
//           ref={slider}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           scrollEventThrottle={16}
//           data={songs}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//             { useNativeDriver: true }
//           )}
//         />
//       </SafeAreaView>
//       <View>
//         <Text style={styles.title}>{songs[songIndex].title}</Text>
//         <Text style={styles.artist}>{songs[songIndex].artist}</Text>
//       </View>
//             <SliderComp/>
//       <Controller onNext={goNext} onPrv={goPrv} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 28,
//     textAlign: "center",
//     textTransform: "capitalize",
//   },
//   artist: {
//     fontSize: 18,
//     textAlign: "center",
//     textTransform: "capitalize",
//   },
//   container: {
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     height: height,
//     maxHeight: 500,
//   },
// });




import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Animated, Easing } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
const gray = "#91A1BD"

export function PlayMusic() {
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  useEffect(() => {
    _rotateAnimation()
  }, []);

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
  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={{
        shadowOffset: { width: -6, height: -6 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "#FBFFFF",
        elevation: 12,
      }}>
        <View style={{
          shadowOffset: {width: 6,height: 6},
          shadowOpacity: 1,
          shadowRadius: 6,
          shadowColor: "#B7C4DD",
          elevation: 12,
        }}>
          <View style={[
            styles.inner,
            { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 },
            style
          ]}>
            {children}
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 32, marginTop: 32 }}>
        <View style={styles.topContainer}>
          <NeuMorph>
            <MaterialIcons name="arrow-back" size={25} color={gray} />
          </NeuMorph>
          <View>
            <Text style={styles.playing}>PLAYING NOW</Text>
          </View>
          <NeuMorph>
            <MaterialIcons name="menu" size={25} color={gray} />

          </NeuMorph>
        </View>
        <View style={styles.songArtContainer}>
          <NeuMorph size={300}>
            <Animated.Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/my-music-fe7fc.appspot.com/o/images%2Favatar%2FIMG_20200702_001745.jpg?alt=media&token=9d62c12a-99f4-4b52-a30d-8daf1ec7d940" }}
              style={[styles.songArt, { transform: [{ rotate: interpolatedRotateAnimation }] }]} />
          </NeuMorph>
        </View>
        <View style={styles.songContainer}>
          <Text style={styles.title}>Lost it</Text>
          <Text style={styles.artist}>Flume ft. Vic Mensa</Text>
        </View>
        <View style={styles.trackContainer}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.time}>1:21</Text>
            <Text style={styles.time}>3:46</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#8AAAFF"
            maximumTrackTintColor="#DAE6F4"
            thumbTintColor="#7B9BFF"
          />
        </View>
        <View style={styles.controlsContainer}>
          <NeuMorph size={80}>
            <MaterialIcons name="fast-rewind" size={25} color={gray} />
          </NeuMorph>
          <NeuMorph size={80} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF" }}>
            <MaterialIcons name="pause" size={25} color="#FFFFFF" />
          </NeuMorph>
          <NeuMorph size={80}>
            <MaterialIcons name="fast-forward" size={25} color={gray} />
          </NeuMorph>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE9FD"
  },
  topContainer: {
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
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF",
    elevation: 12,
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD",
    elevation: 12,
  },
  playing: {
    color: gray,
    fontWeight: "800"
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems: "center"
  },
  songArt: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "#D7E1F3",
    borderWidth: 10
  },
  songContainer: {

    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#6C7A93",
    fontWeight: "600"
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: gray,
    fontWeight: "500"
  },
  trackContainer: {
    marginTop: 32,
    marginBottom: 64
  },
  time: {
    fontSize: 10,
    color: gray,
    fontWeight: "700"
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }

})
