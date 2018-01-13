import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Greeting extends Component {
  render () {
    return (
      <Text>Hello { this.props.name }!</Text>
    );
  }
}

export default class Props extends Component {
  render () {
    return (
      <View>
        <Greeting name='小明'/>
        <Greeting name='小丽'/>
        <Greeting name='小红'/>
      </View>
    );
  }
}
