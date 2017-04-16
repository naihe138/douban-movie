/**
 * @file
 * @author 何文林
 * @date 17/3/24
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Dimensions, TextInput, Button, ScrollView, ListView, ActivityIndicator, RefreshControl} from 'react-native';
import serverApi from '../../config/serviceApi';
import List from './list';
const {height, width} = Dimensions.get('window');

let cacheResult = {
  items: [],
  total: 0
};

class Hot extends Component {
  constructor (props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows([])
    };
  }

  async getMovies () {
    try {
      let response = await fetch(serverApi.base + serverApi.sub.hot);
      let responseJson = await response.json();
      let items = cacheResult.items.concat(responseJson.subjects);
      cacheResult.items = items;
      cacheResult.total = responseJson.total;
      this.setState({
        refreshing: false,
        dataSource: this.state.dataSource.cloneWithRows(responseJson.subjects)
      })
    } catch (error) {
      this.setState({
        refreshing: false
      })
    }
  }

  _onRefresh () {
    if (this.refreshing) {
      return;
    }
    this.setState({
      refreshing: true
    });
    this.getMovies();
  }


  _renderRow (rowData) {
    return (
      <List rowData={rowData}></List>
    )
  }

  _renderFooter () {
    if (cacheResult.total!== 0) {
      return (
        <View style={styles.loadingMore}>
          <Text style={styles.loadingText}>没有更多了</Text>
        </View>
      )
    }
    return <ActivityIndicator style={[styles.loadingMore, {height: 80}]}/>
  }

  componentDidMount () {
    this.getMovies();
  }

  render () {
    return (
      <View style={styles.scrollView}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          enableEmptySections={true}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          renderFooter={this._renderFooter}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
              title="拼命加载中..."
            />
          }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {
    height: height - 110,
    width: width
  },
  loadingMore: {
    marginVertical: 20
  },
  loadingText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 12
  }
});
export default Hot;