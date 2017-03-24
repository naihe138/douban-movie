/**
 * @file
 * @author 何文林
 * @date 17/3/24
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Dimensions, TextInput, Button} from 'react-native';


const { height, width } = Dimensions.get('window');

class Header extends Component {
  constructor(props) {
    super(props);
    this.ids = [];
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.serchBox}>
        <Text
          style={styles.title}
        >
          {this.props.title}
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  serchBox: {
    backgroundColor: '#67ba62',
    height: 60,
    paddingTop: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff'
  }
});



export default Header;