import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Discover from './components/Discover';
import Toolbar from './components/toolbar.js'

class HelloWorldGreeting extends Component {
  render() {
    return (
      <Text style={styles.biggray}>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <View>
          <HelloWorldGreeting name='Nick' />
          <HelloWorldGreeting name='Francis' />
          <HelloWorldGreeting name='Scott' />
          <HelloWorldGreeting name='Christine' />
        </View>
        <View style={{flex: 2, backgroundColor: 'powderblue'}}>
          <Discover />
          <Toolbar />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  biggray: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 30,

  },
  bigyellow: {
    color: 'red',
    fontSize: 30
  }
})
