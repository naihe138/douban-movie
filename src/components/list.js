/**
 * @file
 * @author 何文林
 * @date 2017/4/6
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Dimensions, TouchableHighlight, Image, Button} from 'react-native';
import serverApi from '../../config/serviceApi';
const { height, width } = Dimensions.get('window');

class List extends Component{
  constructor(props) {
    super(props);
  }


  toDetail (id) {
    console.log(id)
  }

  toAtor (arr) {
    let str = '';
    arr.forEach((item, index) => {
      let name = '';
      if (index !== (arr.length-1)) {
        name = item.name + '/'
      } else {
        name = item.name
      }
      str += name;
    })
    return str;
  }

  render () {
    return (
      <TouchableHighlight>
        <View style={styles.listBox}>
          <View style={styles.box}>
            <Image source={{uri: this.props.rowData.images.small}} style={styles.thumb} />
            <View style={styles.textBox}>
              <Text style={styles.title}>{this.props.rowData.title}</Text>
              <Text style={styles.director}>评分：{this.props.rowData.rating.average}</Text>
              <Text style={styles.director}>导演：{this.props.rowData.directors[0].name}</Text>
              <Text style={styles.director}>主演：{this.toAtor(this.props.rowData.casts)}</Text>
            </View>
            <Text style={styles.detialBtn}>详情</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
};

const styles = StyleSheet.create({
  listBox: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: width
  },
  box: {
    paddingBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
    position: 'relative'
  },
  thumb: {
    width: width*0.194,
    height: (width*0.194)/0.71
  },
  textBox: {
    width: width*0.73,
  },
  detialBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 4,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 28,
    color: '#67ba62'
  },
  title: {
    color: '#494949',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 8
  },
  director: {
    color: '#9b9b9b',
    fontSize: 12,
    lineHeight: 16
  }
});
export default List;