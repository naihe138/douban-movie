/**
 * @file
 * @author 何文林
 * @date 17/3/23
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Dimensions, TextInput, Button} from 'react-native';


const { height, width } = Dimensions.get('window');


class Header extends Component {
  constructor(props) {
    super(props);
    this.ids = [];
    this.state = { text: '' };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.serchBox}>
        <TextInput
          style={styles.serchInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'输入你想要的电影'}
        />
        <Text
          style={styles.serchBtn}
        >
          搜索
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  serchBox: {
    backgroundColor: '#67ba62',
    height: 90,
    paddingTop: 40
  },
  serchInput: {
    height: 32,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 4,
    width: width*0.66,
    marginLeft: width*0.05,
    paddingLeft: 10,
    color: '#ffffff',
    fontSize: 14
  },
  serchBtn: {
    width: width*0.2,
    height: 32,
    position: 'absolute',
    borderWidth: 1,
    right: width*0.05,
    top: 40,
    textAlign: 'center',
    lineHeight: 30,
    borderRadius: 4,
    color: '#67ba62',
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    overflow: 'hidden'
  }
});



export default Header;