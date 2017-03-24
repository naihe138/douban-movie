/**
 * @file
 * @author 何文林
 * @date 17/3/24
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Dimensions, TextInput, Button} from 'react-native';


const { height, width } = Dimensions.get('window');

class Hot extends Component {
  constructor(props) {
    super(props);
    this.ids = [];
  }

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Text
          style={styles.title}
        >
            热映
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});

export default Hot;