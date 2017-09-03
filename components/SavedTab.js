import React from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';

const SavedTab = ({props}) => (
  <NavigatorIOS style={styles.container}/>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SavedTab;