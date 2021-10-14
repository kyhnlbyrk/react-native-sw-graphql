import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ShakeHandler } from './handlers/ShakeHandler'
import { RFValue } from "react-native-responsive-fontsize";

const HomeScreen = (props) => {
  const { planets } = props;
  const [choosenPlanet, setChoosenPlanet] = useState({});
  const romanNumbers = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  useEffect(() => {
    const index = getRandomInt(0, planets.length);
    setChoosenPlanet(planets[index]);

    ShakeHandler.addListener(() => {
      const index = getRandomInt(0, planets.length);
      setChoosenPlanet(planets[index]);
    });
  }, []);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const deepObjectArrayCopy = (arr) => {
    return JSON.parse(JSON.stringify(arr));
  }

  const getEpisodes = () => {
    console.log(choosenPlanet);
    let episodes;
    if (choosenPlanet.filmConnection) {
      let movieArr = deepObjectArrayCopy(choosenPlanet.filmConnection.films);
      //data is coming according to release date so sort it first
      movieArr.sort((a, b) => parseFloat(a.episodeID) - parseFloat(b.episodeID));
      for (let i = 0; i < movieArr.length; i++) {
        if(movieArr.length - i === 1 && movieArr.length !== 1) episodes += " and ";
        if (i === 0) episodes = "Episodes ";
        episodes += (romanNumbers[movieArr[i].episodeID]);
        if(movieArr.length - i !== 1 && movieArr.length - i !== 2 && movieArr.length !== 1) episodes += ", ";
      }
    }
    return episodes;
  }

  if (!choosenPlanet) return (<View></View>);

  return (
    <View style={{ backgroundColor: '#000', flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
      <Text style={{color: '#F9D71C', fontFamily: 'starwars', fontSize: RFValue(55)}}>{choosenPlanet.name}</Text>
      {getEpisodes() &&
        <Text style={{color: '#F9D71C', fontFamily: 'starwars', fontSize: RFValue(24), marginTop: 10}}>{getEpisodes()}</Text>
      }
    </View>
  );
}

export default HomeScreen;