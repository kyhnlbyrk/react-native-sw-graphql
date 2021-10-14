import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ShakeHandler } from './handlers/ShakeHandler'

const HomeScreen = (props) => {
  const { planets } = props;
  const [choosenPlanet, setChoosenPlanet] = useState({});

  useEffect(() => {
    const index = getRandomInt(0, planets.length);
    setChoosenPlanet(planets[index]);
    ShakeHandler.addListener(() => {

      const index = getRandomInt(0, planets.length);
      setChoosenPlanet(planets[index]);
      //add your code here
      console.log('Shake Shake Shake');
    });
  }, []);

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