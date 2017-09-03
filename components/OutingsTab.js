import React from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';

const OutingsTab = ({props}) => (
  <View>
  <NavigatorIOS style={styles.container}>
  <Text>Outings</Text>
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

export default OutingsTab;