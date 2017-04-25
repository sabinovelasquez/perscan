import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Navigator,
  View,
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

import VersionNumber from 'react-native-version-number';

const scanPage = require('./scanPage');

class mainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beginX: 0,
      endX: 0
    }
  }

  perscanInit() {
    this.props.navigator.push({
      title: 'scanPage',
      component: scanPage,
      navigationBarHidden: true
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Svg height={Dimensions.get('window').height} width={Dimensions.get('window').width}>
          <Defs>
            <ClipPath id='clip'>
              <Circle cx='50%' cy='105%' r='100%'/>
            </ClipPath>
          </Defs>
          <View style={styles.titleC} >
            <Text style={styles.fontLight}>
              PERSCAN
            </Text>
          </View>
          <TouchableOpacity onPress={this.perscanInit.bind(this)} style={styles.mainBtn}>
            <Svg height='80' width='80'>
              <Circle cx='40' cy='40' r='40' fill='#F8671F'/>
              <Defs>
                <G id='logo'>
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
                <Use href='#logo' x='17' y='17' />
            </Svg>
          </TouchableOpacity>
          <Image
            x='0'
            y='0'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
            href={require('../assets/bg.png')}
            clipPath='url(#clip)'
          />
        </Svg>
        <Text style={styles.vn}>v{VersionNumber.appVersion} ctm.</Text>
      </View>
      ///Render ends...
    );
  }
};

const styles = StyleSheet.create({
  vn:{
    width: Dimensions.get('window').width,
    textAlign: 'center',
    color: '#858585',
    position: 'absolute',
    bottom: 20
  },
  mainBtn: {
    width: 80,
    height: 80,
    marginLeft: (Dimensions.get('window').width/2)-40
  },
  iconC: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleC: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#fff',
    backgroundColor: 'transparent'
  },
});
module.exports = mainPage;
