import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, Dimensions, FlatList } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated
const { width, height } = Dimensions.get("window");

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
import { HeaderMain } from '../../header'
import data from '../../data/Data'
import { ItemSong } from '../../models'

const songs = data.songs
export class HistoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _scroll_y: new Value(0)
    }
  }

  render() {
    const _diff_clap_scrolly_y = Animated.diffClamp(this.state._scroll_y, 0, height / 15)
    const _header_height = Animated.interpolate(_diff_clap_scrolly_y, {
      inputRange: [0, height / 15],
      outputRange: [height / 15, 0],
      extrapolate: "clamp"

    })
    const _header_translate_y = Animated.interpolate(_diff_clap_scrolly_y, {
      inputRange: [0, height / 15],
      outputRange: [0, -height / 15],
      extrapolate: "clamp"

    })
    const _header_opacity = Animated.interpolate(_diff_clap_scrolly_y, {
      inputRange: [0, height / 15],
      outputRange: [1, 0],
      extrapolate: "clamp"

    })
    return (
      <View>
        <StatusBar backgroundColor='#CCCCCC' barStyle="light-content" />
        <Animated.View style={{
          height: _header_height,
          transform: [{ translateY: _header_translate_y }],
          opacity: _header_opacity
        }}>
          <HeaderMain navigation={this.props.navigation} />
        </Animated.View>


        <AnimatedFlatList
        ListHeaderComponent={
            <>
              <View>
                <Text style= {{fontSize: 22, fontWeight: "bold", marginLeft: 10, marginVertical: 10}}>History</Text>
              </View>
            </>
          }
          data={songs}
          renderItem={({ item, index }) => (<ItemSong data={songs} item={item} index= {index} onShowPopup={this.onShowPopup} setItem={this.setItem} navigation={this.props.navigation} />)}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={5}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state._scroll_y } } }],
            { useNativeDriver: true }
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
