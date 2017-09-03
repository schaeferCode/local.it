import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TabBarIOS, Text, View, Greeting, Button } from 'react-native';
import DiscoverTab from './DiscoverTab';
import SavedTab from './SavedTab';
import OutingsTab from './OutingsTab';
import ProfileTab from './ProfileTab';

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
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item title="Discover" selected={this.state.selectedTab === 'discover'}>
          <DiscoverTab/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Saved" selected={this.state.selectedTab === 'saved'}>
          <SavedTab/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Outings" selected={this.state.selectedTab === 'outings'}>
          <OutingsTab/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="Profile" selected={this.state.selectedTab === 'profile'}>
          <ProfileTab/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  bigyellow: {
    color: 'red'
  }
})