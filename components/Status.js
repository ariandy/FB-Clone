import React, { Component } from 'react'
import {View, Text} from 'react-native'

class Status extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.notes}</Text>
      </View>
    );
  }
}
export default Status