import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '../shared/libraries/reactquery/queryClient';
import {NavigationContainer} from '@react-navigation/native';
import RootAppNavigator from '../navigation/RootAppNavigator';
import AuthenticateAppNavigator from '../navigation/AuthenticateAppNavigator';
import {ThemeProvider} from 'react-native-elements';
import {KeyboardProvider} from 'react-native-keyboard-controller';

export const isSignedIn = false;

const Bootstrap = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <NavigationContainer>
              {/* {!isSignedIn ? <AuthenticateAppNavigator /> : <RootAppNavigator />} */}
              <RootAppNavigator />
            </NavigationContainer>
          </KeyboardProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Bootstrap;
