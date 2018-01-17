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
import Refresh from '../views/scroll/refresh';
import FlatList from '../views/list';
import Touch from '../views/touch';
import MyAnimate from '../views/animat';


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
  },
  refresh: {
    screen: Refresh,
    navigationOptions: {
      headerTitle: '下拉刷新'
    }
  },
  flatList: {
    screen: FlatList,
    navigationOptions: {
      headerTitle: '长列表'
    }
  },
  touch: {
    screen: Touch,
    navigationOptions: {
      headerTitle: '触摸反馈'
    }
  },
  animate: {
    screen: MyAnimate,
    navigationOptions: {
      headerTitle: '动画'
    }
  }
});

export default class MyApp extends Component{
  render() {
    return <RootNavigator/>
  }
}