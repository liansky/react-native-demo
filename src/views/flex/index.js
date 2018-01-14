import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { titleColor, contentColor, borderColor, bgColor } from '../../assets/style'

export default class State extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.bg}>
        <View>
          <Text style={styles.title}>使用flex布局</Text>
        </View>
        <View style={styles.flex}>
          <View style={[styles.row]}>
            <Text style={styles.text}>姓名</Text>
            <Text style={[styles.text,styles.value]}>张三</Text>
          </View>
          <View style={[styles.row]}>
            <Text style={styles.text}>年龄</Text>
            <Text style={[styles.text,styles.value]}>30</Text>
          </View>
          <View style={[styles.row, styles.row_3]}>
            <Text style={styles.text}>爱好</Text>
            <Text style={[styles.text,styles.value]}>学习</Text>
          </View>
        </View>
      </View>
    );
  }
}

/**
 * flex 默认主轴方向为column
 * flex 只支持数字
 */

const styles = StyleSheet.create({
  bg: {
    backgroundColor: bgColor,
    flex: 1
  },
  title: {
    color: titleColor,
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 20
  },
  flex: {
    alignItems: 'stretch',
    flexDirection: 'row',
    // flexDirection: 'column',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    marginBottom: 30,

  },
  row: {
    flex: 1,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderRightColor: borderColor,
    borderRightWidth: 0.5
  },
  row_3: {
    borderRightWidth: 0
  },
  text: {
    color: titleColor,
    textAlign: 'center',
    lineHeight: 16,
    fontSize: 14,
    marginBottom: 10
  },
  value: {
    marginBottom: 0,
    color: contentColor
  }
});
