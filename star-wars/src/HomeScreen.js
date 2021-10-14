import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'


const HomeScreen = (props) => {
  const { planets } = props;
  const [choosenPlanet, setChoosenPlanet] = useState({});



  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if(!choosenPlanet) return (<View></View>);

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}><Text>{choosenPlanet.name}</Text></View>
  );
}

export default HomeScreen;