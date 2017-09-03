import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Keyboard, TextInput, ScrollView, Linking } from 'react-native';
import Item from 'item';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Active Life",
      item: "Suggestion"
    }
  }

  render() {
    return (
      <View style = {{
        flex: 2,
        borderStyle: 'solid',
        borderWidth: 5,
        backgroundColor: '#fff',
        marginTop: 50,
      }}>
        <Text>Back                               {this.state.category}</Text>
        <Item>
      </View>
    );
  }
}



