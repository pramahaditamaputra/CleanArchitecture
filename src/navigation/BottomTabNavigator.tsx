/**
 * Renders a bottom tab navigator for the app.
 *
 * @returns The bottom tab navigator component.
 */
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
