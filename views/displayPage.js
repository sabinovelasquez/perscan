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


class displayPage extends Component {

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.state = {
      beginX: 0,
      endX: 0
    }
  }

  componentDidMount () {
    this.animate()
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
            height: 3,
            width: Dimensions.get('window').width,
            backgroundColor: '#FF00DA'}} />
        </View>
        <Image
          style={styles.scan}
          source={{ uri: this.props.img }}
        />
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.fontLight}>
              analizando...
            </Text>
          </TouchableOpacity>
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
});
module.exports = displayPage;
