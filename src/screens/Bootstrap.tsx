import React, {useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '../shared/libraries/reactquery/queryClient';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import AppNavigator from '../navigation/AppNavigator';
import {ThemeProvider} from 'react-native-elements';
import {KeyboardProvider} from 'react-native-keyboard-controller';

const Bootstrap = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                routeNameRef.current = navigationRef.getCurrentRoute().name;
              }}
              onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.getCurrentRoute().name;
                const trackScreenView = (routeName: string) => {
                  // Your implementation of analytics goes here!
                  console.log('currentRouteName', routeName);
                };

                if (previousRouteName !== currentRouteName) {
                  // Save the current route name for later comparison
                  routeNameRef.current = currentRouteName;

                  // Replace the line below to add the tracker from a mobile analytics SDK
                  await trackScreenView(currentRouteName);
                }
              }}>
              <AppNavigator />
            </NavigationContainer>
          </KeyboardProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Bootstrap;
