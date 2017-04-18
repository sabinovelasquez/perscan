'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  StatusBar
} from 'react-native';
import Camera from 'react-native-camera';

export default class perscan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capType: Camera.constants.Type.back
    };
  }
  componentDidMount() {
    this.setState({
      title: 'PERSCAN'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/bg.png')} style={styles.backgroundImage}>
          <Text style={styles.fontLight}>
            {this.state.title}
          </Text>
        </Image>
      </View>
    );
  }
  /////render Ends
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    alignItems: 'center',
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  fontLight: {
    fontFamily: 'Montserrat-Light',
    fontSize: 36,
    marginTop: '40%',
    color: '#fff',
    backgroundColor: 'transparent'
  },
});

AppRegistry.registerComponent('perscan', () => perscan);
