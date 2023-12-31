import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '../shared/libraries/reactquery/queryClient';
import {NavigationContainer} from '@react-navigation/native';
import RootAppNavigator from '../navigation/RootAppNavigator';

const Bootstrap = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootAppNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default Bootstrap;
