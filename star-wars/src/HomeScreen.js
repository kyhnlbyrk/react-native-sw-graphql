import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ShakeHandler } from './handlers/ShakeHandler'
import styles from './style/Styles';

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

  // If episodes 3 and 5 is in here text is red
  const getClass = () => {
    let className = styles.subText;
    if (choosenPlanet.filmConnection) {
      const movieArr = choosenPlanet.filmConnection.films;
      for (let i = 0; i < movieArr.length; i++) {
        if(movieArr[i].episodeID === 5 || movieArr[i].episodeID === 3){
          className = styles.redSubText;
          break;
        } 
      }
    }
    return className;
  }

  if (!choosenPlanet) return (<View style={styles.blackDiv}></View>);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.mainText}>{choosenPlanet.name}</Text>
      {getEpisodes() &&
        <Text style={getClass()}>{getEpisodes()}</Text>
      }
    </View>
  );
}

export default HomeScreen;