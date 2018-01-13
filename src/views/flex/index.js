import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class State extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View>
        <View>
          <Text style={styles.title}>使用flex布局</Text>
        </View>
        <View style={styles.flex}>
          <View style={styles.row_1}><Text>1</Text></View>
          <View style={styles.row_2}><Text>2</Text></View>
          <View style={styles.row_3}><Text>3</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'red',
  },
  flex: {
    alignItems: 'center',
    // flexDirection: 'row',
    flexDirection: 'column',
    height: 300,
  },
  row_1: {
    height: 100,
    backgroundColor: 'red',
    flex: 1
  },
  row_2: {
    height: 200,
    backgroundColor: 'yellow',
    flex: 1,
    alignSelf: 'center'
  },
  row_3: {
    height: 300,
    backgroundColor: 'blue',
    flex: 1
  }
});
