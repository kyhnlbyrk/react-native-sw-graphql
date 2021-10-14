import React from 'react'
import { Text, View } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import HomeScreen from './HomeScreen';

const CHAPTERS_QUERY = gql`
{
    allPlanets {
        planets {
            name
            id
            filmConnection {
                films {
                    title
                    episodeID
                }
            }
        }
    }
}
`;
const SplashScreen = () => {
  const { data, loading, error } = useQuery(CHAPTERS_QUERY);

  if(loading) return (  <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}><Text>Loading</Text></View>)
  return (
    <HomeScreen planets={data.allPlanets.planets}></HomeScreen>
  );
}

export default SplashScreen;