import React, { Component } from 'react';
import { AppRegistry, Text, View, Greeting } from 'react-native';

class HelloWorldGreeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <HelloWorldGreeting name='Nick' />
        <HelloWorldGreeting name='Francis' />
        <HelloWorldGreeting name='Scott' />
        <HelloWorldGreeting name='Christine' />
      </View>
    );
  }
}
