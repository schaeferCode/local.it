import React, { Component } from 'react';
import { StyleSheet, Text, Button, Dimensions, View } from 'react-native';

const window = Dimensions.get('window');

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <View style={styles.mainContainer}>
        <View style={styles.discoverContainer}>
          <View style={styles.category}>
            <Button
              title='Category Title goes here'
              onPress={() => console.log('you pressed it')}
            />
            <Text>Test This {this.props.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    borderWidth: 0.5,
    borderColor: '#000000',
    width: window.width/2 - 10,
    height: 150
  },
  discoverContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  mainContainer: {
    backgroundColor: '#faebd7',
  }
});

export default Categories;