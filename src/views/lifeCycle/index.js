import React, { Component } from 'react';
import { View, Text } from 'react-native';

/**
 * 组件生命周期
 * see https://race604.com/react-native-component-lifecycle/
 */
export default class LifeCycle extends Component {
  constructor (props) {  // 等同于es5 getInitialState
    super(props)
    this.state = {text: '组件生命周期'}
  }

  // 准备加载
  componentWillMount () {
    console.log('componentWillMount')
  }

  // 渲染
  render () {
    console.log('render')
    return (
      <View>
        <Text>{this.state.text}</Text>
      </View>
    );
  }

  // 初次完成加载
  componentDidMount () {
    console.log('componentDidMount')
  }

  // 接收到新的props
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps)
  }

  // 返回true、或者false 决定是否更新
  shouldComponentUpdate (nextProps, nextState) {  // 你可以自己重载这个函数，通过检查变化前后属性和状态，来决定 UI 是否需要更新，能有效提高应用性能。
    console.log('shouldComponentUpdate')
  }

  // 将要更新
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate')
  }

  // 已经更新
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  // 销毁
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
}
