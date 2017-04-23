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
  total: 0,
  start: 0
};
class Top extends Component {
  constructor (props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      loadingMore: false,
      page: 1,
      refreshing: false,
      dataSource: ds.cloneWithRows([])
    };
  }

  async getMovies (page) {
    console.log(page);
    if (page === 0) {
      this.setState({
        refreshing: true
      });
      cacheResult.start = 0;
    } else {
      this.setState({
        loadingMore: true
      });
      cacheResult.start = page * 20;
    }
    console.log(cacheResult.start);
    try {
      let response = await fetch(serverApi.base + serverApi.sub.come + '?start=' + cacheResult.start);
      let responseJson = await response.json();
      let items = [];
      if (page !== 0) {
        items = cacheResult.items.concat(responseJson.subjects);
        this.state.page += 1;
      } else {
        items = responseJson.subjects;
      }
      cacheResult.items = items;
      cacheResult.total = responseJson.total;
      if (page !== 0) {
        this.setState({
          loadingMore: false,
          dataSource: this.state.dataSource.cloneWithRows(cacheResult.items)
        })
      } else {
        this.setState({
          refreshing: false,
          dataSource: this.state.dataSource.cloneWithRows(cacheResult.items)
        })
      }
    } catch (error) {
      this.setState({
        refreshing: false
      })
    }
  }

  _onEndReached () {
    if (cacheResult.start >= cacheResult.total) {
      return
    }
    console.log(this.state.page);
    this.getMovies(this.state.page);
  }

  _onRefresh () {
    if (this.refreshing) {
      return;
    }
    this.setState({
      refreshing: true
    });
    this.getMovies(0);
  }

  _renderRow (rowData) {
    return (
      <List rowData={rowData}></List>
    )
  }

  _renderFooter () {
    if (cacheResult.total !== 0 && cacheResult.start >= cacheResult.total) {
      return (
        <View style={styles.loadingMore}>
          <Text style={styles.loadingText}>没有更多了</Text>
        </View>
      )
    }
    if (cacheResult.start === 0) {
      return (<View></View>)
    }
    return (
      <View style={styles.loadingMore}>
        <ActivityIndicator style={[styles.loadingMore]}/>
        <Text style={styles.loadingText}>拼命加载中~~~</Text>
      </View>

    )
  }

  componentDidMount () {
    this.getMovies(0)
  }

  render () {
    return (
      <View style={styles.scrollView}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          enableEmptySections={true}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          onEndReached={this._onEndReached.bind(this)}
          onEndReachedThreshold={20}
          renderFooter={this._renderFooter.bind(this)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
              title='拼命加载中...'
            />
          }
        />
      </View>
    );
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
export default Top;