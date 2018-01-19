import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, Animated, Dimensions, Button } from 'react-native';
import { colorRed, bgColor, contentColor, colorBlue } from '../../assets/style'


/**
 * 参考文章 ReactNative动画研究与实践
 * https://zhuanlan.zhihu.com/p/21301314
 *
 * APi react-native-animation-book
 * http://browniefed.com/react-native-animation-book/
 *
 * React Native动画库 – react-native-anime
 */
export default class MyAnimat extends Component {

  constructor (props) {
    super(props)
    this.width = Dimensions.get('window').width     // 获取屏幕宽度
    this.state = {
      leftValue: new Animated.Value(0),
      rotateValue: new Animated.Value(0)
    }
  }

  startAnimate () {
    // parallel（同时执行）、sequence（顺序执行）、stagger(交替), delay(延迟)
    Animated.parallel([
      Animated.timing(this.state.leftValue, {
        toValue: this.width - 50,  // 屏幕最右边
        duration: 1000             // 动画间隔
      }),

      Animated.timing(this.state.rotateValue, {
        toValue: 2,         //
        duration: 1000     // 动画间隔
      })
    ]).start(() => {
      // 恢复初始状态
      this.state.leftValue.setValue(0);
      this.state.rotateValue.setValue(0);
    })
  }


  render () {
    return (
      <ScrollView style={styles.bg}>
        <Text style={styles.title}>
          Animated类型
        </Text>
        <Animated.View style={[styles.view1, {
          left: this.state.leftValue,
          transform: [
            {
              rotateZ: this.state.rotateValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })
            }
          ]
        }]}/>
        <Button style={styles.btn} title={'执行动画'} color={colorBlue} onPress={this.startAnimate.bind(this)} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: bgColor
  },
  title: {
    lineHeight: 30,
    fontSize: 14,
    color: contentColor
  },
  view1: {
    backgroundColor: colorRed,
    width: 50,
    height: 50,
    position: 'relative'
  },
  btn: {
    backgroundColor: colorRed,
    color: '#fff'
  }
})