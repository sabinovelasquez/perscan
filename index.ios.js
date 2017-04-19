'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

const mainPage = require('./views/mainPage')

class perscan extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute= {{
          title: 'Perscan',
          component: mainPage,
          navigationBarHidden: true
        }}/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
});

AppRegistry.registerComponent('perscan', () => perscan);
