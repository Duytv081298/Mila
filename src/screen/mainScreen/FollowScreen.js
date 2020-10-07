import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated
const { width, height } = Dimensions.get("window");

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
import { HeaderMain } from '../../header'
import { ItemPost } from '../../models'
import data from '../../data/Data'

const songs = data.post
export class FollowScreen extends Component {
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
    const {navigation} = this.props
    return (
      
      <View>
        <StatusBar backgroundColor='#CCCCCC' barStyle="light-content" />
        <Animated.View style={{
          height: _header_height,
          transform: [{ translateY: _header_translate_y }],
          opacity: _header_opacity
        }}>
          <HeaderMain navigation={navigation} />
        </Animated.View>


        <AnimatedFlatList
          data={songs}
          renderItem={ItemPost}
          renderItem={({ item, index }) => (<ItemPost item={item} index= {index} navigation={navigation}/>)}

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
