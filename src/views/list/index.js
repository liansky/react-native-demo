import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { titleColor, bgColor, contentColor, assistColor } from '../../assets/style'

class MyItem extends Component {
  render () {
    return (
      <View style={styles.item}>
        <View style={styles.img_wrap}>
          <Image style={styles.item_img} source={this.props.img}/>
        </View>
        <View style={styles.info}>
          <Text style={styles.info_title}>{this.props.title}</Text>
          <Text style={styles.info_sub}>{this.props.sub}</Text>
        </View>
      </View>
    )
  }
}

export default class MyFlatList extends Component {

  constructor (props) {
    super(props)
    this.img = {
      img1: require('../../assets/img/timg.jpeg'),
      img2: require('../../assets/img/timg2.jpeg'),
      img3: require('../../assets/img/timg3.jpeg'),
      img4: require('../../assets/img/timg4.jpeg')
    }
    this.state = {
      list: Array.from(new Array(10)).map((val, i) => ({
        img: this.img[`img${Math.floor(Math.random() * 4) + 1}`],
        title: `来自火星的美食 ${i + 1}`,
        sub: `在中国这个大家庭里，我们有五十六个小家庭，每个家庭都有自己的特色美食。美食吃前有期待、吃后有回味，已不仅仅是简单的味觉感受，更是一种精神享受。`,
        key: i
      })).reverse(),
      loaded: 10,
      isRefreshing: false
    }
  }

  renderItem = ({ item }) => (
    <MyItem
      img={item.img}
      title={item.title}
      sub={item.sub}
    />
  );

  onRefresh () {
    this.setState({isRefreshing: true});

    setTimeout(() => {
      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        list: Array.from(new Array(10)).map((val, i) => ({
          img: this.img[`img${Math.floor(Math.random() * 4) + 1}`],
          title: `来自火星的美食 ${this.state.loaded + i + 1}`,
          sub: `在中国这个大家庭里，我们有五十六个小家庭，每个家庭都有自己的特色美食。美食吃前有期待、吃后有回味，已不仅仅是简单的味觉感受，更是一种精神享受。`,
          key: this.state.loaded + i + 1
        })).reverse().concat(this.state.list)
      })
    }, 2000)
  }

  render () {
    return (
      <FlatList
        style={styles.bg}
        horizontal={false}
        initialNumToRender={5}
        onRefresh={this.onRefresh.bind(this)}
        refreshing={this.state.isRefreshing}
        data={this.state.list}
        renderItem={this.renderItem}
      />
    );
  }

}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: bgColor
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10
  },
  img_wrap: {
    backgroundColor: assistColor,
    padding: 10
  },
  item_img: {
    width: 120,
    height: 100
  },
  info: {
    padding: 10,
    flex: 1
  },
  info_title: {
    lineHeight: 25,
    fontSize: 14,
    color: titleColor
  },
  info_sub: {
    lineHeight: 14,
    fontSize: 12,
    color: contentColor
  }
})