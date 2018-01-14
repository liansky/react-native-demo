import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// view
import Home from '../views';
import Props from '../views/props';
import State from '../views/state';
import Flex from '../views/flex';
import Form from '../views/form';


// 路由配置
const RootNavigator = StackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      headerTitle: '学习列表'
    }
  },
  props: {
    screen: Props,
    navigationOptions: {
      headerTitle: '属性'
    }
  },
  state: {
    screen: State,
    navigationOptions: {
      headerTitle: '状态'
    }
  },
  flex: {
    screen: Flex,
    navigationOptions: {
      headerTitle: '布局'
    }
  },
  form: {
    screen: Form,
    navigationOptions: {
      headerTitle: '表单'
    }
  }
});

export default class MyApp extends Component{
  render() {
    return <RootNavigator/>
  }
}