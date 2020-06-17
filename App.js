import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Homepage from './src/screens/HomePage';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/screens/Menu';


export default function App({navigation}) {

  const Stack = createStackNavigator();

  const config = {
    animation: 'spring',
    config:{
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThresholf: 0.01,
      restSpeeedThreshold: 0.01,
    }
  }


  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: () => <CrowdCheckerTitleLogin /> }} />
      <Stack.Screen
       name="Home" 
       component={Homepage} 
       options={{
          headerTitle: () => <CrowdCheckerTitle /> ,
       }}/>
      <Stack.Screen 
      name="Menu" 
      component={Menu}
      options={{ headerTitle: () => <CrowdCheckerTitle /> }}
       />
    </Stack.Navigator>
  </NavigationContainer>)
}

function CrowdCheckerTitleLogin(){
  return(
    <Text style={{
      left: 95,
      fontSize: 30,
      color: 'green',
      fontFamily: 'sans-serif',
    }}>
      Crowdchecker
    </Text>
  )
}
function CrowdCheckerTitle() {
  return (
    <Text
      style={{ 
        top: 0,
        left: 40,
        fontSize:30,
        color: 'green',
        fontFamily: 'sans-serif' }}
    >Crowdchecker</Text>
  ); 
}

