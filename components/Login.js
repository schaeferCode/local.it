import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Text } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../images/maps-icon.png')} />
            <Text style={styles.title}>Local.it</Text>
            <Text style={styles.subtitle}>Where do you want to go today?</Text>
        </View>
        <View style={styles.formContainer}>
            <LoginForm/>
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  source: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f8c8d'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height:100
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    opacity: 0.8
  }
});
