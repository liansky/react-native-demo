import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { titleColor, contentColor, borderColor, bgColor } from '../../assets/style'


export default class Form extends Component {

  constructor (props) {
    super(props)
    this.state = { text: '' }
  }

  // 挂载
  componentDidMount () {
  }

  // 卸载
  componentWillUnmount () {

  }

  render () {
    return (
      <View>
        <Text style={styles.title}>输入框</Text>
        <TextInput
          placeholder={'请输入姓名'}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    lineHeight: 40,
    paddingLeft: 20,
    color: titleColor
  },
  input: {
    height: 40,
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    color: contentColor,
    fontSize: 14
  }
});
