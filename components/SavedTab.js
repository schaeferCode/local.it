import React from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';

const SavedTab = ({props}) => (
  <View>
  <NavigatorIOS style={styles.container}>
  <Text>Saved</Text>
  </NavigatorIOS>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SavedTab;