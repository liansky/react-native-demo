import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Props extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>你好，我是详情页</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="点击回首页"
        />
      </View>
    );
  }
}
