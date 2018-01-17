import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, Animated } from 'react-native';
import { colorRed, bgColor } from '../../assets/style'

export default class MyAnimat extends Component {
  render () {
    return (
      <ScrollView>
        <Text>
          Animated
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: bgColor
  }
})