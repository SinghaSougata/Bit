import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Profile from './Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} 
        options={{
    tabBarIcon: ({ focused }) => (
      <FontAwesome5 name="home" size={20} color={focused ? 'blue' : 'gray'} />
    ),
  }}
/>
      <Tab.Screen name="Prifile" component={Profile}
        options={{
    tabBarIcon: ({ focused }) => (
      <FontAwesome5 name="user" size={20} color={focused ? 'blue' : 'gray'} />
    ),
  }}
/>
    </Tab.Navigator>
  </NavigationContainer>
  );
};

export default App;

