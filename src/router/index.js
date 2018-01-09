import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// view
import Props from '../views/props'
import Home from '../views'


// 路由配置
const RootNavigator = StackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      headerTitle: '首页'
    }
  },
  props: {
    screen: Props,
    navigationOptions: {
      headerTitle: 'Props'
    }
  }
});

export default class MyApp2 extends Component{
  render() {
    return <RootNavigator/>
  }
}