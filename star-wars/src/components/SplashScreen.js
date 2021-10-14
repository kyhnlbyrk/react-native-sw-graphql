import React from 'react'
import { ImageBackground } from 'react-native'
import styles from '../style/Styles';


const SplashScreen = () => {
  return (
    <ImageBackground source={require('../../assets/splash.png')} style={styles.splashImage}>
    </ImageBackground>
  );
}

export default SplashScreen;