import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  CameraRoll,
  Alert,
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

import { takeSnapshot, dirs } from 'react-native-view-shot';
const { CacheDir, DocumentDir, MainBundleDir, MovieDir, MusicDir, PictureDir } = dirs;

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

  saveResult = refname => () => {
    takeSnapshot(this.refs[refname])
    .then(
      uri => CameraRoll.saveToCameraRoll(uri, 'photo').then(this.saved),
      error => console.error('failed', error)
    );
  }

  saved() {
    Alert.alert(
      'Listo',
      'Foto ql se guardó en tu huea.',
      [
        {text: 'Otra más', onPress: () => console.log('go back')},
      ],
      { cancelable: false }
    )
  }

  render() {
    const toBottom = Dimensions.get('window').height*.7
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, toBottom, 0]
    })
    return (
      <View>
        <View ref='perscan' style={styles.container}>
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
            <View style={{opacity: !this.state.title ? 1.0 : 0.0, height: !this.state.title ? 'auto' : 0}}>
              <Text style={
                {
                  fontFamily: 'Montserrat-Light',
                  textAlign: 'center',
                  fontSize: 18,
                  color: '#777777',
                  backgroundColor: 'transparent'
                }
              }>
                analizando...
              </Text>
            </View>
            <View style={
              {
                opacity: this.state.title ? 1.0 : 0.0,
                justifyContent: 'center',
                height: this.state.title ? 'auto' : 0}
              }>
              <Svg height='28' width={Dimensions.get('window').width} style={{marginTop:-5, marginBottom:5}}>
                <Defs>
                  <G id='logo' scale='0.6'>
                    <Path d='M1.32437209,22.9518605 L1.32437209,23.6873256 L5.31513953,23.6873256 C5.30497674,23.4428837 5.2964186,23.1984419 5.2964186,22.9518605 L1.32437209,22.9518605 Z'
                      fill='white'
                      stroke='none'/>
                    <G>
                      <Path d='M22.9518605,40.6067674 C32.4556744,40.6067674 40.2029302,33.0959302 40.5885814,23.6867907 L5.31513953,23.6867907 C5.7007907,33.0959302 13.4475116,40.6067674 22.9518605,40.6067674 Z'
                      fill='white'
                      stroke='none' />
                      <Path d='M44.578814,22.9518605 L40.6067674,22.9518605 C40.6067674,23.1984419 40.5976744,23.4428837 40.5880465,23.6873256 L44.578814,23.6873256 L44.578814,22.9518605 Z'
                      fill='white'
                      stroke='none' />
                      <Path d='M22.9518605,5.2964186 C13.2009302,5.2964186 5.29695349,13.2009302 5.29695349,22.9513256 L5.29695349,22.9513256 L12.5793953,22.9513256 C12.5793953,21.7328605 13.5673256,20.7443953 14.7863256,20.7443953 C16.0047907,20.7443953 16.9932558,21.7328605 16.9932558,22.9513256 L28.9104651,22.9513256 L28.9104651,22.9513256 C28.9104651,21.7328605 29.8978605,20.7443953 31.1168605,20.7443953 C32.3353256,20.7443953 33.3243256,21.7328605 33.3243256,22.9513256 L33.3243256,22.9513256 L40.6067674,22.9513256 L40.6067674,22.9513256 C40.6067674,13.2009302 32.7017209,5.2964186 22.9518605,5.2964186 Z'
                      fill='white'
                      stroke='none' />
                      <G>
                        <Path d='M45.9037209,11.0335814 L44.1380698,11.0335814 L44.1380698,2.6482093 C44.1380698,2.16146512 43.7422558,1.76565116 43.2555116,1.76565116 L34.8696047,1.76565116 L34.8696047,0 L43.2555116,0 C44.7152093,0 45.9037209,1.18797674 45.9037209,2.6482093 L45.9037209,11.0335814 Z'
                        fill='white'
                        stroke='none' />
                        <Path d='M43.2555116,45.9037209 L34.8696047,45.9037209 L34.8696047,44.1380698 L43.2555116,44.1380698 C43.7422558,44.1380698 44.1380698,43.7422558 44.1380698,43.2555116 L44.1380698,34.8696047 L45.9037209,34.8696047 L45.9037209,43.2555116 C45.9037209,44.7157442 44.7152093,45.9037209 43.2555116,45.9037209 Z'
                        fill='white'
                        stroke='none' />
                        <Path d='M11.0335814,45.9037209 L2.6482093,45.9037209 C1.18797674,45.9037209 0,44.7157442 0,43.2555116 L0,34.8701395 L1.76565116,34.8701395 L1.76565116,43.2555116 C1.76565116,43.7422558 2.16146512,44.1380698 2.6482093,44.1380698 L11.0335814,44.1380698 L11.0335814,45.9037209 Z'
                        fill='white'
                        stroke='none' />
                        <Path d='M1.76565116,11.0335814 L0,11.0335814 L0,2.6482093 C0,1.18797674 1.18797674,0 2.6482093,0 L11.0335814,0 L11.0335814,1.76565116 L2.6482093,1.76565116 C2.16146512,1.76565116 1.76565116,2.16146512 1.76565116,2.6482093 L1.76565116,11.0335814 L1.76565116,11.0335814 Z'
                        fill='white'
                        stroke='none' />
                      </G>
                    </G>
                  </G>
                </Defs>
                  <Use href='#logo' x={(Dimensions.get('window').width/2)-14} y='0'/>
              </Svg>
              <Text style={styles.fontBold}>
                {this.state.title}
              </Text>
              <Text style={styles.subtitle}>
                {this.state.subtitle}
              </Text>
            </View>
          </View>
        </View>
        <View style={
          {
            opacity: this.state.title ? 1.0 : 0.0,
            height: this.state.title ? 'auto' : 0,
            position: 'absolute',
            flexDirection: 'row',
            bottom: 10,
            zIndex:99,
          }
        }>
          <TouchableOpacity onPress={this.saveResult('perscan')} style={styles.iconContainer}>
            <Svg height='50' width='50'>
              <Circle cx='25' cy='25' r='24' fill='none' stroke='white'/>
              <Defs>
                <G id='save'>
                  <Path d='M20.8571475,31 L28.5714424,31 L28.5714424,27.1428525 L20.8571475,27.1428525 L20.8571475,31 Z M29.8571582,31 L31.142874,31 L31.142874,21.9999893 C31.142874,21.8091408 30.9721149,21.39731 30.8415344,21.2667295 L28.0189863,18.4441815 C27.8783612,18.3035563 27.4866196,18.1428418 27.2857265,18.1428418 L27.2857265,22.3214182 C27.2857265,22.8537849 26.8538064,23.2857051 26.3214397,23.2857051 L20.5357185,23.2857051 C20.0033518,23.2857051 19.5714316,22.8537849 19.5714316,22.3214182 L19.5714316,18.1428418 L18.2857158,18.1428418 L18.2857158,31 L19.5714316,31 L19.5714316,26.8214236 C19.5714316,26.2890569 20.0033518,25.8571367 20.5357185,25.8571367 L28.8928713,25.8571367 C29.425238,25.8571367 29.8571582,26.2890569 29.8571582,26.8214236 L29.8571582,31 Z M26.0000107,21.6785603 L26.0000107,18.4642708 C26.0000107,18.2935116 25.8493409,18.1428418 25.6785818,18.1428418 L23.750008,18.1428418 C23.5792489,18.1428418 23.4285791,18.2935116 23.4285791,18.4642708 L23.4285791,21.6785603 C23.4285791,21.8493194 23.5792489,21.9999893 23.750008,21.9999893 L25.6785818,21.9999893 C25.8493409,21.9999893 26.0000107,21.8493194 26.0000107,21.6785603 Z M32.4285898,21.9999893 L32.4285898,31.321429 C32.4285898,31.8537957 31.9966697,32.2857158 31.464303,32.2857158 L17.9642869,32.2857158 C17.4319202,32.2857158 17,31.8537957 17,31.321429 L17,17.8214129 C17,17.2890462 17.4319202,16.857126 17.9642869,16.857126 L27.2857265,16.857126 C27.8180933,16.857126 28.5513531,17.1584656 28.9330499,17.5401625 L31.7455533,20.3526659 C32.1272502,20.7343628 32.4285898,21.4676226 32.4285898,21.9999893 Z'
                    fill='white'
                    stroke='none'/>
                </G>
              </Defs>
                <Use href='#save' x='0' y='0' />
            </Svg>
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
    marginTop: 20
  },
  fontLight: {
    fontFamily: 'Montserrat-Light',
    fontSize: 28,
    color: '#777777',
    backgroundColor: 'transparent'
  },
  fontBold: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: '#FF0058',
    backgroundColor: 'transparent'
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 22,
    color: '#fff',
    backgroundColor: 'transparent'
  }
});
module.exports = displayPage;
