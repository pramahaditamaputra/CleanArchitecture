import React from 'react';
import AppBottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import Initialize from '../screens/Initialize';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootParamList = {
  Initialize: undefined;
  Login: undefined;
  MainApp: {screen: string};
};

const Stack = createNativeStackNavigator<RootParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Initialize">
      <Stack.Group>
        <Stack.Screen
          name="Initialize"
          component={Initialize}
          options={{headerShown: false}}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="MainApp"
          component={AppBottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigator;
