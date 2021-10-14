import React from 'react'
import { View, Text } from 'react-native'
import styles from './style/Styles';


const ErrorScreem = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.mainText}>500</Text>
      <Text style={styles.subText}>This is not the screen you're looking for!</Text>
    </View>
  );
}

export default ErrorScreem;