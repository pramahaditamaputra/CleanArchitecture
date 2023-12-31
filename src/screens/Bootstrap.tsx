import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '../shared/libraries/reactquery/queryClient';
import {NavigationContainer} from '@react-navigation/native';
import RootAppNavigator from '../navigation/RootAppNavigator';
import AuthenticateAppNavigator from '../navigation/AuthenticateAppNavigator';
import {ThemeProvider} from 'react-native-elements';

export const isSignedIn = false;

const Bootstrap = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            {/* {!isSignedIn ? <AuthenticateAppNavigator /> : <RootAppNavigator />} */}
            <RootAppNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default Bootstrap;
