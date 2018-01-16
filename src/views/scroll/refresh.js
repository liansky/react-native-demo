import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableWithoutFeedback } from 'react-native';
import { colorRed, titleColor, assistColor, bgColor } from '../../assets/style'
import {borderColor} from "../../assets/style/index";

/**
 * ScrollView 学习
 * see React Native 中 ScrollView 性能探究
 * https://race604.com/react-native-scrollview-performance/
 */


class Row extends Component {
  _onClick () {
    this.props.onClick(this.props.data);
  }

  render () {
    return (
      <TouchableWithoutFeedback onPress={this._onClick.bind(this)} >
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default class Refresh extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: 'Initial row ' + i, clicks: 0}))
    }
  }

  _onRefresh () {
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
    }, 1000);
  }

  _onClick (row) {
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  }

  render () {
    const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row} onClick={this._onClick.bind(this)}/>;
    });
    return (
      <ScrollView
        style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor= {titleColor}
            title="Loading..."
            titleColor= {titleColor}
            colors={['#ff0000', '#00ff00', '#0000ff']}  // android 指定至少一种颜色用来绘制刷新指示器
            progressBackgroundColor="#ffff00"
          />
        }>
        {rows}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    borderColor: borderColor,
    borderWidth: 1,
    padding: 20,
    backgroundColor: assistColor,
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: titleColor,
  },
  scrollview: {
    flex: 1,
    backgroundColor: bgColor
  },
});