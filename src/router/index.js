import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// view
import Home from '../views';
import Props from '../views/props';
import State from '../views/state';
import Flex from '../views/flex';
import Form from '../views/form';
import Scroll from '../views/scroll';
import LifeCycle from '../views/lifeCycle';


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
  },
  scroll: {
    screen: Scroll,
    navigationOptions: {
      headerTitle: '滚动视图'
    }
  },
  lifeCycle: {
    screen: LifeCycle,
    navigationOptions: {
      headerTitle: '生命周期'
    }
  }
});

export default class MyApp extends Component{
  render() {
    return <RootNavigator/>
  }
}