import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Homepage from './src/screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const Stack = createStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: "" }} />
      <Stack.Screen name="Home" component={Homepage} options={{ title: "" }} />
    </Stack.Navigator>
  </NavigationContainer>)
}


