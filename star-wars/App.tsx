import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SplashScreen from './src/SplashScreen'


const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});

export default function App() {

  return (
    <ApolloProvider client={client}>
      <SplashScreen />
    </ApolloProvider>
  )
}