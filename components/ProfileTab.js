import React from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';

const ProfileTab = ({props}) => (
  <View>
  <NavigatorIOS style={styles.container}>
  <Text>Profile</Text>
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

export default ProfileTab;