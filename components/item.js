import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Keyboard, TextInput, ScrollView, Linking } from 'react-native';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "Ichiza Kitchen & Tea House",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/EqRBNo8asZYltitUwQXtkQ/o.jpg",
        Rating: 5,
        Distance: "1.3 mi",
        Description: "Vegan, Asian Fusion",
        Money: "$$"
      }
    }
  }

  render() {
    return (
      <View style={
        {
          borderStyle: 'solid',
          borderWidth: 5,
          marginTop: 50
        }
      }>
        <Image src = {this.state.data.image}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
  }
})