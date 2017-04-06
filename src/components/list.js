/**
 * @file
 * @author 何文林
 * @date 2017/4/6
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Dimensions, Button, Image} from 'react-native';
import serverApi from '../../config/serviceApi';
const { height, width } = Dimensions.get('window');

class List extends Component{
  constructor(props) {
    super(props);
    this.states = {
      a: '213'
    }
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.props.listData);
  }

  render () {

    /*
    return (
      <View>
        {this.props.listData.map((item, index) => {
          return (
            <View style={styles.listBox}>
              <Image source={require('../../imgs/cat.png')} style={styles.thumb} />
            </View>
            <Text key={index}>{item}</Text>
          )
        })}
      </View>
    )
    */
    return (
      <View style={styles.listBox}>
        <Image source={require('../../imgs/cat.png')} style={styles.thumb} />
        <View style={styles.textBox}>
          <Text style={styles.title}>为什么猫都叫不来</Text>
          <Text style={styles.director}>导演：山本头</Text>
          <Text style={styles.actor}>演员：山本头、山本头、山本头、山本头、山本头、山本头、山本头、山本头、山本头、山本头、</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  listBox: {
    padding: 10,
    flex: 1,
    width: width,
    backgroundColor: 'green'
  },
  thumb: {
    width: width*0.194,
    height: (width*0.194)/0.71,
    alignSelf: 'flex-start'
  },
  textBox: {
    width: width*0.5,
    alignSelf: 'flex-end',
    backgroundColor: 'red'
  }
});
export default List;