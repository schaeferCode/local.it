import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TabBarIOS, Text, View, Greeting, Button } from 'react-native';
import DiscoverTab from './DiscoverTab';
import SavedTab from './SavedTab';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: 'discover'
    }

    //bind(this)( '_discoverOnPress', '_savedOnPress', )
  }

  _discoverOnPress() {
    this.setState({
      selectedTab: 'discover'
    })
  }
  _savedOnPress() {
    this.setState({
      selectedTab: 'saved'
    })
  }


  render() {
    return (
      <View>
      <Text style={styles.bigyellow}>TOOLBAR</Text>
      <TabBarIOS selectedTab={this.state.selectedTab}/>
      <TabBarIOS.Item title="Discover" selected={this.state.selectedTab === 'discover'}>
      <DiscoverTab/>
      </TabBarIOS.Item>
      <TabBarIOS.Item title="Saved" selected={this.state.selectedTab === 'saved'}>
      <SavedTab/>
      </TabBarIOS.Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigyellow: {
    color: 'red'
  }
})