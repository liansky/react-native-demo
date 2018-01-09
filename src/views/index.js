import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
  render () {
    const navigation = this.props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>学习列表</Text>
        <Button
          onPress={() => navigation.navigate('props')}
          title="Props"
        />
      </View>
    );
  }
}
