import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class State extends Component {

  constructor (props) {
    super(props)
    this.state = { data: new Date() }
  }

  // 挂载
  componentDidMount () {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  // 卸载
  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({data: new Date()})
  }

  render () {
    return (
      <View>
        <Text>Hello World!</Text>
        <Text>现在是{this.state.data.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
