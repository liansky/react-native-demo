import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
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
      list: (() => {
        const arr = []
        for (let i = 0; i < 10; i++) {
          arr.push(i)
        }
        return arr
      })(),
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: 'Initial row ' + i, clicks: 0}))
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

  onRefresh () {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
        .map((val, i) => ({
          text: 'Loaded row ' + (+this.state.loaded + i),
          clicks: 0,
        }))
        .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 5000);
  }

  render () {
    console.log(this.state.list)
    return (
      <ScrollView
        style={styles.bg}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
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
    paddingTop: 10,
    paddingBottom: 10
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
    marginRight: 0,
    backgroundColor: 'blue'
  },
  hozItemText: {
    color: '#fff',
    fontSize: 20
  }
});
