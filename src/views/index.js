import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
  render () {
    const navigation = this.props.navigation
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('props')}
          title="Props"
        />
        <Button
          onPress={() => navigation.navigate('state')}
          title="State"
        />
        <Button
          onPress={() => navigation.navigate('flex')}
          title="Flex"
        />
        <Button
          onPress={() => navigation.navigate('form')}
          title="From"
        />
      </View>
    );
  }
}
