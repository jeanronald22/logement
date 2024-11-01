import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { colors } from '../styles/colors'
import FavoriteScreen from '../screens/FavoriteScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const BottomTabsNavigation = ({route}) => {
    const tabs = createBottomTabNavigator()
    return (
      <tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            color = focused ? colors.bleuFonce : colors.gris;
            size = focused ? 28 : 24;
            let iconeName;
            switch (route.name) {
              case "Home":
                iconeName = "home";
                break;
              case "Favorite":
                iconeName = "favorite";
                break;
              case "Profile":
                iconeName = "person";
                break;
              default:
                break;
            }
            return <MaterialIcons name={iconeName} size={size} color={color} />;
          },
        })}
      >
        <tabs.Screen name="Home" component={HomeScreen} />
        <tabs.Screen name="Favorite" component={FavoriteScreen} />
        <tabs.Screen name="Profile" component={ProfileScreen} />
      </tabs.Navigator>
    );
}

export default BottomTabsNavigation