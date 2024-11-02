import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen'
import Login from '../screens/Login'
import BottomTabsNavigation from './BottomTabsNavigation'
import PropertiesDetails from "../screens/PropertiesDetails";

export default function AppNavigation() {
    const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="welcome screen"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="welcome screen" component={LoginScreen} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="tabs" component={BottomTabsNavigation} />
        <stack.Screen name="Details Propriete" component={PropertiesDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
}