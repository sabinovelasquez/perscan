import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  NavigatorIOS
} from 'react-native';

import Camera from 'react-native-camera';

class scanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      active: true,
      capType: Camera.constants.Type.back
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          aspect={Camera.constants.Aspect.fill}
          type={this.state.capType}
          mirrorImage={true}
          style={styles.scan}>
        </Camera>
        <View style={styles.textContainer}>
          <Text style={styles.fontLight}>
            PERSCAN
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#222222',
    alignItems: 'center',
  },
  scan: {
    height: '60%',
    width: '100%',
  },
  textContainer: {
    height: '40%',
    justifyContent: 'center',
  },
  fontLight: {
    fontFamily: 'Montserrat-Light',
    fontSize: 36,
    color: '#777777',
    backgroundColor: 'transparent'
  },
});

module.exports = scanPage;
