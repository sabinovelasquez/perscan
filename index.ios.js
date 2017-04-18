'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  StatusBar
} from 'react-native';

import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Image,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  ClipPath,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

import Camera from 'react-native-camera';

export default class perscan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
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
        <Svg height={100} width={100}>
          <Image
            width="50%"
            height="50%"
            x="19"
            y="19"
            href={require('./assets/logo.png')}
          />
        </Svg>
        <Svg height={this.state.height} width={this.state.width}>
          <Defs>
            <ClipPath id='clip'>
              <Circle cx='50%' cy='100%' r='100%'/>
            </ClipPath>
          </Defs>
          <Image
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href={require('./assets/bg.png')}
            clipPath="url(#clip)"
          />
          <Text style={styles.fontLight}>
              {this.state.title}
          </Text>
        </Svg>
      </View>
    );
  }
  /////render Ends
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  backgroundImage: {
    alignItems: 'center',
    resizeMode: 'cover',
    height: '10%',
    width: '10%',
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
