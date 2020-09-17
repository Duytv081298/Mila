import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, ScrollView } from 'react-native';
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
      item: null
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
    return (
      <FlatList
        ListHeaderComponent={
          <>
            <StatusBar backgroundColor='#CCCCCC' barStyle="light-content" />
            <HeaderMain navigation={this.props.navigation} />
            <ListAlbum navigation={this.props.navigation} />
            <Text style={styles.title}>Có thể bạn muốn nghe </Text>
            <MiniListAlbum navigation={this.props.navigation} props={this.props} />
          </>
        }
        data={songs}
        renderItem={({ item }) => <ItemSong item={item} onShowPopup={this.onShowPopup} setItem={this.setItem} navigation={this.props.navigation} />}
        keyExtractor={item => item.id}
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
