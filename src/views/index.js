import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { titleColor, borderColor, bgColor } from '../assets/style'


class Cell extends Component {
  constructor (props) {
    console.log('123')
    super(props)
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        onPress={() => navigate(this.props.route)}
        underlayColor={'#999'}
      >
        <View style={styles.cell}>
          <View style={styles.cell_text}>
            <Text
              style={styles.cell_info}
            >{this.props.title}</Text>
          </View>
          <View style={styles.cell_arrow}/>
        </View>
      </TouchableHighlight>
    );
  }
}


export default class Home extends Component {
  render () {
    return (
      <ScrollView style={styles.bg}>
        <Cell route={'props'} title={'Props'} {...this.props}/>
        <Cell route={'state'} title={'State'} {...this.props}/>
        <Cell route={'lifeCycle'} title={'LifeCycle'} {...this.props}/>
        <Cell route={'flex'} title={'Flex'} {...this.props}/>
        <Cell route={'form'} title={'Form'} {...this.props}/>
        <Cell route={'scroll'} title={'ScrollView'} {...this.props}/>
        <Cell route={'refresh'} title={'RefreshControl'} {...this.props}/>
        <Cell route={'flatList'} title={'FlatList'} {...this.props}/>
        <Cell route={'touch'} title={'Touch'} {...this.props}/>
        <Cell route={'animate'} title={'Animate'} {...this.props}/>
        <Cell route={'mbox'} title={'Mbox'} {...this.props}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: bgColor
  },
  cell: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: borderColor,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cell_text: {
    justifyContent: 'center',
    height: 50
  },
  cell_info: {
    fontSize: 14,
    color: titleColor,
  },
  cell_arrow: {
    height: 10,
    width: 10,
    borderColor: borderColor,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    transform: [
      {
        rotateZ: '-45deg'
      }
    ]
  }
})
