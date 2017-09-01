import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Greeting } from 'react-native';

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
      <View >
        <HelloWorldGreeting name='Nick' />
        <HelloWorldGreeting name='Francis' />
        <HelloWorldGreeting name='Scott' />
        <HelloWorldGreeting name='Christine' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  biggray: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center'
  }
})
