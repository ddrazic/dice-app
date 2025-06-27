import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Nova import
import { createStackNavigator } from '@react-navigation/stack'; // Nova import
import StartScreen from './src/screens/StartScreen';
import OneDice from './src/screens/OneDice';
import TwoDice from './src/screens/TwoDice';

const Stack = createStackNavigator(); // Stvaranje stack navigatora

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dice">
        <Stack.Screen name="Dice" component={StartScreen} />
        <Stack.Screen name="One" component={OneDice} />
        <Stack.Screen name="Two" component={TwoDice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

