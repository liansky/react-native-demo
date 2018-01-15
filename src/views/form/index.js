import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { titleColor, contentColor, borderColor, bgColor } from '../../assets/style'


export default class Form extends Component {

  constructor (props) {
    super(props)
    this.state = { text: '100' }
  }

  onChange (text) {
    this.setState({
      text: text
    })
  }

  render () {
    return (
      <View>
        <Text style={styles.title}>输入框</Text>
        <TextInput
          ref={'input'}
          placeholder={'请输入姓名'}
          style={styles.input}
          onChangeText={this.onChange.bind(this)}
          maxLength={200}
          defaultValue={'100'}
          autoFocus={true}
          underlineColorAndroid={'transparent'}  // 去除Android 下边框线
          multiline={false}        // 多行文本输入
          editable={true}          // 是否可编辑
          autoCorrect={false}      // 是否自动修正、 默认值true
          returnKeyType={'next'}   // 键盘确定按钮 枚举 done go next search send 跨平台可用的
          returnKeyLabel={'next'}  // 键盘确定按钮 Android
          keyboardType={'default'} // 枚举 default numeric email-address phone-pad 这些值在所有平台都可用 ios独有
          autoCapitalize={'none'}  // 是否要自动将特定字符切换为大写
          secureTextEntry={false}  // 如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为false
        />

        <Text style={styles.title}>{this.state.text}</Text>

        <View style={{flexDirection: 'row', paddingLeft: 10}}>
          <Button title={'清空'} onPress={() => this.refs['input'].clear()} style={{backgroundColor: 'red'}}/>
          <Button title={'是否获得焦点'} onPress={() => alert(this.refs['input'].isFocused())}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    lineHeight: 40,
    height: 40,
    paddingLeft: 20,
    color: titleColor
  },
  input: {
    height: 40,
    textAlign: 'left',
    backgroundColor: '#fff',
    color: contentColor,
    fontSize: 14,
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20
  }
});
