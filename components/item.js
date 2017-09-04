import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Keyboard, TextInput, ScrollView, Linking } from 'react-native';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "Ichiza Kitchen & Tea House",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/EqRBNo8asZYltitUwQXtkQ/o.jpg",
        rating: 5,
        distance: "1.3 mi",
        description: "Vegan, Asian Fusion",
        money: "$$"
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
        <Image
        style={{width: 400, height: 300}}
        source = {{ uri: this.state.data.image}}/>
        <View>
          <Text>{this.state.data.name}</Text>
          <Text>{this.state.data.rating}</Text>
          <Text>{this.state.data.distance}</Text>
          <Text>{this.state.data.description}</Text>
        </View>
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