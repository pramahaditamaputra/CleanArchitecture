import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const BottomTab = createBottomTabNavigator();

const AppBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Group>
        <BottomTab.Screen name="Home" component={HomeScreen} />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
};

export default AppBottomTabNavigator;
