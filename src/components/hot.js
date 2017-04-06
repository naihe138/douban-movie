/**
 * @file
 * @author 何文林
 * @date 17/3/24
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Dimensions, TextInput, Button, ScrollView} from 'react-native';
import serverApi from '../../config/serviceApi';

import List from './list';

const { height, width } = Dimensions.get('window');

class Hot extends Component {
  constructor(props) {
    super(props);
    this.ids = [];
  }

  async getMovies() {
    try {
      let response = await fetch(serverApi.base + serverApi.sub.hot);
      let responseJson = await response.json();
      console.log(responseJson);
    } catch(error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    var _scrollView: ScrollView;
    return (
      <View style={styles.scrollBox}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          <List listData={THUMBS}></List>
        </ScrollView>
      </View>
    )
  }
}
var THUMBS = [1, 2, 3, 5, 6, 6, 1, 2, 3, 5, 6, 6, 1, 2, 3, 5, 6, 6, 1, 2, 3, 5, 6, 6, 1, 2, 3, 5, 6, 6, 1, 2, 3, 5, 6, 6];

const styles = StyleSheet.create({
  scrollView: {
    height: height - 110,
    width: width
  }
});

export default Hot;