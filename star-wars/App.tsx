import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { View } from 'react-native'
import DataHandler from './src/DataHandler';
import { useFonts } from 'expo-font';
import { Audio } from 'expo-av';
import SplashScreen from './src/components/SplashScreen';


const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});


export default function App() {

  const [sound, setSound] = React.useState<any>();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/sound/forcetheme.mp3')
    );
    sound.setIsLoopingAsync(true);
    setSound(sound);
    await sound.playAsync();
  }

  let [fontsLoaded] = useFonts({
    'starwars': require('./assets/fonts/starwars.ttf'),
  });

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  if(!sound) playSound();

  if (!fontsLoaded) {
    return <SplashScreen />;
  } else {
    return (
      <ApolloProvider client={client}>
        <DataHandler />
      </ApolloProvider>
    )
  }
}