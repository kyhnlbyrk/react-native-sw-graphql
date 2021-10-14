import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const mainColor = '#F9D71C';
const redColor = '#AB1822';

const styles = StyleSheet.create({
 
  wrapper: {
    backgroundColor: '#000', 
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: "center", 
    alignItems: 'center'
  },

  mainText: {
    color: mainColor, 
    fontFamily: 'starwars', 
    fontSize: RFValue(55)
  },

  subText: {
    color: mainColor, 
    fontFamily: 'starwars', 
    fontSize: RFValue(24), 
    marginTop: 10
  },

  redSubText: {
    color: redColor, 
    fontFamily: 'starwars', 
    fontSize: RFValue(24), 
    marginTop: 10
  },

  splashImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },

  blackDiv: {
    flex: 1,
    color: 'black'
  }

});

export default styles;
