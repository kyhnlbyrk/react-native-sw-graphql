import React from 'react'
import { gql, useQuery } from '@apollo/client'
import HomeScreen from './HomeScreen';
import SplashScreen from './components/SplashScreen';
import ErrorScreen from './ErrorScreen'

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
const DataHandler = () => {
  const { data, loading, error } = useQuery(CHAPTERS_QUERY);

  if(loading) return (  <SplashScreen />); 
  if(error) return (<ErrorScreen />);
  return (
    <HomeScreen planets={data.allPlanets.planets}></HomeScreen>
  );
}

export default DataHandler;