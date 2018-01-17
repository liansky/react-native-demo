import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { titleColor, contentColor, borderColor, bgColor } from '../assets/style'


class Cell extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.cell}>
        <Text
          style={styles.cell_info}
          onPress={() => navigate(this.props.route)}
        >{this.props.title}</Text>
      </View>
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
    paddingBottom: 0.5
  },
  cell_info: {
    lineHeight: 50,
    fontSize: 14,
    color: titleColor,
  }
})
