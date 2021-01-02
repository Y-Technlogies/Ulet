import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

// Routing - go one screen or page to another
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Routing

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Brand from './Brand';
import SearchPost from './components/SearchPost';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title='Go to Brand Name'
        onPress={() => navigation.navigate('Brand')}
      />
      <Button
        title='Search or Post'
        onPress={() => navigation.navigate('Search or Post')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen 1</Text>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.push('Details')}
      />

      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  // Loading custom fonts from assets folder
  // we can add more fonts here
  let [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      // Routing - go one screen or page to another
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Brand' component={Brand} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Details' component={DetailsScreen} />
          <Stack.Screen name='Search or Post' component={SearchPost} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// Style Part
const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Lato-Black',
    fontSize: 100,
    // fontWeight: 'bold',
    color: '#1ed9a6',
  },
});

export default App;
