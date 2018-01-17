import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colorRed } from '../../assets/style'

/**
 * ScrollView 学习
 * see React Native 中 ScrollView 性能探究
 * https://race604.com/react-native-scrollview-performance/
 */

class HozItem extends Component {
  render () {
    return (
      <View style={[styles.hozItem, this.props.isLast ? styles.hozItemLast : '']}>
        <Text style={styles.hozItemText}>{this.props.index}</Text>
      </View>
    );
  }
}

export default class Scroll extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: Array.from(new Array(5)).map((val, i) => i )
    }
  }

  onContentSizeChange (contentWidth, contentHeight) {
    console.log(contentWidth, contentHeight)
  }

  onScroll () {
    console.log('onScroll')
  }

  onMomentumScrollEnd () {
    console.log('onMomentumScrollEnd')
  }

  render () {
    console.log(this.state.list2)
    return (
      <ScrollView
        style={styles.bg}
      >
        <Text>根ScrollView默认窗口高度</Text>
        <Text>horizontal: true来支持横向滚动</Text>
        <Text>showsHorizontalScrollIndicator: false 禁用水平滚动条</Text>

        <ScrollView
          style={styles.hoz}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // 禁用水平滚动条
          onContentSizeChange={this.onContentSizeChange.bind(this)}
          onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
          onScroll={this.onScroll.bind(this)}
        >
          {this.state.list.map((item) => {
            if (item < this.state.list.length - 1) {
              return <HozItem index={item + 1} key={item.toString()}/>
            } else {
              return <HozItem index={item + 1} key={item.toString()} isLast={true} />
            }
          })}
        </ScrollView>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ccc'
  },
  hoz: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10
  },
  hozItem: {
    height: 100,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: colorRed,
    overflow: 'hidden'
  },
  hozItemLast: {
    marginRight: 20
  },
  hozItemText: {
    color: '#fff',
    fontSize: 20
  }
});
