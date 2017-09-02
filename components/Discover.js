import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './Categories';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ['scott', 'christine', 'francis', 'nick']
    };
  }

  render() {
    return (
      <View>
        <Categories name={this.state.name[0]}/>
        <Categories name={this.state.name[1]}/>
        <Categories name={this.state.name[2]}/>
        <Categories name={this.state.name[3]}/>
      </View>
    );
  }
}

export default Discover;