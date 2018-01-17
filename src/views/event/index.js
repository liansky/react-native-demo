import React, { Component } from 'react';
import { Text, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { bgColor } from '../../assets/style'

export default class Touch extends Component {

  render () {
    return (
      <ScrollView style={{backgroundColor: bgColor}}>
        <Text style={{lineHeight: 30}}>TouchableHighlight 自定义颜色、透明度</Text>
        <TouchableHighlight
          activeOpacity={0.5}
          onPress={() => alert('自定义颜色、透明度')}
          underlayColor={'red'}
        >
          <Image source={require('../../assets/img/timg.jpeg')} style={{height: 100,flex: 1}} />
        </TouchableHighlight>

        <Text style={{lineHeight: 30}}>TouchableOpacity 自定义透明度</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => alert('自定义透明度')}
        >
          <Image source={require('../../assets/img/timg3.jpeg')} style={{height: 100,flex: 1}} />
        </TouchableOpacity>

        <Text style={{lineHeight: 30}}>TouchableWithoutFeedback 没有触摸反馈、只支持一个子节点</Text>
        <TouchableWithoutFeedback
          onPress={() => alert('没有触摸反馈')}
        >
          <Image source={require('../../assets/img/timg2.jpeg')} style={{height: 100,flex: 1}} />
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}
