/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './src/components/header1'
export default class doubanMovie extends Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'hot',
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#acacac"
        tintColor="#67ba62"
        unselectedItemTintColor="#acacac"
        barTintColor="#f7f7f7">
        <Icon.TabBarItem
          title="热映"
          iconName="houzz"
          selectedIconName="houzz"
          selected={this.state.selectedTab === 'hot'}
          onPress={() => {
            this.setState({
              selectedTab: 'hot',
            });
          }}>
          <View>
            <Header title={'正在热映'} />
          </View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName="database"
          selectedIconName="database"
          title="排行"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          badgeColor="black"
          selected={this.state.selectedTab === 'top'}
          onPress={() => {
            this.setState({
              selectedTab: 'top'
            });
          }}>
          <View>
            <Header title={'top250'} />
          </View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName="creative-commons"
          selectedIconName="creative-commons"
          title="预告"
          selected={this.state.selectedTab === 'come'}
          onPress={() => {
            this.setState({
              selectedTab: 'come'
            });
          }}>
          <View>
            <Header title={'新片速递'} />
          </View>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('doubanMovie', () => doubanMovie);
