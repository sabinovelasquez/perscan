import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Navigator
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

const displayPage = require('./displayPage');

class scanPage extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      beginX: 0,
      endX: 0,
      camera: {
        // captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        capType: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      }
    };
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.capture()
        .then((data) => {
          this.props.navigator.push({
            title: 'displayPage',
            component: displayPage,
            navigationBarHidden: true,
            passProps: {
              img: data.path
            },
          });
        })
        .catch(err => console.error(err));
    }
  }

  // moveStart = (e) => {
  //   this.setState({beginX: e.nativeEvent.pageX});
  // }
  // moveEnd = (e) => {
  //   this.setState({endX: e.nativeEvent.pageX});
  //   if(this.state.beginX < this.state.endX-5) {
  //     this.props.navigator.pop({ screen: 'mainPage' });
  //   }
  // }
  goBack = () => {
    this.props.navigator.pop({ screen: 'mainPage' });
  }
  switchType = () => {
    let newType, mirror;
    const { back, front } = Camera.constants.Type;
    if (this.state.camera.capType === back) {
      newType = front;
      mirror = true;
    } else if (this.state.camera.capType === front) {
      newType = back;
      mirror = false;
    }
    this.setState({
      camera: {
        capType: newType,
        camMirror: mirror
      },
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.actions}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={this.takePicture} style={styles.male}>
              <Svg height='80' width='80'>
                <Defs>
                  <G id='iconmale'>
                      <Path d='M41.499999,35.9999993 C38.4612491,35.9999993 35.9999993,38.4612491 35.9999993,41.499999 C35.9999993,44.5387488 38.4612491,46.9999987 41.499999,46.9999987 C44.5387488,46.9999987 46.9999987,44.5387488 46.9999987,41.499999 C46.9999987,38.4612491 44.5387488,35.9999993 41.499999,35.9999993 Z M31.8749996,45.6249988 L29.1249998,45.6249988 L29.1249998,51.1249984 C29.1249998,52.6374988 30.3624998,53.8749983 31.8749996,53.8749983 L37.3749993,53.8749983 L37.3749993,51.1249984 L31.8749996,51.1249984 L31.8749996,45.6249988 Z M31.8749996,31.8749996 L37.3749993,31.8749996 L37.3749993,29.1249998 L31.8749996,29.1249998 C30.3624998,29.1249998 29.1249998,30.3624998 29.1249998,31.8749996 L29.1249998,37.3749993 L31.8749996,37.3749993 L31.8749996,31.8749996 Z M51.1249984,29.1249998 L45.6249988,29.1249998 L45.6249988,31.8749996 L51.1249984,31.8749996 L51.1249984,37.3749993 L53.8749983,37.3749993 L53.8749983,31.8749996 C53.8749983,30.3624998 52.6374988,29.1249998 51.1249984,29.1249998 Z M51.1249984,51.1249984 L45.6249988,51.1249984 L45.6249988,53.8749983 L51.1249984,53.8749983 C52.6374988,53.8749983 53.8749983,52.6374988 53.8749983,51.1249984 L53.8749983,45.6249988 L51.1249984,45.6249988 L51.1249984,51.1249984 Z'
                      fill='#fff'/>
                  </G>
                </Defs>
                <Use href='#iconmale' x='-2' y='-2'/>
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={this.takePicture} style={styles.female}>
              <Svg height='80' width='80'>
                <Defs>
                  <G id='iconfemale'>
                      <Path d='M31.8749996,46.6249988 L29.1249998,46.6249988 L29.1249998,52.1249984 C29.1249998,53.6374988 30.3624998,54.8749983 31.8749996,54.8749983 L37.3749993,54.8749983 L37.3749993,52.1249984 L31.8749996,52.1249984 L31.8749996,46.6249988 Z M31.8749996,32.8749996 L37.3749993,32.8749996 L37.3749993,30.1249998 L31.8749996,30.1249998 C30.3624998,30.1249998 29.1249998,31.3624998 29.1249998,32.8749996 L29.1249998,38.3749993 L31.8749996,38.3749993 L31.8749996,32.8749996 Z M51.1249984,30.1249998 L45.6249988,30.1249998 L45.6249988,32.8749996 L51.1249984,32.8749996 L51.1249984,38.3749993 L53.8749983,38.3749993 L53.8749983,32.8749996 C53.8749983,31.3624998 52.6374988,30.1249998 51.1249984,30.1249998 Z M51.1249984,52.1249984 L45.6249988,52.1249984 L45.6249988,54.8749983 L51.1249984,54.8749983 C52.6374988,54.8749983 53.8749983,53.6374988 53.8749983,52.1249984 L53.8749983,46.6249988 L51.1249984,46.6249988 L51.1249984,52.1249984 Z M41.499999,36.9999993 C38.4612491,36.9999993 35.9999993,39.4612491 35.9999993,42.499999 C35.9999993,45.5387488 38.4612491,47.9999987 41.499999,47.9999987 C44.5387488,47.9999987 46.9999987,45.5387488 46.9999987,42.499999 C46.9999987,39.4612491 44.5387488,36.9999993 41.499999,36.9999993 Z M41.499999,45.2499988 C39.9874986,45.2499988 38.7499992,44.0124993 38.7499992,42.499999 C38.7499992,40.9874986 39.9874986,39.7499992 41.499999,39.7499992 C43.0124993,39.7499992 44.2499988,40.9874986 44.2499988,42.499999 C44.2499988,44.0124993 43.0124993,45.2499988 41.499999,45.2499988 Z'
                      fill='#fff'/>
                  </G>
                </Defs>
                <Use href='#iconfemale' x='-2' y='-2'/>
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.temp}
          keepAwake={true}
          type={this.state.camera.capType}
          mirrorImage={this.state.camera.camMirror}
          style={styles.scan}>
          <TouchableOpacity style={styles.switchBtn} onPress={this.switchType}>
            <Svg height='42' width='49'>
              <Defs>
                <G id='switch' fill='none' scale='0.8'>
                  <G>
                    <Path d='M42,6.46153846 C45.5588942,6.46153846 48.4615385,9.36418269 48.4615385,12.9230769 L48.4615385,35.5384615 C48.4615385,39.0973558 45.5588942,42 42,42 L6.46153846,42 C2.90264423,42 5.68434189e-14,39.0973558 5.68434189e-14,35.5384615 L5.68434189e-14,12.9230769 C5.68434189e-14,9.36418269 2.90264423,6.46153846 6.46153846,6.46153846 L12.1153846,6.46153846 L13.4026442,3.02884615 C14.0336538,1.36298077 16.0024038,0 17.7692308,0 L30.6923077,0 C32.4591346,0 34.4278846,1.36298077 35.0588942,3.02884615 L36.3461538,6.46153846 L42,6.46153846 Z'
                    stroke='#FFFFFF'
                    strokeWidth='2' />
                    <Path d='M23.9999989,15.2499987 L23.9999989,19.1249988 L29.1666656,13.958332 L23.9999989,8.79166527 L23.9999989,12.6666653 C18.290832,12.6666653 13.6666653,17.290832 13.6666653,22.9999989 C13.6666653,25.027915 14.2608321,26.9137485 15.2683317,28.5024992 L17.1541651,26.6166657 C16.5729154,25.5445825 16.2499987,24.3045825 16.2499987,22.9999989 C16.2499987,18.7245828 19.7245828,15.2499987 23.9999989,15.2499987 Z'
                    fill='#FFFFFF' />
                    <Path d='M32.7316659,17.4974985 L30.8458313,19.3833319 C31.4141653,20.468332 31.749999,21.6954151 31.749999,22.9999989 C31.749999,27.2754148 28.2754148,30.749999 23.9999989,30.749999 L23.9999989,26.8749989 L18.8333321,32.0416657 L23.9999989,37.2083325 L23.9999989,33.3333324 C29.7091656,33.3333324 34.3333324,28.7091656 34.3333324,22.9999989 C34.3333324,20.9720825 33.7391669,19.0862491 32.7316659,17.4974985 Z'
                    fill='#FFFFFF' />
                  </G>
                </G>
              </Defs>
              <Use href='#switch' x='10' y='1'/>
            </Svg>
          </TouchableOpacity>
        </Camera>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.fontLight}>
              PERSCAN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  /// Render ends...
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#222222',
    alignItems: 'center',
  },
  switchBtn: {
    width: 50,
    height: 42,
    marginLeft: Dimensions.get('window').width-69,
    marginTop: 20
  },
  actions: {
    position: 'absolute',
    left: 0,
    top: '70%',
    marginTop: -40,
    zIndex: 9,
    flexDirection: 'row'
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  male: {
    width: 80,
    height: 80,
    backgroundColor: '#368EFF',
    borderRadius: 40
  },
  female: {
    width: 80,
    height: 80,
    backgroundColor: '#FF3681',
    borderRadius: 40
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
    fontSize: 36,
    color: '#777777',
    backgroundColor: 'transparent'
  },
});

module.exports = scanPage;
