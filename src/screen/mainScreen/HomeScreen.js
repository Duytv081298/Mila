import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, ScrollView, Dimensions } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated
const { width, height } = Dimensions.get("window");
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
import { HeaderMain } from '../../header'
import { ItemSong, BottomPopup } from '../../models'
import { ListAlbum, MiniListAlbum } from '../../components'

import data from '../../data/Data'

const songs = data.songs
const popupList = data.popupList
export class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      _scroll_y: new Value(0)
    }
  }
  popupRef = React.createRef()
  setItem = (item) => {
    this.setState({ item: item })
  }
  onShowPopup = () => {
    this.popupRef.show()
  }
  onClosePopup = () => {
    this.popupRef.close()
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
      <View >
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
              <ListAlbum navigation={this.props.navigation} />
              <Text style={styles.title} onPress={() => this.props.navigation.navigate('Album')}>Có thể bạn muốn nghe </Text>
              <MiniListAlbum navigation={this.props.navigation} props={this.props} />
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
          ListFooterComponent={
            <BottomPopup
              title="Demo popup"
              ref={(target) => this.popupRef = target}
              onTouchOutside={this.onClosePopup}
              data={popupList}
              item={this.state.item}
            />
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    textTransform: 'capitalize',
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold'

  }
});
