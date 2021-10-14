import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { View } from 'react-native'
import SplashScreen from './src/SplashScreen';
import { useFonts } from 'expo-font';


const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});

export default function App() {

  let [fontsLoaded] = useFonts({
    'starwars': require('./assets/fonts/starwars.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <ApolloProvider client={client}>
        <SplashScreen />
      </ApolloProvider>
    )
  }
}