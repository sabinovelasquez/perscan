import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Animated,
  Easing
} from 'react-native';

import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
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

import * as firebase from 'firebase';

class displayPage extends Component {

  constructor(props) {
    super(props);
    this.itemsRef = firebase.database().ref();
    this.animatedValue = new Animated.Value(0)
    this.state = {
      beginX: 0,
      endX: 0
    }
  }

  componentDidMount () {
    this.animate();
    this.itemsRef.child(`male/1`).once('value', (snap) => {
      const info = snap.val();
      this.setState({
        title: info.title,
        subtitle: 'La huea fleta ctm'
      });
    });
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  goBack = () => {
    this.setState({
      title: null,
      subtitle: null
    });
    this.props.navigator.pop({ screen: 'scanPage' });
  }

  render() {
    const toBottom = Dimensions.get('window').height*.7
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, toBottom, 0]
    })
    return (
      <View style={styles.container}>
        <View style={styles.scanning}>
          <Animated.View
            style={{
            position: 'absolute',
            marginTop: movingMargin,
            marginLeft: 0,
            opacity: !this.state.title ? 1.0 : 0.0,
            height: !this.state.title ? 3 : 0,
            width: Dimensions.get('window').width,
            backgroundColor: '#FF00DA'}} />
        </View>
        <Image
          style={styles.scan}
          source={{ uri: this.props.img }}
        />
        <View style={styles.textContainer}>
          <View style={{opacity: !this.state.title ? 1.0 : 0.0, height: !this.state.title ? 'auto' : 0.0}}>
            <Text style={styles.fontLight}>
              analizando...
            </Text>
          </View>
          <View style={{opacity: this.state.title ? 1.0 : 0.0, justifyContent: 'center', height: this.state.title ? 'auto' : 0.0}}>
            <Text style={styles.fontBold}>
              {this.state.title}
            </Text>
            <Text style={styles.subtitle}>
              {this.state.subtitle}
            </Text>
          </View>
        </View>
      </View>
    );
    ///Render ends...
  }
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#222222',
    alignItems: 'center',
  },
  scanning: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 9,
    flexDirection: 'row'
  },
  switchBtn: {
    width: 50,
    height: 42,
    marginLeft: Dimensions.get('window').width-69,
    marginTop: 20
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  capture: {
    marginTop: '95%',
    color: '#fff',
  },
  scan: {
    height: '70%',
    width: '100%',
  },
  textContainer: {
    height: '30%',
    justifyContent: 'center',
  },
  fontLight: {
    fontFamily: 'Montserrat-Light',
    fontSize: 28,
    color: '#777777',
    backgroundColor: 'transparent'
  },
  fontBold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: '#FF0058',
    backgroundColor: 'transparent'
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 22,
    color: '#fff',
    backgroundColor: 'transparent'
  }
});
module.exports = displayPage;
