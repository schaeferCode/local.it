import React from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';

const DiscoverTab = ({props}) => (
  <View>
  <NavigatorIOS style={styles.container}>
  <Text>Discover</Text>
  </NavigatorIOS>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#000000',
  }
})

export default DiscoverTab;