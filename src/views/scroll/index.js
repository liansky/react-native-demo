import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { titleColor, contentColor, borderColor, bgColor } from '../../assets/style'

export default class Scroll extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ScrollView style={styles.bg}>
        <Text>滚动视图默认窗口高度</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ccc',
    padding: 20
  }
});
